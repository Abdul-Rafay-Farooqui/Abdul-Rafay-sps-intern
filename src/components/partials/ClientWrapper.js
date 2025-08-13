"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const ClientWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  var waitTime = 6000;

  // Simulate an async operation (e.g., fetching data) that takes some time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false when the content is ready
    }, waitTime); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <SplashScreen /> : children}</div>;
};

export default ClientWrapper;