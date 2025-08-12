"use client";
import React from "react";

const Solutions = ({
  maintitle,
  leftContent = [],
  rightContent = [],
  image,
  imagealt,
}) => {
  return (
    <section className="relative px-6 py-16 bg-blue-100  my-6 shadow-2xl shadow-blue-400/20 overflow-hidden">
      {/* Decorative blurred shapes for depth */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl z-0"></div>
      <h1 className="relative z-10 text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-14 tracking-tight drop-shadow-lg">
        {maintitle}
      </h1>
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-10">
        {/* Left column */}
        <div className="w-full lg:w-[32%] flex flex-col gap-8">
          {leftContent.map((section, idx) => (
            <div
              key={idx}
              className="bg-white/90 border-l-8 border-blue-600 rounded-2xl p-7 shadow-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-6 bg-blue-600 rounded-full animate-pulse"></span>
                {section.title}
              </h2>
              <ul className="pl-0 text-gray-800 space-y-4">
                {section.points.map((point, pidx) => (
                  <li className="flex items-start gap-3" key={pidx}>
                    <span className="mt-1">
                      <svg
                        className="w-5 h-5 text-blue-500"
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
          ))}
        </div>
        {/* Center image with accent */}
        <div className="w-full lg:w-[30%] flex flex-col items-center justify-center my-8 lg:my-0">
          <div className="relative bg-white/90 rounded-3xl p-8 flex items-center justify-center">
            <img
              src={image}
              alt={imagealt}
              className="w-64 h-64 object-contain mx-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        {/* Right column */}
        <div className="w-full lg:w-[32%] flex flex-col gap-8">
          {rightContent.map((section, idx) => (
            <div
              key={idx}
              className="bg-white/90 border-l-8 border-blue-600 rounded-2xl p-7 shadow-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-6 bg-blue-600 rounded-full animate-pulse"></span>
                {section.title}
              </h3>
              <ul className="pl-0 text-gray-800 space-y-4">
                {section.points.map((point, pidx) => (
                  <li className="flex items-start gap-3" key={pidx}>
                    <span className="mt-1">
                      <svg
                        className="w-5 h-5 text-blue-500"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
