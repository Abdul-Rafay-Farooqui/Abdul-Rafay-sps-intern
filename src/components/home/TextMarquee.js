"use client";
import React from "react";

const TextMarquee = () => {
  return (
    <section className="bg-blue-900 overflow-hidden relative h-12">
      <div className="whitespace-nowrap absolute top-1/2 -translate-y-1/2 animate-marquee">
        <p className="text-white rubik text-lg inline-block px-8">
          Join our webinar: Achieving NEPRA Cybersecurity Compliance with Kaspersky
        </p>
      </div>
    </section>
  );
};

export default TextMarquee;
