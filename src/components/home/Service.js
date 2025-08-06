import React, { useState } from "react";

const Service = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      id: 1,
      label: "Security Policy Management for IT and OT assets as a Service",
      heading: "Security Policy Management for IT and OT assets",
      content:
        "Security Policy Management as a service (SPMaaS) is designed to help organizations establish robust security frameworks tailored to their IT and OT environments. We assist in crafting comprehensive policies, manuals, and standard operating procedures that align with regulatory standards and industry best practices. Regular reviews and updates ensure your policies evolve to address emerging threats and vulnerabilities. By enhancing governance, risk management, and operational effectiveness, we empower your organization to maintain compliance, protect critical assets, and foster a culture of proactive cybersecurity. ",
      link: "/services/security-policy-management",
    },
    {
      id: 2,
      label: "Security controls implementation and improvement as a Service",
      heading: "Security Controls Implementation and Improvement",
      content:
        "SPS's Security Controls Implementation and Improvement as a Service ensures robust protection for IT and OT assets in line with NEPRA cybersecurity policies. We establish and enhance access management, network security, encryption, intrusion detection, and traceability controls. Additionally, we provide secure remote and physical access protocols, regular data backups, and proactive identity theft prevention. Through continuous monitoring and employee training, we help safeguard critical infrastructure while ensuring compliance and operational resilience.",
      link: "/services/security-controls",
    },
    {
      id: 3,
      label: "Security Risk Vulnerability Assessment as a Service",
      heading: "Security Risk Vulnerability Assessment",
      content:
        "SPS's Data Management as a Service ensures the accuracy, security, and authenticity of your critical data in compliance with NEPRA regulations. We implement strict access controls, validate data integrity, and safeguard sensitive information, enabling authorized access and ensuring seamless, secure data exchange within the power sector.",
      link: "/services/vulnerability-assessment",
    },
    {
      id: 4,
      label: "Data Management as a Service",
      heading: "Data Management",
      content:
        "Managing your data effectively is crucial for security, compliance, and operational efficiency. we offer Data Management as a Service to help you secure, manage, and leverage your data in line with regulatory requirements and industry best practices.",
      link: "/services/data-management",
    },
    {
      id: 5,
      label: "Audit and Risk Assessment as a Service",
      heading: "Audit and Risk Assessment",
      content:
        "SPS's Audit and Risk Assessment as a Service ensures compliance with NEPRA regulations by conducting specialized audits and risk evaluations. We assess vulnerabilities, review interconnections between power sector stakeholders, and provide insights to manage risks and ensure regulatory alignment. ",
      link: "/services/audit-risk-assessment",
    },
    {
      id: 6,
      label: "Monitoring and incident response as a Service",
      heading: "Monitoring and Incident Response",
      content:
        "SPS's Monitoring and Incident Response as a Service ensures continuous monitoring of IT and OT systems, rapid response to security incidents, and compliance with NEPRA regulations. We implement proactive security controls, incident management plans, and log management to detect and address vulnerabilities promptly, safeguarding your critical infrastructure. ",
      link: "/services/monitoring-incident-response",
    },
    {
      id: 7,
      label: "Awareness and Training as a Service",
      heading: "Awareness and Training",
      content:
        "SPS's Awareness and Training as a Service equips your organization with essential cybersecurity knowledge, focusing on risk mitigation, compliance, and secure IT and OT asset management. We offer comprehensive training on roles, responsibilities, legal requirements, user authentication, and dispute resolution, ensuring your team is prepared to handle evolving security threats and stay compliant with regulatory standards. ",
      link: "/services/awareness-training",
    },
    {
      id: 8,
      label: "Regulatory Reporting as a Service",
      heading: "Regulatory Reporting and Communications",
      content:
        "Regulatory Reporting as a Service ensures your organization meets all compliance requirements by providing a structured approach to reporting cybersecurity incidents and security breaches to the relevant authorities. Our service includes timely submission of detailed breach reports, including impact assessments on business operations, IT and OT assets, and users. We help establish a standardized mechanism for incident reporting, ranking, and using the appropriate tools, in consultation with PowerCert, ensuring all breaches are reported to the Authority within 72 hours and on a quarterly basis thereafter. ",
      link: "/services/regulatory-reporting",
    },
  ];

  const selectedContent = options.find(
    (option) => option.id === selectedOption
  );

  return (
    <div className="w-full py-8 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Rounded Dropdown */}
        <div className="w-full md:w-[80%] mx-auto mb-8 md:mb-12">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white rounded-full shadow-blue-500/50 shadow-lg border border-gray-200 py-3 md:py-4 px-4 md:px-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <p className="text-blue-600 font-medium text-sm md:text-base truncate">
                {selectedContent.label}
              </p>
              <svg
                className={`w-4 h-4 md:w-5 md:h-5 text-blue-600 transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-blue-500/50 shadow-lg border border-gray-200 overflow-hidden z-10 max-h-60 overflow-y-auto">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedOption(option.id);
                      setIsOpen(false);
                    }}
                    className={`w-full py-2 md:py-3 px-4 md:px-6 text-left hover:bg-gray-50 transition-colors duration-200 ${
                      selectedOption === option.id
                        ? "bg-blue-50 text-blue-500 font-semibold"
                        : "text-blue-500"
                    }`}
                  >
                    <p className="text-xs md:text-sm">{option.label}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-blue-500/50 shadow-lg p-6 md:p-8 border border-gray-200">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
              {selectedContent.heading}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {selectedContent.content}{" "}
              <a
                href={selectedContent.link}
                className="text-[#0000FF] cursor-pointer hover:underline"
              >
                Learn More {">"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
