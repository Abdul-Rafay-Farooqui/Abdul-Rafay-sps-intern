"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const ClientWrapper = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const SPLASH_DURATION = 2000; // 3 seconds

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  // Don't render anything until mounted on client
  if (!mounted) return null;

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && children}
    </>
  );
};

export default ClientWrapper;