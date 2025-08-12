"use client";
import React, { useState } from "react";

const Products = ({products , heading}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleLinks = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
<section className="px-12 py-12 bg-blue-50 my-4">
      <h2 className="text-3xl text-gray-900 text-center font-bold mb-10 tracking-tight drop-shadow-lg">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center items-start">
        {products.map((product, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className={`relative group rounded-2xl p-6 shadow-lg bg-white/80 backdrop-blur-lg border border-blue-100
                hover:shadow-xl hover:border-blue-400 hover:bg-white/90 hover:-translate-y-1
                w-full max-w-xs flex flex-col transition-all duration-300`}
              style={{
                borderTop: "6px solid #2563eb",
                height: isExpanded ? "auto" : "250px", // uniform base height
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-3">{product.icon}</div>

              {/* Title */}
              <div className="font-bold text-lg mb-2 text-gray-900 tracking-tight text-center">
                {product.title}
              </div>

              {/* Description */}
              <div className="text-xs text-gray-800 mb-4 text-center font-medium">
                {product.description}
              </div>

              {/* Animated Links Wrapper */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  maxHeight: isExpanded ? `${product.links.length * 40}px` : "0px",
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                <ul className="pl-0 space-y-3 w-full mt-1">
                  {product.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-900 text-sm font-medium hover:underline  transition-colors duration-150"
                      >
                        <span className="text-blue-400 font-bold">&gt;</span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read More / Less */}
              {product.links.length > 0 && (
                <button
                  onClick={() => toggleLinks(idx)}
                  className="mt-2 text-blue-600 hover:underline text-sm font-semibold self-center"
                >
                  {isExpanded ? "...Read Less" : "Read More..."}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-white text-blue-500 py-3 px-7 rounded-lg shadow-lg text-lg tracking-wide transition-all duration-200 hover:bg-blue-700 hover:text-white border-2 border-blue-800">
          Request the Quote
        </button>
      </div>
    </section>

  );
};

export default Products;
