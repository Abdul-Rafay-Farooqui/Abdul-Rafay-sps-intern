"use client";
import React, { useState, useEffect, useRef } from "react";

const Marquee = () => {
  const levels = ["L1", "L2", "L3", "L4", "L5"];
  const [itemWidth, setItemWidth] = useState(230); // Default for SSR
  const [offset, setOffset] = useState(0);
  const [mounted, setMounted] = useState(false);
  const marqueeRef = useRef(null);
  const totalItems = levels.length * 10; // repeat logos to keep marquee long

  useEffect(() => {
    setMounted(true);
    const updateItemWidth = () => {
      if (window.innerWidth < 640) {
        setItemWidth(180); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemWidth(200); // Tablet
      } else {
        setItemWidth(230); // Desktop
      }
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  // Move one logo every 1s
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Reset offset when it reaches half way (for seamless loop)
  useEffect(() => {
    const totalVisibleItems = levels.length * 5;
    if (offset >= totalVisibleItems) {
      setOffset(0); // Reset to beginning without user noticing
    }
  }, [offset, levels.length]);

  // Build long repeated array
  const repeatedLevels = Array.from(
    { length: totalItems },
    (_, i) => levels[i % levels.length]
  );

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="w-full bg-gray-100 py-3 md:py-6 overflow-hidden">
      <div className="relative flex items-center">
        <div
          ref={marqueeRef}
          className="flex space-x-6 md:space-x-10 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${offset * itemWidth}px)`,
          }}
        >
          {repeatedLevels.map((level, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 h-16 md:w-32 md:h-24 flex items-center justify-center"
            >
              <img
                src={`/images/${level.toLowerCase()}.png`}
                alt={`Level ${level}`}
                className="h-16 w-auto md:h-28 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md border border-blue-200 text-blue-600 font-bold text-lg md:text-2xl hidden"
                style={{ display: "none" }}
              >
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
