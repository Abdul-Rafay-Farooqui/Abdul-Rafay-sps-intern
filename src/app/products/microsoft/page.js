"use client";
import Form from "@/components/products/Form";
import Header from "@/components/products/Header";
import Solutions from "@/components/products/microsoft/Solutions";
import Support from "@/components/products/Support";
import Why from "@/components/products/Why";

const page = () => {
  const headerContent = {
    title: "NEPRA Compliance as a Service: Powered by Microsoft",
    subtitle: "Empowering IT & OT Asset Security in the Power Sector",
    description:
      "Achieve NEPRA compliance with confidence by leveraging Microsoft’s advanced cloud and security solutions. Our service integrates Microsoft’s cutting-edge technologies to safeguard IT and OT assets, ensuring seamless regulatory compliance for power sector organizations.",
  };
  const whysectionContent = {
    maintitle: "Why Microsoft for IT & OT Security?",
    maintext:
      "Microsoft provides a comprehensive ecosystem of tools and platforms tailored to meet the security needs of the power sector. By choosing Microsoft, you gain:",
    contentarray: [
      {
        title: "Holistic Security Frameworks",
        text: "Protect both IT and OT environments with an integrated security approach.",
      },
      {
        title: "Scalable Cloud Solutions",
        text: "Utilize Microsoft Azure to ensure resilience and scalability.",
      },
      {
        title: "Advanced Threat Detection",
        text: "AI-driven tools for real-time threat detection and response.",
      },
      {
        title: "Simplified Compliance Management",
        text: "Built-in tools to streamline compliance with NEPRA standards.",
      },
      {
        title: "Seamless Integration",
        text: "Interoperability with existing infrastructure for smooth operations.",
      },
    ],
    image: "/images/microsoft1.png",
    imagealt: "Microsoft",
  };
  const supportcontent = {
    maintitle: "How We Support NEPRA Compliance",
    maintext: "",
    contentarray: [
      {
        title: "Comprehensive Asset Discovery",
        text: "Identify and catalog all IT and OT assets.",
      },
      {
        title: "Proactive Risk Management",
        text: "Detect vulnerabilities and mitigate risks efficiently.",
      },
      {
        title: "Security Controls Implementation",
        text: "Deploy measures aligned with NEPRA’s standards.",
      },
      {
        title: "Incident Response Planning",
        text: "Utilize Microsoft tools for rapid breach response.",
      },
      {
        title: "Automated Compliance Reporting",
        text: "Stay audit-ready with Microsoft’s compliance tools.",
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
      <Solutions />
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
