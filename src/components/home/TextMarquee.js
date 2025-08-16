"use client";
import React, { useEffect, useRef, useState } from "react";

const TextMarquee = () => {
  const [position, setPosition] = useState(window.innerWidth);
  const requestRef = useRef(null);

  useEffect(() => {
    const speed = 2; // pixels per frame

    const animate = () => {
      setPosition((prev) => {
        if (prev < -1000) return window.innerWidth; // reset when off screen
        return prev - speed;
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section className="bg-blue-900 overflow-hidden relative h-12">
      <p
        className="absolute text-white rubik text-lg whitespace-nowrap top-1/2 -translate-y-1/2"
        style={{ left: position }}
      >
        Join our webinar: Achieving NEPRA Cybersecurity Compliance with Kaspersky
      </p>
    </section>
  );
};

export default TextMarquee;
