"use client";
import React from "react";

const Jobs = () => {
  // Example jobs (you can fetch or map from API/JSON later)
  const jobs = [
    {
      title: "Cybersecurity Analyst",
      location: "Islamabad, Pakistan",
      type: "Full-Time",
      desc: "Responsible for monitoring, analyzing, and responding to cybersecurity threats in the power sector.",
    },
    {
      title: "Compliance Officer (NEPRA)",
      location: "Karachi, Pakistan",
      type: "Full-Time",
      desc: "Assist in ensuring compliance with NEPRA’s cybersecurity guidelines across the power sector entities.",
    },
    {
      title: "Network Security Engineer",
      location: "Lahore, Pakistan",
      type: "Full-Time",
      desc: "Implement and manage secure network infrastructure to safeguard operational technology (OT) and IT systems.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-12">
        Career Opportunities at SPS NEPRA
      </h2>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                📍 {job.location} | 🕒 {job.type}
              </p>
              <p className="text-gray-700 leading-relaxed">{job.desc}</p>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl font-semibold transition-all">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
