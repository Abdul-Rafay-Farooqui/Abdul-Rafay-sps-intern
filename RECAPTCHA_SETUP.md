# reCAPTCHA v3 Setup Guide

## Overview

This project uses reCAPTCHA v3, which is an invisible reCAPTCHA that runs in the background and provides a score based on user behavior.

## Setup Steps

### 1. Get reCAPTCHA v3 Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Choose **reCAPTCHA v3**
3. Add your domain(s)
4. Accept the terms and submit
5. Copy both the **Site Key** and **Secret Key**

### 2. Create Environment Variables

Create a `.env.local` file in your project root with:

```bash
# reCAPTCHA v3 Keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_v3_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_v3_secret_key_here
```

### 3. Key Differences from v2

- **Site Key**: Used in frontend (public)
- **Secret Key**: Used in backend API (private)
- **No user interaction required**: Runs automatically
- **Score-based**: Returns 0.0 (bot) to 1.0 (human)
- **Action-based**: Can specify different actions for different contexts

### 4. How It Works

1. User fills out form
2. On submit, reCAPTCHA v3 executes invisibly
3. Token is generated and sent with form data
4. Backend verifies token with Google's API
5. Score is checked (threshold: 0.5)
6. Form is processed if verification passes

### 5. Testing

- Use test keys during development
- Check browser console for any errors
- Verify API endpoint receives captchaToken
- Test with different user behaviors

## Troubleshooting

### "Invalid key type" Error

- Ensure you're using **reCAPTCHA v3** keys, not v2
- Check that environment variables are loaded correctly
- Verify the keys are copied exactly from Google Admin Console

### reCAPTCHA Not Loading

- Check browser console for script loading errors
- Verify NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set
- Ensure domain is added to reCAPTCHA settings

### Verification Failing

- Check RECAPTCHA_SECRET_KEY is set correctly
- Verify the token is being sent from frontend
- Check API endpoint logs for verification response
