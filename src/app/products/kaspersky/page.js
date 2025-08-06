"use client";
import Form from "@/components/products/Form";
import Header from "@/components/products/Header";
import Why from "@/components/products/Why";
import Products from "@/components/products/kaspersky/Products";
import Services from "@/components/products/kaspersky/Services";
import Support from "@/components/products/Support";
import React from "react";

const page = () => {
  const headerContent = {
    title: "NEPRA Compliance as a Service: Powered by Kaspersky",
    subtitle: "Empowering IT & OT Asset Security in the Power Sector",
    description:
      "Achieve NEPRA compliance effortlessly with our specialized service leveraging Kaspersky's cutting-edge solutions. Ensure comprehensive protection and assessment for your IT and OT assets, safeguarding your critical power sector operations from evolving cyber threats.",
  };
  const whysectionContent = {
    maintitle: "Why Kaspersky for IT &amp; OT Asset Assessment?",
    maintext:
      "Kaspersky provides robust cybersecurity solutions that cater specifically to the unique needs of the power sector. By utilizing Kaspersky’s products, you gain:",
    contentarray: [
      {
        title: "Comprehensive IT & OT Asset Protection",
        text: "Secure all interconnected systems, from IT infrastructure to operational technologies (OT), against cyberattacks.",
      },
      {
        title: "Proactive Threat Detection",
        text: "Advanced AI-driven tools to identify vulnerabilities before they can be exploited.",
      },
      {
        title: "Streamlined NEPRA Compliance",
        text: "Tailored tools that align with NEPRA’s regulatory standards to simplify compliance processes.",
      },
      {
        title: "24/7 Security Monitoring",
        text: "Continuous surveillance to ensure uptime and operational reliability.",
      },
      {
        title: "Industry-Specific Expertise",
        text: "Solutions designed for the critical needs of power generation, transmission, and distribution sectors.",
      },
    ],
    image: "/images/kaspersky.png",
    imagealt: "Kaspersky",
  };
  const supportcontent = {
    maintitle: "How We Support NEPRA Compliance",
    maintext: "",
    contentarray: [
      {
        title: "IT & OT Asset Inventory",
        text: "Comprehensive identification and documentation of all assets.",
      },
      {
        title: "Risk Assessments",
        text: "Evaluate vulnerabilities in alignment with NEPRA guidelines.",
      },
      {
        title: "Implementation of Security Controls",
        text: "Deploy measures to secure assets as required by NEPRA standards.",
      },
      {
        title: "Incident Response Planning",
        text: "Prepare for swift action in case of a breach.",
      },
      {
        title: "Regular Compliance Reporting",
        text: "Stay audit-ready with detailed compliance documentation.",
      },
    ],
    beneficiaries: [
      "Power Generation Companies",
      "Transmission Network Operators",
      "Distribution Companies",
      "Independent Power Producers (IPPs)",
    ],
  };

  return (
    <div>
      <Header
        title={headerContent.title}
        subtitle={headerContent.subtitle}
        description={headerContent.description}
      />
      <Products />
      <Services />
      <Why
        maintitle={whysectionContent.maintitle}
        maintext={whysectionContent.maintext}
        contentarray={whysectionContent.contentarray}
        image={whysectionContent.image}
        imagealt={whysectionContent.imagealt}
      />
      <Support
        maintext={supportcontent.maintext}
        maintitle={supportcontent.maintitle}
        contentarray={supportcontent.contentarray}
        beneficiaries={supportcontent.beneficiaries}
      />
      <Form />
    </div>
  );
};

export default page;
