export async function POST(request) {
  try {
    const { gRecaptchaToken } = await request.json();

    if (!gRecaptchaToken) {
      return Response.json(
        { success: false, message: "reCAPTCHA token is required" },
        { status: 400 }
      );
    }

    // Verify the token with Google's reCAPTCHA API
    const verificationResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: gRecaptchaToken,
        }),
      }
    );

    const verificationResult = await verificationResponse.json();

    if (verificationResult.success) {
      return Response.json({
        success: true,
        score: verificationResult.score,
        message: "reCAPTCHA verification successful",
      });
    } else {
      return Response.json({
        success: false,
        score: verificationResult.score || 0,
        message: "reCAPTCHA verification failed",
        errors: verificationResult["error-codes"],
      });
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
