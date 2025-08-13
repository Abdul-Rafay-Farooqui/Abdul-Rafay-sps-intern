"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-blue-600 transition-opacity duration-500 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
      </div>
    </div>
  );
}
