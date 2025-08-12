"use client";
import Form from "@/components/products/Form";
import Header from "@/components/products/Header";
import Support from "@/components/products/Support";
import Solutions from "@/components/products/Solutions";
import Why from "@/components/products/Why";
import React from "react";

const page = () => {
  const headerContent = {
    title: "NEPRA Compliance as a Service: Powered by Tenable",
    subtitle: "Enhancing IT & OT Security in the Power Sector",
    description:
      "Achieve NEPRA compliance with our specialized service leveraging Tenable’s advanced cybersecurity solutions. Secure your IT and OT assets and ensure regulatory adherence with proactive vulnerability management and real-time monitoring.",
  };
  const whysectionContent = {
    maintitle: "Why Tenable for IT & OT Security?",
    maintext:
      "Tenable’s solutions are designed to provide unparalleled visibility and control over your IT and OT environments, enabling organizations in the power sector to:",
    contentarray: [
      {
        title: "Identify Vulnerabilities Proactively",
        text: "Discover, assess, and remediate vulnerabilities across all environments.",
      },
      {
        title: "Streamline Compliance",
        text: "Simplify NEPRA compliance with tools that map directly to regulatory frameworks.",
      },
      {
        title: "Mitigate Cyber Risks",
        text: "Prioritize remediation efforts based on risk to your critical assets.",
      },
      {
        title: "Ensure Operational Continuity",
        text: "Protect IT and OT systems against threats without disrupting operations.",
      },
      {
        title: "Gain Unified Visibility",
        text: "Monitor all assets—from IT endpoints to OT systems—in a single pane of glass.",
      },
    ],
    image: "/images/tenable.png",
    imagealt: "Tenable",
  };
  const supportcontent = {
    maintitle: "How We Support NEPRA Compliance",
    maintext:
      "Our NEPRA Compliance as a Service leverages Tenable’s capabilities to deliver:",
    contentarray: [
      {
        title: "Comprehensive Asset Inventory",
        text: "Identify and document all IT and OT assets.",
      },
      {
        title: "Risk-Based Vulnerability Management",
        text: "Assess and prioritize vulnerabilities based on their risk impact.",
      },
      {
        title: "Implementation of Security Controls",
        text: "Apply security measures that align with NEPRA standards.",
      },
      {
        title: "Incident Detection and Response",
        text: "Identify and address incidents in real-time.",
      },
      {
        title: "Regular Compliance Reporting",
        text: "Maintain audit readiness with automated reporting tools.",
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
    maintitle: "Tenable Solutions for IT & OT Asset Security",
    leftContent: [
      {
        title: "Tenable.ot",
        points: [
          "Real-time monitoring and anomaly detection for OT environments with comprehensive asset inventory.",
          "Protects critical infrastructure through detailed risk assessments.",
        ],
      },
      {
        title: "Tenable.io",
        points: [
          "Cloud-based vulnerability management with continuous visibility across IT assets.",
          "Automates compliance reporting to streamline security processes.",
        ],
      },
    ],
    rightContent: [
      {
        title: "Tenable.sc",
        points: [
          "On-premises vulnerability management with integration into existing workflows.",
          "Prioritizes risk mitigation with actionable insights.",
        ],
      },
      {
        title: "Tenable Lumin",
        points: [
          "Provides cyber exposure scoring to quantify and prioritize risk.",
          "Aligns risk metrics with business objectives for informed decision-making.",
        ],
      },
    ],
    image: "/images/tenable2.jpg",
    imagealt: "tenable",
  };
  return (
    <div>
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
