"use client";
import Form from "@/components/products/Form";
import Header from "@/components/products/Header";
import Support from "@/components/products/Support";
import Solutions from "@/components/products/Solutions";
import Why from "@/components/products/Why";
import React from "react";

const page = () => {
  const headerContent = {
    title: "NEPRA Compliance as a Service: Powered by Trend Micro",
    subtitle: "Enhancing IT & OT Security in the Power Sector",
    description:
      "Ensure NEPRA compliance while protecting your critical infrastructure with Trend Micro’s cutting-edge cybersecurity solutions. Our service integrates Trend Micro technologies to deliver seamless protection for IT and OT environments.",
  };
  const whysectionContent = {
    maintitle: "Why Trend Micro for IT & OT Security?",
    maintext:
      "Trend Micro offers innovative solutions tailored to meet the dynamic security needs of the power sector. With Trend Micro, you can:",
    contentarray: [
      {
        title: "Secure IT & OT Environments",
        text: "Comprehensive protection against cyber threats.",
      },
      {
        title: "Achieve NEPRA Compliance",
        text: "Align your systems with regulatory standards.",
      },
      {
        title: "Gain Threat Intelligence",
        text: "Leverage AI-powered insights for proactive defense.",
      },
      {
        title: "Streamline Security Management",
        text: "Unified solutions for simplified operations.",
      },
      {
        title: "Ensure Business Continuity",
        text: "Minimize disruptions with advanced threat detection.",
      },
    ],
    image: "/images/trend1.png",
    imagealt: "Trend Micro",
  };
  const supportcontent = {
    maintitle: "How Trend Micro Support NEPRA Compliance",
    maintext:
      "Our NEPRA Compliance as a Service leverages Trend Micro’s technologies to deliver:",
    contentarray: [
      {
        title: "Comprehensive Asset Protection",
        text: "Safeguard IT and OT assets from cyber threats.",
      },
      {
        title: "Vulnerability Management",
        text: "Identify and remediate vulnerabilities promptly.",
      },
      {
        title: "Incident Detection and Response",
        text: "Respond to threats with agility and precision.",
      },
      {
        title: "Automated Compliance Reporting",
        text: "Simplify NEPRA audit processes with pre-configured tools.",
      },
      {
        title: "Integrated Security Measures",
        text: "Deploy solutions aligned with regulatory requirements.",
      },
    ],
    beneficiaries: [
      "Power Generation Companies",
      "Transmission Network Operators",
      "Distribution Companies",
      "Independent Power Producers (IPPs)",
    ],
  };
  const solutionsContent = {
    maintitle: "Trend Micro Solutions for IT & OT Asset Security",
    leftContent: [
      {
        title: "Trend Micro Apex One",
        points: [
          "All-in-one endpoint security for IT and OT devices.",
          "Automated detection and response against malware, ransomware, and advanced threats.",
        ],
      },
      {
        title: "Trend Micro Deep Security",
        points: [
          "Comprehensive server protection for physical, virtual, and cloud environments.",
          "Advanced intrusion prevention for critical OT systems.",
        ],
      },
    ],
    rightContent: [
      {
        title: "Trend Micro Vision One",
        points: [
          "Cross-layered detection and response (XDR) for holistic threat analysis.",
          "Speeds up incident response with actionable insights.",
        ],
      },
      {
        title: "Trend Micro TippingPoint",
        points: [
          "Next-generation intrusion prevention system (IPS) with real-time, in-line protection.",
          "Shields vulnerabilities and blocks advanced threats for IT and OT networks.",
        ],
      },
    ],
    image: "/images/trend2.png",
    imagealt: "Trend Micro",
  };
  return (
    <div >
      <Header
        title={headerContent.title}
        subtitle={headerContent.subtitle}
        description={headerContent.description}
      />
      <Why
        maintitle={whysectionContent.maintitle}
        maintext={whysectionContent.maintext}
        contentarray={whysectionContent.contentarray}
        image={whysectionContent.image}
        imagealt={whysectionContent.imagealt}
      />
      <Solutions
        maintitle={solutionsContent.maintitle}
        leftContent={solutionsContent.leftContent}
        rightContent={solutionsContent.rightContent}
        image={solutionsContent.image}
        imagealt={solutionsContent.imagealt}
      />
      <Support
        maintitle={supportcontent.maintitle}
        maintext={supportcontent.maintext}
        contentarray={supportcontent.contentarray}
        beneficiaries={supportcontent.beneficiaries}
      />
      <Form />
    </div>
  );
};

export default page;
