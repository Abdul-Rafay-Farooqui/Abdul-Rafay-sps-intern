"use client";
import React, { useState } from "react";
import {
  FaShieldAlt,
  FaCogs,
  FaSearch,
  FaDatabase,
  FaClipboardCheck,
  FaBell,
  FaUserGraduate,
  FaRegFileAlt,
} from "react-icons/fa";


const Service = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const options = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Security Policy Management",
      short: "Robust IT & OT security frameworks tailored to your needs.",
      content:
        "Security Policy Management as a Service (SPMaaS) helps organizations establish robust frameworks, policies, and SOPs that meet regulatory standards while evolving with emerging threats.Security Policy Management as a service (SPMaaS) is designed to help organizations establish robust security frameworks tailored to their IT and OT environments. We assist in crafting comprehensive policies, manuals, and standard operating procedures that align with regulatory standards and industry best practices. Regular reviews and updates ensure your policies evolve to address emerging threats and vulnerabilities. By enhancing governance, risk management, and operational effectiveness, we empower your organization to maintain compliance, protect critical assets, and foster a culture of proactive cybersecurity.",
      link: "/services/security-policy-management",
    },
    {
      id: 2,
      icon: <FaCogs />,
      title: "Security Controls Implementation",
      short: "Access, network, and encryption controls for compliance.",
      content:
        "SPS’s Security Controls Implementation and Improvement as a Service ensures robust protection for IT and OT assets in line with NEPRA cybersecurity policies. We establish and enhance access management, network security, encryption, intrusion detection, and traceability controls. Additionally, we provide secure remote and physical access protocols, regular data backups, and proactive identity theft prevention. Through continuous monitoring and employee training, we help safeguard critical infrastructure while ensuring compliance and operational resilience.",
      link: "/services/security-controls",
    },
    {
      id: 3,
      icon: <FaSearch />,
      title: "Risk & Vulnerability Assessment",
      short: "Identify and mitigate potential security threats.",
      content:
        "SPS’s Data Management as a Service ensures the accuracy, security, and authenticity of your critical data in compliance with NEPRA regulations. We implement strict access controls, validate data integrity, and safeguard sensitive information, enabling authorized access and ensuring seamless, secure data exchange within the power sector.",
      link: "/services/vulnerability-assessment",
    },
    {
      id: 4,
      icon: <FaDatabase />,
      title: "Data Management",
      short: "Secure, manage, and leverage your data effectively.",
      content:
        "Managing your data effectively is crucial for security, compliance, and operational efficiency. we offer Data Management as a Service to help you secure, manage, and leverage your data in line with regulatory requirements and industry best practices.",
      link: "/services/data-management",
    },
    {
      id: 5,
      icon: <FaClipboardCheck />,
      title: "Audit & Risk Assessment",
      short: "Ensure compliance through specialized audits.",
      content:
        "SPS’s Audit and Risk Assessment as a Service ensures compliance with NEPRA regulations by conducting specialized audits and risk evaluations. We assess vulnerabilities, review interconnections between power sector stakeholders, and provide insights to manage risks and ensure regulatory alignment.",
      link: "/services/audit-risk-assessment",
    },
    {
      id: 6,
      icon: <FaBell />,
      title: "Monitoring & Incident Response",
      short: "Proactive monitoring and rapid threat response.",
      content:
        "SPS’s Monitoring and Incident Response as a Service ensures continuous monitoring of IT and OT systems, rapid response to security incidents, and compliance with NEPRA regulations. We implement proactive security controls, incident management plans, and log management to detect and address vulnerabilities promptly, safeguarding your critical infrastructure.",
      link: "/services/monitoring-incident-response",
    },
    {
      id: 7,
      icon: <FaUserGraduate />,
      title: "Awareness & Training",
      short: "Equip teams with essential cybersecurity skills.",
      content:
        "SPS’s Awareness and Training as a Service equips your organization with essential cybersecurity knowledge, focusing on risk mitigation, compliance, and secure IT and OT asset management. We offer comprehensive training on roles, responsibilities, legal requirements, user authentication, and dispute resolution, ensuring your team is prepared to handle evolving security threats and stay compliant with regulatory standards.",
      link: "/services/awareness-training",
    },
    {
      id: 8,
      icon: <FaRegFileAlt  />,
      title: "Regulatory Reporting",
      short: "Timely compliance reporting and communications.",
      content:
        "Regulatory Reporting as a Service ensures your organization meets all compliance requirements by providing a structured approach to reporting cybersecurity incidents and security breaches to the relevant authorities. Our service includes timely submission of detailed breach reports, including impact assessments on business operations, IT and OT assets, and users. We help establish a standardized mechanism for incident reporting, ranking, and using the appropriate tools, in consultation with PowerCert, ensuring all breaches are reported to the Authority within 72 hours and on a quarterly basis thereafter.",
      link: "/services/regulatory-reporting",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Our Services</h2>
          <p className="mt-3 text-black max-w-2xl mx-auto">
            We offer a comprehensive suite of cybersecurity and compliance services designed to protect your IT and OT environments.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-8">
          {options.map((service) => (
            <div
              key={service.id}
              className="bg-white  rounded-xl shadow-all overflow-hidden transition-all"
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(service.id)}
                className="flex items-center justify-between w-full p-5 text-left"
              >
                <div className="flex items-center text-blue-800 text-3xl gap-4">
                  {service.icon}
                  <div>
                    <h3 className="text-lg  font-semibold">{service.title}</h3>
                    <p className="text-black text-sm">{service.short}</p>
                  </div>
                </div>
                <svg
                    className={`w-5 h-5 text-[#0C67D8] transform transition-transform duration-300 ${
                      openId === service.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openId === service.id ? "max-h-[300px] opacity-100 p-5 pt-0" : "max-h-0 opacity-0 p-0"
                } overflow-hidden`}
              >
                <p className="text-black mb-4">{service.content}</p>
                <a
                  href={service.link}
                  className="inline-block px-5 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Learn More &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
