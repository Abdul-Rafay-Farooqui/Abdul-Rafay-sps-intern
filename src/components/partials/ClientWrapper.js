"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./SplashScreen";
import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ChatWidget = dynamic(() => import("../support/ChatWidget"), {
  ssr: false,
});

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
      const SPLASH_DURATION_MS = isMobile ? 3000 : 2500;

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
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
      useEnterprise={false}
      useRecaptchaNet={false}
    >
      {children}
      {showSplash && <SplashScreen />}
      <ChatWidget />
    </GoogleReCaptchaProvider>
  );
};

export default ClientWrapper;
