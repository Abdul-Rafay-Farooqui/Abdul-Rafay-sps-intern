"use client";
import Form from "@/components/products/Form";
import Header from "@/components/products/Header";
import Why from "@/components/products/Why";
import Products from "@/components/products/kaspersky/Products";
import Support from "@/components/products/Support";
import React from "react";
import { Shield , Fingerprint ,EarthLock, Network , Cloud, Brain, FolderLock, ShieldCheck, BrickWallShield, BrainCircuit, Target, HandFist } from "lucide-react";

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
  const supportContent = {
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
  const productsData = [
    {
      title: "Endpoint Security",
      description: "Protect endpoints with advanced EDR and embedded security.",
      icon: (
        <Shield
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: [
        "Kaspersky Next EDR Foundations",
        "Kaspersky Next EDR Optimum",
        "Kaspersky Next EDR Expert",
        "Kaspersky Private Security Network",
        "Kaspersky Embedded Systems Security",
      ],
    },
    {
      title: "SIEM & XDR",
      description: "Centralized security event management and detection.",
      icon: (
        <Fingerprint
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: ["Kaspersky Next XDR Expert", "Kaspersky SIEM"],
    },
    {
      title: "Cyber-Physical Systems Protection",
      description: "Safeguard industrial and cyber-physical environments.",
      icon: (
        <EarthLock
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: ["Kaspersky Industrial Cybersecurity Platform"],
    },
    {
      title: "Network",
      description: "Secure your network, mail, and gateways.",
      icon: (
        <Network
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: [
        "Kaspersky SD-WAN",
        "Kaspersky Anti Targeted Attack",
        "Kaspersky Security for Mail Server",
        "Kaspersky Security for Internet Gateway",
      ],
    },
    {
      title: "Cloud Workload",
      description: "Comprehensive cloud and container security.",
      icon: (
        <Cloud
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: ["Kaspersky Hybrid Cloud Security", "Kaspersky Container Security"],
    },
    {
      title: "Threat Intelligence",
      description: "Actionable insights for proactive defense.",
      icon: (
        <Brain
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: ["Kaspersky Threat Intelligence"],
    },
    {
      title: "Cyber Immune Products",
      description: "Resilient solutions for IoT and thin clients.",
      icon: (
        <FolderLock
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: [
        "KasperskyOS-based solutions",
        "Kaspersky IoT Infrastructure Security",
        "Kaspersky Thin Client",
      ],
    },
  ];
  const servicesData = [
    {
      title: "Defensive Services",
      description:
        "Proactive defense and incident response for your organization.",
      // Shield icon
      icon: (
        <ShieldCheck
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: [
        "Kaspersky MDR",
        "Kaspersky Incident Response",
        "Kaspersky Digital Footprint Intelligence",
        "Kaspersky SOC Consulting",
        "Kaspersky Compromise Assessment",
      ],
    },
    {
      title: "Offensive Services",
      description:
        "Identify vulnerabilities and strengthen your security posture.",
      // Target icon
      icon: (
        <BrickWallShield
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: [
        "Kaspersky Penetration Testing",
        "Kaspersky Application Security Assessment",
        "Kaspersky ICS Security Assessment",
        "Kaspersky Red Teaming",
        "Security Assessment portfolio",
      ],
    },
    {
      title: "Awareness & Training",
      description: "Empower your team with cybersecurity knowledge and skills.",
      // Graduation cap icon
      icon: (
        <Target
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: [
        "Kaspersky Security Awareness",
        "Kaspersky Cybersecurity Training",
        "Kaspersky ICS Training",
        "Kaspersky Product Training",
      ],
    },
    {
      title: "Support",
      description: "Expert support and professional services for your solutions.",
      // Headset icon
      icon: (
        <HandFist
          className="w-12 h-12 text-blue-900"
        />
      ),
      links: ["Kaspersky Premium Support", "Kaspersky Professional Services"],
    },
    {
      title: "Threat Intelligence",
      description: "Stay ahead of threats with actionable intelligence.",
      // Lightbulb icon
      icon: (
        <BrainCircuit
          className="w-12 h-12 text-blue-900"
          src="/images/shield.png"
        />
      ),
      links: [
        "Kaspersky APT Intelligence Reporting",
        "Kaspersky Takedown Service",
        "Kaspersky Ask The Analyst",
        "Threat Intelligence portfolio",
      ],
    },
  ];

  return (
    <div>
      <Header
        title={headerContent.title}
        subtitle={headerContent.subtitle}
        description={headerContent.description}
      />
      <Products  products= {productsData} heading= {"Kaspersky IT & OT Security Products"} color={"white"} />
      <Products products={servicesData} heading={"Kaspersky IT & OT Security Services"} color={"blue"}/>
      <Why
        maintitle={whysectionContent.maintitle}
        maintext={whysectionContent.maintext}
        contentarray={whysectionContent.contentarray}
        image={whysectionContent.image}
        imagealt={whysectionContent.imagealt}
      />
      <Support
        maintext={supportContent.maintext}
        maintitle={supportContent.maintitle}
        contentarray={supportContent.contentarray}
        beneficiaries={supportContent.beneficiaries}
      />
      <Form />
    </div>
  );
};

export default page;
