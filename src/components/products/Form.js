"use client";
import React, { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

// Declare grecaptcha global for reCAPTCHA v3
if (typeof window !== "undefined") {
  window.grecaptcha = window.grecaptcha || {};
}

const InputIcon = ({ icon, error, ...props }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-800">
      {icon}
    </span>
    <input
      {...props}
      className={`pl-10 ${props.className} ${
        error ? "border-red-600 focus:ring-red-600" : ""
      }`}
      autoComplete="off"
      spellCheck="false"
      aria-invalid={error ? "true" : "false"}
    />
  </div>
);

const Form = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    job: "",
    time: "",
    date: "",
    terms: false,
  });

  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Prevent hydration mismatch by only rendering form after client mount
  useEffect(() => {
    setIsClient(true);

    // Load reCAPTCHA v3 script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Function to execute reCAPTCHA v3
  const executeRecaptcha = async () => {
    if (typeof window.grecaptcha === "undefined") {
      console.error("reCAPTCHA not loaded");
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );
      return token;
    } catch (error) {
      console.error("reCAPTCHA execution error:", error);
      return null;
    }
  };

  const getTodayDateString = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const getTomorrowDateString = () => {
    const now = new Date();
    now.setDate(now.getDate() + 1);
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const validateField = (fieldName, value, allValues) => {
    const values = allValues || formData;
    switch (fieldName) {
      case "name": {
        if (!value || value.trim() === "") return "Name is required.";
        if (value.trim().length < 3)
          return "Name must be at least 3 characters.";
        if (!/^[A-Za-z\s]+$/.test(value.trim()))
          return "Name can contain only letters and spaces.";
        return "";
      }
      case "email": {
        if (!value || value.trim() === "") return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim()))
          return "Enter a valid email (example@domain.com).";
        return "";
      }
      case "phone": {
        if (!value || value.trim() === "") return "Phone is required.";
        if (!/^\d+$/.test(value)) return "Phone can contain digits only.";
        if (value.length < 10 || value.length > 15)
          return "Phone must be 10–15 digits.";
        return "";
      }
      case "company": {
        if (!value || value.trim() === "")
          return "Company / Organization is required.";
        if (value.trim().length < 2)
          return "Company must be at least 2 characters.";
        return "";
      }
      case "job": {
        if (!value || value.trim() === "")
          return "Job Title / Role is required.";
        if (value.trim().length < 2)
          return "Job Title / Role must be at least 2 characters.";
        return "";
      }
      case "date": {
        if (!value) return "Select Date is required.";
        const today = getTodayDateString();
        if (value <= today) return "Date must be in the future (not today).";
        return "";
      }
      case "time": {
        if (!value) return "Select Time is required.";
        return "";
      }
      case "terms": {
        if (!values.terms) return "You must accept the Terms & Conditions.";
        return "";
      }
      default:
        return "";
    }
  };

  const validateForm = (values) => {
    const newErrors = {};
    const fields = [
      "name",
      "email",
      "phone",
      "company",
      "job",
      "date",
      "time",
      "terms",
    ];
    fields.forEach((field) => {
      const message = validateField(field, values[field], values);
      if (message) newErrors[field] = message;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: e.target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const message = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Execute reCAPTCHA v3
    const captchaToken = await executeRecaptcha();
    if (!captchaToken) {
      toast.error("reCAPTCHA verification failed. Please try again.", {
        duration: 3000,
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      setIsSubmitting(false);
      return;
    }

    const currentErrors = validateForm(formData);
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      setIsSubmitting(false);
      toast.error("Please fix the highlighted errors.", {
        duration: 3000,
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      return;
    }

    try {
      // Send form data to API endpoint
      const submissionData = {
        ...formData,
        captchaToken: captchaToken,
      };

      console.log("Form submitted:", submissionData);

      // Call the API endpoint
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Form submission failed");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        job: "",
        time: "",
        date: "",
        terms: false,
      });
      setErrors({});
      setCaptchaToken(null);

      toast.success(
        "Thank you! Your consultation request has been submitted.",
        {
          duration: 3000,
          style: { borderRadius: "10px", background: "#333", color: "#fff" },
        }
      );
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        "There was an error submitting your request. Please try again.",
        {
          duration: 3000,
          style: { borderRadius: "10px", background: "#333", color: "#fff" },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render form until client-side to prevent hydration issues
  if (!isClient) {
    return (
      <section className="flex justify-center items-center min-h-[40vh] px-8 py-10">
        <div className="relative w-full mt-3 max-w-3xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-800 p-10 flex flex-col items-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex justify-center items-center min-h-[40vh] px-3 md:px-8 py-10 ">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Centered Form */}
      <div className="relative w-full mt-3 max-w-3xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-800 p-10 flex flex-col items-center">
        {/* Floating Icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-800 rounded-full p-4 shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M16 3v4M8 3v4" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-3 md:mb-6 text-center tracking-tight ">
          Get Started with NEPRA Compliance
        </h2>
        <p className="text-black text-sm md:text-base text-center mb-8 font-medium">
          Schedule your consultation today and take the first step toward secure
          compliance.
        </p>
        <form
          className="space-y-6 w-full flex flex-col items-center"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="md:flex gap-4 space-y-4 md:space-y-0 w-full md:w-3/4">
            <div className="w-full">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <InputIcon
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
                required
                error={Boolean(errors.name)}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 20v-2a6 6 0 0112 0v2" />
                  </svg>
                }
                className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800 text-blue-800 bg-white shadow"
              />
              {errors.name && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.name}
                </div>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <InputIcon
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                required
                error={Boolean(errors.email)}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 4l8 8 8-8" />
                  </svg>
                }
                className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800 text-blue-800  bg-white shadow"
              />
              {errors.email && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          <div className="md:flex gap-4 space-y-4 md:space-y-0 w-full md:w-3/4">
            <div className="w-full">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <InputIcon
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Phone"
                required
                error={Boolean(errors.phone)}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.24.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45c1.08.35 2.19.59 3.32.72a2 2 0 011.72 2z" />
                  </svg>
                }
                className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800 text-blue-800  bg-white shadow"
              />
              {errors.phone && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.phone}
                </div>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="company" className="sr-only">
                Company or Organization
              </label>
              <InputIcon
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Company/Organization"
                required
                error={Boolean(errors.company)}
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M16 3v4M8 3v4" />
                  </svg>
                }
                className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800 text-blue-800 bg-white shadow"
              />
              {errors.company && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.company}
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <label htmlFor="job" className="sr-only">
              Job Title or Role
            </label>
            <InputIcon
              id="job"
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Job Title/Role"
              required
              error={Boolean(errors.job)}
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              }
              className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800 text-blue-800 bg-white shadow"
            />
            {errors.job && (
              <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                {errors.job}
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">
            <div className="w-full md:w-1/2">
              <label htmlFor="time" className="sr-only">
                Preferred Time
              </label>
              <input
                id="time"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 text-blue-800 placeholder:text-gray-600 bg-white shadow ${
                  errors.time
                    ? "border-red-600 focus:ring-red-600"
                    : "border-blue-800 focus:ring-blue-800"
                }`}
              />
              {errors.time && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.time}
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="date" className="sr-only">
                Preferred Date
              </label>
              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                min={getTomorrowDateString()}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 text-blue-800 placeholder:text-gray-600 bg-white shadow ${
                  errors.date
                    ? "border-red-600 focus:ring-red-600"
                    : "border-blue-800 focus:ring-blue-800"
                }`}
              />
              {errors.date && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.date}
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 h-4 w-4 rounded border ${
                  errors.terms ? "border-red-600" : "border-blue-800"
                }`}
              />
              <span className="text-sm text-black">
                I agree to the{" "}
                <span className="font-semibold">Terms & Conditions</span>
              </span>
            </label>
            {errors.terms && (
              <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                {errors.terms}
              </div>
            )}
          </div>

          {/* reCAPTCHA v3 Notice */}
          <div className="w-full md:w-3/4 text-center">
            <p className="text-xs text-gray-600">
              This site is protected by reCAPTCHA v3 and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-3/4 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white py-3 rounded-xl shadow-lg font-semibold text-lg tracking-wide transition-all duration-200 hover:scale-105 border-2 border-blue-700 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
