import React from "react";

const products = [
  {
    title: "Defensive services",
    links: [
      "Kaspersky MDR",
      "Kaspersky Incident Response",
      "Kaspersky Digital Footprint Intelligence",
      "Kaspersky SOC Consulting",
      "Kaspersky Compromise Assessment",
    ],
  },
  {
    title: "Offensive services",
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
    links: [
      "Kaspersky Security Awareness",
      "Kaspersky Cybersecurity Training",
      "Kaspersky ICS Training",
      "Kaspersky Product Training",
    ],
  },
  {
    title: "Support",
    links: ["Kaspersky Premium Support", "Kaspersky Professional Services"],
  },
  {
    title: "Threat Intelligence",
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
    <section className="px-6 py-12 bg-white rounded-xl border border-gray-200 m-4 shadow-xl shadow-blue-500/20">
      <h2 className="text-3xl text-gray-900 text-center font-extrabold mb-10 tracking-tight">
        Kaspersky IT &amp; OT Security Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm flex flex-col  w-full max-w-xs"
          >
            <div className="font-semibold text-lg mb-3 text-gray-800 ">
              {product.title}
            </div>
            <ul className="pl-0 space-y-2 w-full ">
              {product.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-black hover:text-blue-900 text-sm  hover:underline transition-colors duration-150"
                  >
                    <span className="text-blue-500 content-start">&gt;</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-blue-800 hover:bg-blue-500 text-white py-3 px-8 rounded-lg shadow transition-colors duration-150 text-lg">
          Request the Quote
        </button>
      </div>
    </section>
  );
};

export default Services;
