"use client";
import React, { useState } from "react";

const Products = ({ products, heading, color }) => {
  const [expandedIndices, setExpandedIndices] = useState(() => new Set());

  const toggleLinks = (index) => {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };
  const isBlue = color == "blue";

  return (
    <section className={`${isBlue ? "bg-blue-50" : "bg-white"}`}>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl text-black text-center font-bold mb-10 tracking-tight ">
          {heading}
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((product, idx) => {
            const isExpanded = expandedIndices.has(idx);

            return (
              <div
                key={idx}
                className={`relative group rounded-2xl p-6 shadow-all bg-white/90 backdrop-blur-lg border border-blue-200
                hover:shadow-xl hover:border-blue-700 hover:bg-white hover:-translate-y-1
                w-[90%] sm:w-[48%] md:w-[31%] lg:w-[24%] flex flex-col transition-all duration-300`}
                style={{
                  borderTop: "6px solid #1e40af",
                  height: isExpanded ? "auto" : "270px", // uniform base height
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-3">
                  {product.icon}
                </div>

                {/* Title */}
                <div className="font-bold text-lg mb-2 text-black tracking-tight text-center">
                  {product.title}
                </div>

                {/* Description */}
                <div className="text-sm text-black mb-4 text-center font-medium">
                  {product.description}
                </div>

                {/* Animated Links Wrapper */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{
                    maxHeight: isExpanded
                      ? `${product.links.length * 40}px`
                      : "0px",
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <ul className="pl-0 space-y-3 w-full mt-1">
                    {product.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-black hover:text-blue-800 text-sm font-medium hover:underline transition-colors duration-150"
                        >
                          <span className="text-blue-800 font-bold">&gt;</span>
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
                    className="mt-2 text-blue-800 hover:text-blue-900 hover:underline text-sm font-semibold self-center"
                  >
                    {isExpanded ? "...Read Less" : "Read More..."}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-white text-blue-800 py-3 font-bold px-7 rounded-lg shadow-lg text-lg tracking-wide transition-all duration-200 hover:bg-blue-700 hover:text-white border-2 border-blue-800">
            Request the Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
