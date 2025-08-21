import Header from "@/components/products/Header";
import Pricing from "@/components/pricing/Pricing";
import React from "react";

const page = () => {
  const headerContant = {
    title: "Stay on Track with Proactive Compliance Support",
    description:
      "Our Standard Service is designed for organizations that require consistent, hands-on support to achieve and maintain NEPRA cybersecurity compliance.",
  };
  const MainContent = {
    included: [
      {
        title: "Weekly Compliance Sessions",
        paragraph:
          "Our NEPRA compliance consultant will meet with your team four times a month to review progress, address challenges, and guide you toward compliance.",
      },
      {
        title: "Detailed Compliance Roadmaps",
        paragraph:
          "Get a comprehensive plan to enhance your cybersecurity posture, complete with timelines and actionable tasks.",
      },
      {
        title: "Artifact and Documentation Support",
        paragraph:
          "We'll work with you to maintain detailed, audit-ready documentation to demonstrate compliance.",
      },
      {
        title: "Enhanced Advisory Services",
        paragraph: "Get additional insights and advice on:",
        list: [
          "Security Policy Management",
          "Risk and Vulnerability Assessments",
          "Awareness and Training",
        ],
      },
    ],
    benefits: [
      "Stay on top of compliance with regular, dedicated support.",
      "Minimize risk with improved IT and OT security controls.",
      "Build a strong cybersecurity framework for audits and beyond.",
    ],
  };
  return (
    <div>
      <Header
        title={headerContant.title}
        description={headerContant.description}
      />
      <Pricing
        content={MainContent}
        heading={"What’s Included in the Standard Service?"}
      />
    </div>
  );
};

export default page;
