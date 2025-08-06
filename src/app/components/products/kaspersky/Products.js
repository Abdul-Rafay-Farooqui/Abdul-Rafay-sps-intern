import React from "react";

const products = [
  {
    title: "Endpoint Security",
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
    links: ["Kaspersky Next XDR Expert", "Kaspersky SIEM"],
  },
  {
    title: "Cyber-Physical Systems Protection",
    links: ["Kaspersky Industrial Cybersecurity Platform"],
  },
  {
    title: "Network",
    links: [
      "Kaspersky SD-WAN",
      "Kaspersky Anti Targeted Attack",
      "Kaspersky Security for Mail Server",
      "Kaspersky Security for Internet Gateway",
    ],
  },
  {
    title: "Cloud Workload",
    links: ["Kaspersky Hybrid Cloud Security", "Kaspersky Container Security"],
  },
  {
    title: "Threat Intelligence",
    links: ["Kaspersky Threat Intelligence"],
  },
  {
    title: "Cyber Immune Products",
    links: [
      "KasperskyOS-based solutions",
      "Kaspersky IoT Infrastructure Security",
      "Kaspersky Thin Client",
    ],
  },
];

const Products = () => {
  return (
    <section className="px-6 py-12 bg-white rounded-xl border border-gray-200 m-4 shadow-xl shadow-blue-500/30">
      <h2 className="text-3xl text-gray-900 text-center font-semibold mb-10 tracking-tight">
        Kaspersky IT &amp; OT Security Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm flex flex-col  w-full max-w-xs"
          >
            <div className="font-medium text-lg mb-3 text-gray-800 ">
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

export default Products;
