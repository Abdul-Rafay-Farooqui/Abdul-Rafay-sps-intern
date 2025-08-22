export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, company, job, time, date, terms, captchaToken } =
    req.body;

  // Verify reCAPTCHA v3
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    { method: "POST" }
  );
  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return res.status(400).json({ message: "reCAPTCHA verification failed" });
  }

  // Check reCAPTCHA v3 score (0.0 is very likely a bot, 1.0 is very likely a human)
  if (verifyData.score < 0.5) {
    return res
      .status(400)
      .json({ message: "reCAPTCHA score too low, please try again" });
  }

  // ✅ reCAPTCHA passed → handle form (e.g., send email, save to DB)
  console.log("Form data received:", {
    name,
    email,
    phone,
    company,
    job,
    time,
    date,
    terms,
  });

  res.status(200).json({ message: "Form submitted successfully!" });
}
