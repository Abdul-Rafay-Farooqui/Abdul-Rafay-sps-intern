"use client";
import React from "react";

const Compliance = ({ title, intro, points }) => {
  return (
    <section className="relative px-6 py-16 my-6 bg-blue-100 overflow-hidden">

      {/* Title */}
      <h1 className="relative z-10 text-3xl md:text-4xl font-extrabold text-center text-black mb-8 tracking-tight ">
        {title}
      </h1>

      {/* Intro */}
      <p className="relative z-10 max-w-4xl mx-auto text-black text-lg mb-10 text-center leading-relaxed">
        {intro}
      </p>

      {/* Compliance Points */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/90 border-l-8 border-blue-900 rounded-2xl p-8 shadow-xl">
        <ul className="pl-0 text-black space-y-5">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1">
                <svg
                  className="w-5 h-5 text-blue-800 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="m-0 p-0">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Compliance;
