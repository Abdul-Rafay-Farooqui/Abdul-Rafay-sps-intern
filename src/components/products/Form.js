"use client";
import React, { useState } from "react";

const InputIcon = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">
      {icon}
    </span>
    <input {...props} className={`pl-10 ${props.className}`} />
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <section className="flex justify-center items-center min-h-[40vh] px-8 py-10 bg-blue-100">
      {/* Centered Form */}
      <div className="relative w-full mt-3 max-w-3xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200 p-10 flex flex-col items-center">
        {/* Floating Icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 rounded-full p-4 shadow-lg">
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center tracking-tight drop-shadow-lg">
          Get Started with NEPRA Compliance
        </h2>
        <p className="text-gray-700 text-center mb-8 font-medium">
          Schedule your consultation today and take the first step toward secure
          compliance.
        </p>
        <form
          className="space-y-6 w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="md:flex gap-4 space-y-4 md:space-y-0 w-3/4">
            <InputIcon
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
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
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-400 bg-white/90 shadow"
            />
            <InputIcon
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
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
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-400 bg-white/90 shadow"
            />
          </div>
          <div className="md:flex gap-4 space-y-4 md:space-y-0 w-3/4">
            <InputIcon
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
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
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-400 bg-white/90 shadow"
            />
            <InputIcon
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company/Organization"
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
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-400 bg-white/90 shadow"
            />
          </div>
          <div className="w-3/4">
            <InputIcon
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Job Title/Role"
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
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-400 bg-white/90 shadow"
            />
            </div>
            <div className="flex gap-4 w-3/4">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-1/2 border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-500 placeholder:text-blue-400 bg-white/90 shadow"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-1/2 border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-500 placeholder:text-blue-400 bg-white/90 shadow"
              />
            </div>
          <button
            type="submit"
            className="w-3/4 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-900 hover:from-blue-900 hover:to-blue-600 text-white py-3 rounded-xl shadow-lg font-semibold text-lg tracking-wide transition-all duration-200 hover:scale-105 border-2 border-blue-300 mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
