"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./SplashScreen";

const ClientWrapper = ({ children }) => {
  const [showSplash, setShowSplash] = useState(false);
  const pathname = usePathname();
  const SPLASH_DURATION = 2000; //  3seconds

  useEffect(() => {
    // Check if this is a fresh load (not client-side navigation)
    const navigationType = performance.getEntriesByType('navigation')[0]?.type;
    const isReload = navigationType === 'reload';
    const isFirstVisit = !localStorage.getItem('hasVisited');
    
    if (isReload || isFirstVisit) {
      localStorage.setItem('hasVisited', 'true');
      setShowSplash(true);
      
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, SPLASH_DURATION);

      return () => clearTimeout(timer);
    }
  }, [pathname]); // Re-run when path changes

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && children}
    </>
  );
};

export default ClientWrapper;