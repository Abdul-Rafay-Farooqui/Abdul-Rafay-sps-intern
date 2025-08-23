"use client";
import React, { useState, useRef, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useGoogleReCaptcha, GoogleReCaptcha } from "react-google-recaptcha-v3";

export default function PolicyFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const toastTimerRef = useRef(null);
  const fileInputRef = useRef(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const showToast = (message, type = "success") => {
    if (type === "success") {
      toast.success(message, {
        duration: 3000,
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
    } else {
      toast.error(message, {
        duration: 3000,
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
    }
  };

  const validateField = (name, value) => {
    switch (name) {
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
      case "company": {
        if (!value || value.trim() === "") return "Company is required.";
        if (value.trim().length < 2)
          return "Company must be at least 2 characters.";
        return "";
      }

      default:
        return "";
    }
  };

  const validateForm = (values) => {
    const newErrors = {};
    ["name", "email", "company"].forEach((field) => {
      const message = validateField(field, values[field]);
      if (message) newErrors[field] = message;
    });
    return newErrors;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const message = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Execute reCAPTCHA first
    if (!executeRecaptcha) {
      showToast("reCAPTCHA not available. Please refresh the page.", "error");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("policySubmit");

    // Verify reCAPTCHA first
    try {
      const response = await fetch("/api/recaptchaSubmit", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gRecaptchaToken,
        }),
      });

      const recaptchaResult = await response.json();

      if (recaptchaResult?.success === true) {
        console.log(`Success with score: ${recaptchaResult?.score}`);
      } else {
        console.log(`Failure with score: ${recaptchaResult?.score}`);
        showToast("Failed to verify reCAPTCHA! You must be a robot!", "error");
        return;
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      showToast("reCAPTCHA verification failed. Please try again.", "error");
      return;
    }

    const currentErrors = validateForm(formData);
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      showToast("Please fix the highlighted errors.", "error");
      return;
    }
    setErrors({});
    // Clear the form and file input on successful submit
    setFormData({
      name: "",
      email: "",
      company: "",
      file: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    showToast("Your policy has been submitted for review.", "success");
  };

  return (
    <section className="relative px-6 py-20 bg-blue-100 mt-12 overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="relative max-w-4xl mx-auto z-10">
        <h1 className="text-4xl font-extrabold text-black mb-4 text-center">
          Check your Security Policy for NEPRA Compliance
        </h1>
        <p className="text-center text-black max-w-2xl mx-auto mb-10">
          Upload your policy for a quick compliance check. We’ll guide you on
          how to meet NEPRA cybersecurity regulations while protecting your
          critical IT & OT assets.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-all space-y-6 border border-blue-300"
        >
          {/* Row 1: Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="policy-name"
                className="block text-black font-medium mb-2"
              >
                Name*
              </label>
              <input
                id="policy-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border border-blue-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-800 text-blue-800 focus:border-blue-800"
              />
              {errors.name && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.name}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="policy-email"
                className="block text-black font-medium mb-2"
              >
                Email*
              </label>
              <input
                id="policy-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-blue-800"
              />
              {errors.email && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          {/* Row 2: Company Name & File Upload */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="policy-company"
                className="block text-black font-medium mb-2"
              >
                Company Name*
              </label>
              <input
                id="policy-company"
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border border-blue-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 text-blue-800"
              />
              {errors.company && (
                <div className="mt-2 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm px-3 py-2">
                  {errors.company}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="policy-file"
                className="block text-black font-medium mb-2"
              >
                Upload Your Policy File
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="policy-file"
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <label
                  htmlFor="policy-file"
                  className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer transition-colors"
                >
                  Choose File
                </label>
                <span className="text-gray-600 text-sm truncate">
                  {formData.file ? formData.file.name : "No file chosen"}
                </span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-black mt-2">
            <strong>Disclaimer:</strong> We respect your privacy. Any files or
            data shared with us are not saved or stored and are permanently
            discarded after your assessment.
          </p>

          {/* reCAPTCHA v3 Badge and Notice */}
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div className="recaptcha-badge-container">
                <GoogleReCaptcha onVerify={() => {}} />
              </div>
            </div>
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

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-900 hover:from-blue-900 hover:to-blue-600 text-white px-8 py-3 rounded-xl shadow-lg  text-lg tracking-wide transition-all duration-200 hover:scale-105 border-2 border-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
