/*
  Build embeddings for your site's content using Gemini embeddings.
  Usage: GOOGLE_API_KEY=... node scripts/build-knowledge.js
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "site-embeddings.json");

const API_KEY =
  process.env.GOOGLE_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
if (!API_KEY) {
  console.error("Missing GOOGLE_API_KEY env var");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const embeddingModel = genAI.getGenerativeModel({
  model: "text-embedding-004",
});

function walkFiles(startDir) {
  /** Recursively collect .js files excluding API routes */
  const results = [];
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    const stat = fs.statSync(current);
    if (stat.isDirectory()) {
      const children = fs
        .readdirSync(current)
        .map((name) => path.join(current, name));
      for (const child of children) {
        // Skip node_modules and .next
        if (child.includes("node_modules") || child.includes(".next")) continue;
        // Skip API routes
        if (child.includes(path.join("app", "api"))) continue;
        stack.push(child);
      }
    } else if (current.endsWith(".js")) {
      results.push(current);
    }
  }
  return results;
}

function extractText(raw) {
  // Crude text extractor from JSX/JS: remove imports/exports and tags
  let text = raw
    .replace(/import\s+[^;]+;?/g, " ")
    .replace(/export\s+[^;]+;?/g, " ")
    .replace(/<[^>]+>/g, " ") // strip JSX tags
    .replace(/\{[^}]*\}/g, " ") // strip simple JS expressions
    .replace(/\s+/g, " ")
    .trim();
  return text;
}

function chunkText(text, chunkSize = 1500, overlap = 150) {
  const chunks = [];
  let i = 0;
  while (i < text.length) {
    const end = Math.min(text.length, i + chunkSize);
    const chunk = text.slice(i, end);
    chunks.push(chunk);
    if (end === text.length) break;
    i = end - overlap;
  }
  return chunks;
}

async function embedString(input) {
  // Gemini SDK accepts a plain string for embedContent
  const res = await embeddingModel.embedContent(input);
  // Returns { embedding: { values: number[] } }
  const values = res?.embedding?.values || [];
  return values;
}

async function main() {
  const files = [
    ...walkFiles(path.join(SRC_DIR, "app")),
    ...walkFiles(path.join(SRC_DIR, "components")),
  ];

  const records = [];

  for (const filePath of files) {
    const relPath = path.relative(PROJECT_ROOT, filePath).replace(/\\/g, "/");
    const contents = fs.readFileSync(filePath, "utf8");
    const text = extractText(contents);
    if (!text) continue;
    const chunks = chunkText(text);
    for (let idx = 0; idx < chunks.length; idx++) {
      const chunk = chunks[idx];
      try {
        const vector = await embedString(chunk);
        records.push({ id: `${relPath}#${idx}`, path: relPath, chunk, vector });
        process.stdout.write(".");
      } catch (e) {
        console.warn(
          `\nFailed to embed chunk ${relPath}#${idx}:`,
          e?.message || e
        );
      }
    }
  }

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify({ createdAt: new Date().toISOString(), records }, null, 2)
  );
  console.log(`\nWrote ${records.length} vectors to ${OUTPUT_FILE}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
