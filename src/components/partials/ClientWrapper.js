"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./SplashScreen";

const ClientWrapper = ({ children }) => {
  const [showSplash, setShowSplash] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();
  const SPLASH_DURATION = 3200; // 3.2 seconds

  useEffect(() => {
    // Mark as hydrated to prevent hydration mismatches
    setIsHydrated(true);

    // Check if this is a fresh load (not client-side navigation)
    const navigationType = performance.getEntriesByType("navigation")[0]?.type;
    const isReload = navigationType === "reload";
    const isFirstVisit = !localStorage.getItem("hasVisited");

    if (isReload || isFirstVisit) {
      localStorage.setItem("hasVisited", "true");
      setShowSplash(true);

      const timer = setTimeout(() => {
        setShowSplash(false);
      }, SPLASH_DURATION);

      return () => clearTimeout(timer);
    }
  }, [pathname]); // Re-run when path changes

  // Don't render anything until hydration is complete
  if (!isHydrated) {
    return null;
  }

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && children}
    </>
  );
};

export default ClientWrapper;
