"use client";

export default function SplashScreen() {

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-600">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
      </div>
    </div>
  );
}