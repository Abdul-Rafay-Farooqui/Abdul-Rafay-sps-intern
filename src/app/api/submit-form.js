export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message, captcha } = req.body;

  // Verify CAPTCHA
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    { method: "POST" }
  );
  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return res.status(400).json({ message: "Captcha verification failed" });
  }

  // ✅ Captcha passed → handle form (e.g., send email, save to DB)
  res.status(200).json({ message: "Form submitted successfully!" });
}
