"use client";
import Form from "@/components/products/Form";
import Header from "@/components/products/Header";
import Support from "@/components/products/Support";
import Solutions from "@/components/products/Solutions";
import Why from "@/components/products/Why";
import React from "react";

const page = () => {
  const headerContent = {
    title: "NEPRA Compliance as a Service: Powered by Kaspersky",
    subtitle: "Empowering IT & OT Asset Security in the Power Sector",
    description:
      "Achieve NEPRA compliance effortlessly with our specialized service leveraging Kaspersky’s cutting-edge solutions. Ensure comprehensive protection and assessment for your IT and OT assets, safeguarding your critical power sector operations from evolving cyber threats.",
  };
  const whysectionContent = {
    maintitle: "Why Choose Fortinet for IT & OT Security?",
    maintext:
      "Fortinet's advanced security solutions are designed to address the unique challenges faced by the power sector. By integrating Fortinet technologies, you can:",
    contentarray: [
      {
        title: "Achieve Comprehensive Asset Protection",
        text: "Fortify both IT and OT systems against cyber threats.",
      },
      {
        title: "Enhance Visibility",
        text: "Gain real-time monitoring and control over critical assets.",
      },
      {
        title: "Streamline Compliance",
        text: "Utilize tools and reports tailored to NEPRA standards.",
      },
      {
        title: "Mitigate Advanced Threats",
        text: "Stay ahead with proactive threat detection.",
      },
      {
        title: "Simplify Management",
        text: "Centralized security management for ease of operations.",
      },
    ],
    image: "/images/fortinet1.png",
    imagealt: "Fortinet",
  };
  const supportcontent = {
    maintitle: "How Fortinet Supports NEPRA Compliance",
    maintext:
      "Our NEPRA Compliance as a Service harnesses Fortinet's technologies to:",
    contentarray: [
      {
        title: "Monitor All IT and OT Assets",
        text: "Gain complete visibility and control.",
      },
      {
        title: "Detect and Mitigate Vulnerabilities",
        text: "Address risks proactively.",
      },
      {
        title: "Implement Security Controls",
        text: "Align with NEPRA’s regulatory standards.",
      },
      {
        title: "Respond to Incidents Rapidly",
        text: "Leverage real-time threat intelligence.",
      },
      {
        title: "Simplify Audit Processes",
        text: "Generate automated reports for NEPRA compliance.",
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
    maintitle: "Fortinet Solutions for IT & OT Asset Security",
    leftContent: [
      {
        title: "FortiGate NGFW (Next-Generation Firewall)",
        points: [
          "Advanced firewall for IT and OT environments with integrated IPS and secure segmentation.",
          "Delivers scalable protection against modern cyber threats.",
        ],
      },
      {
        title: "FortiNAC (Network Access Control)",
        points: [
          "Ensures secure access with complete visibility into IT and OT devices.",
          "Automates responses to unauthorized access attempts.",
        ],
      },
    ],
    rightContent: [
      {
        title: "FortiSIEM (Security Information and Event Management)",
        points: [
          "Real-time threat detection and log analytics for IT and OT systems.",
          "Simplifies compliance reporting with NEPRA standards.",
        ],
      },
      {
        title: "FortiEDR (Endpoint Detection and Response)",
        points: [
          "Continuous monitoring and real-time remediation for IT and OT endpoints.",
          "Protects business continuity with minimal disruptions.",
        ],
      },
    ],
    image: "/images/fortinet2.png",
    imagealt: "fortinet",
  };
  return (
    <div className="bg-white">
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
