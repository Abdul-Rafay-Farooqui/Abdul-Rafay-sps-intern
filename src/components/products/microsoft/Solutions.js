"use client";
import React from "react";

const Solutions = () => {
  return (
    <section className="relative px-6 py-16  my-6 bg-blue-100 overflow-hidden">
      {/* Decorative blurred shapes */}

      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold text-center text-black mb-14 tracking-tight ">
        Microsoft Solutions for IT &amp; OT Asset Security
      </h2>

      <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-10">
        {/* Left column */}
        <div className="w-full lg:w-[32%] flex flex-col gap-8">
          {/* Microsoft Azure */}
          <div className="bg-white/90 border-l-8 border-blue-900 rounded-2xl p-7 shadow-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-blue-800 rounded-full animate-pulse"></span>
              Microsoft Azure
            </h3>
            <ul className="pl-0 text-black space-y-4">
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>
                  Secure cloud infrastructure with advanced analytics and AI for proactive risk
                  management. Ensures high availability, disaster recovery, and robust support for IT and OT environments.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Ensures high availability, disaster recovery, and robust support for IT and OT environments.</p>
              </li>
            </ul>
          </div>

          {/* Microsoft Defender for IoT */}
          <div className="bg-white/90 border-l-8 border-blue-900 rounded-2xl p-7 shadow-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-blue-800 rounded-full animate-pulse"></span>
              Microsoft Defender for IoT
            </h3>
            <ul className="pl-0 text-black space-y-4">
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Specialized protection for OT and IoT environments with continuous asset discovery.</p>
              </li>
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Integrates with SIEM systems for centralized real-time threat monitoring.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Center image + Purview Compliance Manager */}
        <div className="w-full lg:w-[30%] flex flex-col items-center justify-center my-8 lg:my-0">
          <div className="relative bg-white/90 rounded-3xl p-8 flex items-center justify-center">
            <img
              src="/images/microsoft2.png"
              alt="Microsoft"
              className="w-64 h-64 object-contain mx-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-8 w-full flex flex-col items-center bg-white/90 border-l-8 border-blue-900 rounded-2xl p-7 shadow-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-blue-800 rounded-full animate-pulse"></span>
              Microsoft Purview Compliance Manager
            </h3>
            <ul className="pl-0 text-black space-y-4 max-w-md">
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Simplifies compliance with tools for assessments, tracking, and reporting.</p>
              </li>
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Provides actionable insights to align with regulatory standards like NEPRA.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-[32%] flex flex-col gap-8">
          {/* Microsoft Sentinel */}
          <div className="bg-white/90 border-l-8 border-blue-900 rounded-2xl p-7 shadow-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-blue-800 rounded-full animate-pulse"></span>
              Microsoft Sentinel
            </h3>
            <ul className="pl-0 text-black space-y-4">
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Cloud-native SIEM and SOAR platform with intelligent security analytics.</p>
              </li>
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Enables rapid incident response through automation and threat intelligence.</p>
              </li>
            </ul>
          </div>

          {/* Microsoft 365 Security */}
          <div className="bg-white/90 border-l-8 border-blue-900 rounded-2xl p-7 shadow-xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-blue-800 rounded-full animate-pulse"></span>
              Microsoft 365 Security
            </h3>
            <ul className="pl-0 text-black space-y-4">
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Protects email, documents, and identities while enabling secure collaboration.</p>
              </li>
              <li className="flex items-start gap-3">
                <img src="/images/checkbox.png" alt="Checked" className="w-5 h-5 mt-[2px]" />
                <p>Enhances security awareness through training and advanced threat insights.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
