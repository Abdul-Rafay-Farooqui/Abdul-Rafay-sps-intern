"use client";
import React from "react";

const Support = ({
  maintitle,
  maintext,
  contentarray = [],
  beneficiaries = [],
}) => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg--blue-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left: Service Details */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 mb-8 border border-blue-200">
            <div className="flex items-center mb-8">
              <span className="inline-block w-2 h-12 bg-blue-600 rounded-full mr-4 animate-pulse"></span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg">
                {maintitle}
              </h1>
            </div>
            {maintext && (
              <p className="text-lg text-gray-800 mb-10 font-medium">
                {maintext}
              </p>
            )}
            <ul className="pl-0 space-y-8">
              {contentarray.map((item, idx) => (
                <li
                  className="flex items-start gap-5 bg-gradient-to-r from-blue-50 via-white to-blue-100 border-l-4 border-blue-500 rounded-xl p-6 shadow-md transition-all duration-200 hover:shadow-xl hover:border-blue-700"
                  key={idx}
                >
                  {/* Icon */}
                  <span className="mt-1">
                    <svg
                      className="w-8 h-8 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">
                      {item.title}
                    </h4>
                    <p className="text-base text-gray-700">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right: Beneficiaries */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start">
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border-2 border-blue-300 z-10">
            <div className="flex items-center mb-8">
              <span className="inline-block w-2 h-10 bg-blue-600 rounded-full mr-3 animate-pulse"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Who Can Benefit?
              </h2>
            </div>
            <p className="text-gray-800 text-base mb-6 font-medium">
              This service is tailored for:
            </p>
            <ul className="pl-0 space-y-5">
              {beneficiaries.map((b, idx) => (
                <li
                  className="flex items-center gap-4 bg-gradient-to-r from-blue-100 via-white to-blue-50 border-l-4 border-blue-400 rounded-xl p-4 shadow transition-all duration-200 hover:shadow-lg hover:border-blue-700"
                  key={idx}
                >
                  {/* Icon */}
                  <span>
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h4 className="text-base text-gray-900 font-semibold">{b}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
