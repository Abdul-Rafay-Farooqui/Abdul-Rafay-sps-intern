"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const ClientWrapper = ({ children }) => {
  const [showSplash, setShowSplash] = useState(false);
  const SPLASH_DURATION = 3000; // 5 seconds

  useEffect(() => {
    // Check if this is the first visit
    const isFirstVisit = localStorage.getItem('visited') === null;
    
    if (isFirstVisit) {
      setShowSplash(true);
      localStorage.setItem('visited', 'true');
      
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, SPLASH_DURATION);

      return () => clearTimeout(timer);
    }
  }, []);

  return <div>{showSplash ? <SplashScreen /> : children}</div>;
};

export default ClientWrapper;