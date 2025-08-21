import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// POST /api/chat
export async function POST(request) {
  try {
    const { messages } = await request.json();
    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const apiKey =
      process.env.GOOGLE_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GOOGLE_API_KEY" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Convert messages to a single prompt for simplicity
    const prompt = messages
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n");

    // Retrieval step: load local embeddings and find top-k matches
    const dataPath = path.join(process.cwd(), "data", "site-embeddings.json");
    let topContext = "";
    try {
      if (fs.existsSync(dataPath)) {
        const raw = fs.readFileSync(dataPath, "utf8");
        const parsed = JSON.parse(raw);
        const records = parsed.records || [];

        // Embed the latest user query only for retrieval
        const lastUser = [...messages].reverse().find((m) => m.role === "user");
        const userQuery = lastUser?.content || prompt;
        const embedModel = new GoogleGenerativeAI(
          process.env.GOOGLE_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_API_KEY
        ).getGenerativeModel({ model: "text-embedding-004" });
        const q = await embedModel.embedContent(userQuery);
        const qVec = q?.embedding?.values || [];

        function cosineSim(a, b) {
          let dot = 0,
            na = 0,
            nb = 0;
          const len = Math.min(a.length, b.length);
          for (let i = 0; i < len; i++) {
            dot += a[i] * b[i];
            na += a[i] * a[i];
            nb += b[i] * b[i];
          }
          return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8);
        }

        const scored = qVec.length
          ? records
              .map((r) => ({ ...r, score: cosineSim(qVec, r.vector) }))
              .sort((a, b) => b.score - a.score)
              .slice(0, 12)
          : [];

        topContext = scored
          .map((s, i) => `# Source ${i + 1}: ${s.path}\n${s.chunk}`)
          .join("\n\n");

        // Attach sources to response later
        request.scoredSources = scored.map(({ path: p, id, score }) => ({
          path: p,
          id,
          score: Number(score?.toFixed?.(4) ?? score) || 0,
        }));
      }
    } catch (e) {
      console.warn("retrieval failed", e?.message || e);
    }

    const systemPreamble = `You are the assistant for the NEPRA compliance website (this website). Answer STRICTLY using the provided website context. Do not rely on external knowledge about the government regulator unless the user explicitly asks beyond the site. If the context does not contain the answer, say you cannot find it on this website and suggest where to look within the site (e.g., Services, Products, or Contact). Keep answers concise and site-specific.`;

    const finalPrompt = topContext
      ? `${systemPreamble}\n\nContext:\n${topContext}\n\nConversation:\n${prompt}`
      : `${systemPreamble}\n\nConversation:\n${prompt}`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: finalPrompt }] }],
    });
    const text = result.response.text();
    const sources = request.scoredSources || [];
    return NextResponse.json({ text, sources });
  } catch (error) {
    console.error("/api/chat error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
