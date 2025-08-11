"use client";
import React from "react";

const products = [
  {
    title: "Endpoint Security",
    description: "Protect endpoints with advanced EDR and embedded security.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 12h8" />
      </svg>
    ),
    links: [
      "Kaspersky Next EDR Foundations",
      "Kaspersky Next EDR Optimum",
      "Kaspersky Next EDR Expert",
      "Kaspersky Private Security Network",
      "Kaspersky Embedded Systems Security",
    ],
  },
  {
    title: "SIEM & XDR",
    description: "Centralized security event management and detection.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    links: ["Kaspersky Next XDR Expert", "Kaspersky SIEM"],
  },
  {
    title: "Cyber-Physical Systems Protection",
    description: "Safeguard industrial and cyber-physical environments.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    links: ["Kaspersky Industrial Cybersecurity Platform"],
  },
  {
    title: "Network",
    description: "Secure your network, mail, and gateways.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 12h16M12 4v16" />
      </svg>
    ),
    links: [
      "Kaspersky SD-WAN",
      "Kaspersky Anti Targeted Attack",
      "Kaspersky Security for Mail Server",
      "Kaspersky Security for Internet Gateway",
    ],
  },
  {
    title: "Cloud Workload",
    description: "Comprehensive cloud and container security.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <ellipse cx="12" cy="12" rx="8" ry="6" />
        <path d="M8 12h8" />
      </svg>
    ),
    links: ["Kaspersky Hybrid Cloud Security", "Kaspersky Container Security"],
  },
  {
    title: "Threat Intelligence",
    description: "Actionable insights for proactive defense.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    links: ["Kaspersky Threat Intelligence"],
  },
  {
    title: "Cyber Immune Products",
    description: "Resilient solutions for IoT and thin clients.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
      </svg>
    ),
    links: [
      "KasperskyOS-based solutions",
      "Kaspersky IoT Infrastructure Security",
      "Kaspersky Thin Client",
    ],
  },
];

const Products = () => {
  return (
    <section className="px-6 py-12 bg-blue-50 my-4">
      <h2 className="text-3xl text-gray-900 text-center font-bold mb-10 tracking-tight drop-shadow-lg">
        Kaspersky IT &amp; OT Security Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product, idx) => (
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
              {product.icon}
            </div>
            <div className="font-bold text-lg mb-2 text-gray-900 tracking-tight text-center">
              {product.title}
            </div>
            <div className="text-xs text-gray-800 mb-4 text-center font-medium">
              {product.description}
            </div>
            <ul className="pl-0 space-y-3 w-full">
              {product.links.map((link, i) => (
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

export default Products;
