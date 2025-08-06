import React from "react";

const Solutions = () => {
  return (
    <section className="px-6 py-12 bg-white rounded-xl border border-gray-200 m-4 shadow-xl shadow-blue-500/30">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
        Microsoft Solutions for IT &amp; OT Asset Security
      </h2>
      <div className="flex flex-col lg:flex-row  justify-between gap-8">
        {/* Left column */}
        <div className="w-full lg:w-[33%]  flex flex-col gap-8">
          <div>
            <h3 className="text-xl text-gray-800 mb-2">Microsoft Azure</h3>
            <ul className="pl-0 text-gray-700 space-y-5">
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Secure cloud infrastructure with advanced analytics and AI for proactive risk management. Ensures high availability, disaster recovery, and robust support for IT and OT environments.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Ensures high availability, disaster recovery, and robust
                  support for IT and OT environments.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-gray-800 mb-2">
              Microsoft Defender for IoT
            </h3>
            <ul className="pl-0 text-gray-700 space-y-5">
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Specialized protection for OT and IoT environments with
                  continuous asset discovery.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Integrates with SIEM systems for centralized real-time threat
                  monitoring.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Center image and Microsoft Purview Compliance Manager */}
        <div className="w-[50%] lg:w-[34%] flex flex-col justify-center items-center my-8 lg:my-0">
          <img
            src="/images/microsoft2.png"
            alt="microsoft"
            className="w-full h-full object-contain mx-auto"
          />
          <div className="mt-8 w-full flex flex-col items-center">
            <h3 className="text-xl text-gray-700 mb-3 text-center">
              Microsoft Purview Compliance Manager
            </h3>
            <ul className="pl-0 text-gray-700 space-y-3 w-full max-w-md">
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Simplifies compliance with tools for assessments, tracking,
                  and reporting.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Provides actionable insights to align with regulatory
                  standards like NEPRA.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Right column */}
        <div className="w-full lg:w-[32%] flex flex-col gap-8">
          <div>
            <h3 className="text-xl text-gray-800 mb-2">Microsoft Sentinel</h3>
            <ul className="pl-0 text-gray-700 space-y-5">
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Cloud-native SIEM and SOAR platform with intelligent security
                  analytics.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Enables rapid incident response through automation and threat
                  intelligence.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-gray-800 mb-2">
              Microsoft 365 Security
            </h3>
            <ul className="pl-0 text-gray-700 space-y-5">
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Protects email, documents, and identities while enabling
                  secure collaboration.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/images/checkbox.png"
                  alt="Checked"
                  className="w-5 h-5 mt-[2px]"
                />
                <p className="m-0 p-0">
                  Enhances security awareness through training and advanced
                  threat insights.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
