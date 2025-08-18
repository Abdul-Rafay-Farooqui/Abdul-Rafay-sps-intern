"use client";
import React, { useState } from "react";

export default function PolicyFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    file: null,
    verified: false,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.verified) {
      alert("Please verify that you are human.");
      return;
    }
    alert("Form submitted!");
  };

  return (
    <section className="relative px-6 py-20 bg-blue-100 mt-12 overflow-hidden">
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
                className="w-full border border-blue-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
              />
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
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
              />
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
                className="w-full border border-blue-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
              />
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

          {/* Human Verification */}
          <div className="flex items-center space-x-3 mt-4">
            <input
              id="policy-verified"
              type="checkbox"
              name="verified"
              checked={formData.verified}
              onChange={handleChange}
              required
              className="w-4 h-4 border-gray-300 rounded"
            />
            <label htmlFor="policy-verified" className="text-black">
              I am not a robot
            </label>
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
