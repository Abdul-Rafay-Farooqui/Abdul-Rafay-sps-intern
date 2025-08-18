"use client";
import React, { useState, useEffect } from "react";

const InputIcon = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-800">
      {icon}
    </span>
    <input
      {...props}
      className={`pl-10 ${props.className}`}
      autoComplete="off"
      spellCheck="false"
    />
  </div>
);

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    job: "",
    time: "",
    date: "",
    verified: false,
  });

  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent hydration mismatch by only rendering form after client mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const nextValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Require agreement to Terms and Conditions
      if (!formData.verified) {
        alert(
          "Please acknowledge and agree to the Terms and Conditions to proceed."
        );
        setIsSubmitting(false);
        return;
      }
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        job: "",
        time: "",
        date: "",
        verified: false,
      });

      // Show success message (you can implement a toast notification here)
      alert("Thank you! Your consultation request has been submitted.");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again.");
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 text-center tracking-tight ">
          Get Started with NEPRA Compliance
        </h2>
        <p className="text-black text-center mb-8 font-medium">
          Schedule your consultation today and take the first step toward secure
          compliance.
        </p>
        <form
          className="space-y-6 w-full flex flex-col items-center"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="md:flex gap-4 space-y-4 md:space-y-0 w-full md:w-3/4">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <InputIcon
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
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
              className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800 bg-white shadow"
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <InputIcon
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
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
              className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800  bg-white shadow"
            />
          </div>
          <div className="md:flex gap-4 space-y-4 md:space-y-0 w-full md:w-3/4">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <InputIcon
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
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
              className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800  bg-white shadow"
            />
            <label htmlFor="company" className="sr-only">
              Company or Organization
            </label>
            <InputIcon
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company/Organization"
              required
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
              className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800 bg-white shadow"
            />
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
              placeholder="Job Title/Role"
              required
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
              className="w-full border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-blue-800 bg-white shadow"
            />
          </div>
          <h2>
            What date and time work best for you to meet with our consultant?
          </h2>
          <div className="flex gap-4 w-full md:w-3/4">
            <label htmlFor="time" className="sr-only">
              Preferred Time
            </label>
            <input
              id="time"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-1/2 border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 text-blue-800 placeholder:text-gray-600 bg-white shadow"
            />
            <label htmlFor="date" className="sr-only">
              Preferred Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-1/2 border border-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800 text-blue-800 placeholder:text-gray-600 bg-white shadow"
            />
          </div>
          <div className="flex items-center">
            <input
              id="verified"
              type="checkbox"
              name="verified"
              checked={formData.verified}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded mr-3"
            />
            <label htmlFor="verified" className="text-black">
              I acknowledge and agree to the{" "}
              <a className="decoration-none text-blue-800">
                Terms and conditions.
              </a>
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-3/4 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white py-3 rounded-xl shadow-lg font-semibold text-lg tracking-wide transition-all duration-200 hover:scale-105 border-2 border-blue-700 mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
