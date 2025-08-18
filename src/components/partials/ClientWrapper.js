"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./SplashScreen";

const ClientWrapper = ({ children }) => {
  const [showSplash, setShowSplash] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();
  // Duration: 4s on mobile (touch/small screens), 3s on desktop

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

      // Determine device type (touch/phone/tablet vs desktop)
      const isMobile =
        (typeof window !== "undefined" &&
          (window.matchMedia("(pointer: coarse)").matches ||
            window.matchMedia("(max-width: 768px)").matches)) ||
        false;
      const SPLASH_DURATION_MS = isMobile ? 4000 : 3000;

      const timer = setTimeout(() => {
        setShowSplash(false);
      }, SPLASH_DURATION_MS);

      return () => clearTimeout(timer);
    }
  }, [pathname]); // Re-run when path changes

  // Disable scroll while splash is shown; keep page mounted to allow loading
  useEffect(() => {
    if (showSplash) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [showSplash]);

  // Don't render anything until hydration is complete
  if (!isHydrated) {
    return null;
  }

  return (
    <>
      {children}
      {showSplash && <SplashScreen />}
    </>
  );
};

export default ClientWrapper;
