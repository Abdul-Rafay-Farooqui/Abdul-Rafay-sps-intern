"use client";
import React from "react";

const services = [
  {
    title: "Defensive Services",
    description:
      "Proactive defense and incident response for your organization.",
    // Shield icon
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
      </svg>
    ),
    links: [
      "Kaspersky MDR",
      "Kaspersky Incident Response",
      "Kaspersky Digital Footprint Intelligence",
      "Kaspersky SOC Consulting",
      "Kaspersky Compromise Assessment",
    ],
  },
  {
    title: "Offensive Services",
    description:
      "Identify vulnerabilities and strengthen your security posture.",
    // Target icon
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    links: [
      "Kaspersky Penetration Testing",
      "Kaspersky Application Security Assessment",
      "Kaspersky ICS Security Assessment",
      "Kaspersky Red Teaming",
      "Security Assessment portfolio",
    ],
  },
  {
    title: "Awareness & Training",
    description: "Empower your team with cybersecurity knowledge and skills.",
    // Graduation cap icon
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
        <path d="M12 12v9" />
        <path d="M7 15l5 2 5-2" />
      </svg>
    ),
    links: [
      "Kaspersky Security Awareness",
      "Kaspersky Cybersecurity Training",
      "Kaspersky ICS Training",
      "Kaspersky Product Training",
    ],
  },
  {
    title: "Support",
    description: "Expert support and professional services for your solutions.",
    // Headset icon
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 17v-3a8 8 0 0116 0v3" />
        <path d="M4 17a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H6a2 2 0 00-2 2v3z" />
        <path d="M20 17a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h1a2 2 0 012 2v3z" />
      </svg>
    ),
    links: ["Kaspersky Premium Support", "Kaspersky Professional Services"],
  },
  {
    title: "Threat Intelligence",
    description: "Stay ahead of threats with actionable intelligence.",
    // Lightbulb icon
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 017 7c0 3.5-2.5 6.5-5 8a7 7 0 01-7-7c0-3.5 2.5-6.5 5-8z" />
      </svg>
    ),
    links: [
      "Kaspersky APT Intelligence Reporting",
      "Kaspersky Takedown Service",
      "Kaspersky Ask The Analyst",
      "Threat Intelligence portfolio",
    ],
  },
];

const Services = () => {
  return (
    <section className="px-6 py-12 bg-blue-100 my-4">
      <h2 className="text-3xl text-gray-900 text-center font-bold mb-10 tracking-tight drop-shadow-lg">
        Kaspersky IT &amp; OT Security Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl p-6 shadow-xl bg-white/80 backdrop-blur-lg border border-blue-100
              transition-all duration-300 hover:shadow-2xl hover:border-blue-400 hover:bg-white/90 hover:-translate-y-1
              w-full max-w-xs"
            style={{
              borderTop: "6px solid #2563eb",
            }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-3">
              {service.icon}
            </div>
            <div className="font-bold text-lg mb-2 text-gray-900 tracking-tight text-center">
              {service.title}
            </div>
            <div className="text-xs text-gray-800 mb-4 text-center font-medium">
              {service.description}
            </div>
            <ul className="pl-0 space-y-3 w-full">
              {service.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-900 text-sm font-medium hover:underline transition-colors duration-150"
                  >
                    <span className="text-blue-400 font-bold">&gt;</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-white text-blue-500 py-3 px-7 rounded-lg shadow-lg  text-lg tracking-wide transition-all duration-200 hover:bg-blue-700 hover:text-white border-2 border-blue-800">
          Request the Quote
        </button>
      </div>
    </section>
  );
};

export default Services;
