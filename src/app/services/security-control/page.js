import react from "react";
import Header from "@/components/products/Header";
import Main from "@/components/services/Main";
import Compliance from "@/components/services/Complince";


const page = () => {
      const headerContent = {
    title: "Security Controls Implementation and Improvement as a Service",
    subtitle: "",
    description:
      "In an era of increasing cybersecurity threats, implementing and continuously improving robust security controls is essential for safeguarding critical IT and OT infrastructure. Our Security Controls Implementation and Improvement as a Service offers a comprehensive, proactive solution to protect your assets while ensuring compliance with industry regulations like NEPRA.",
  };
  const mainContent = {
    text: "Our Security Controls Implementation and Improvement as a Service is designed to help organizations establish, enhance, and maintain robust security controls to protect IT and OT assets, ensuring compliance with NEPRA cybersecurity policies and international standards.",
    image: "/images/management1.png",
  }
  const complianceContent = {
    title: "Compliance Areas",
    intro:
      "",
points: [
  "Access Rights Management: Users' access rights shall be appropriate and commensurate with their job functions and shall be periodically reviewed keeping in view the risk ranking of the systems, data and applications as outlined in Security Risk Assessment document. Changes in Access Rights shall be based on personal or systems change and shall only be applied after due authorization while ensuring proper implementation of least privilege principle.",
  "Operating System Security: Necessary Operating Systems' controls shall be implemented to ensure that access is physically and logically secured by ensuring that privileged access is restricted, regularly monitored and periodically audited.",
  "Secure Remote Access: Remote access to high-risk IT and OT assets shall only be granted after management's approval in writing and shall be subject to regular audits. Remote access shall also be based on strong authentication and encryption to secure communications: Provided that a licensee, registration holder or a generation company shall not allow remote access to any critical infrastructure in the power sector, from a country that is considered hostile towards Pakistan.",
  "Physical Access Control: Licensees shall ensure that physical access to different systems, segments and data sites is restricted, regularly monitored and duly logged.",
  "IT & OT Network Security: Network Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) shall be deployed between different security domains as per their risk classification.",
  "Firewalls: Firewalls shall be deployed between different security domains, virtual local area networks (VLAN), segments and zones to control network traffic. Firewalls selection and deployment policy shall be devised according to the characteristics of network (i.e., traffic volume, and risk classification of IT and OT assets).",
  "Intrusion Detection & Prevention: Implementation of Intrusion Detection (IDS) and Intrusion Prevention (IPS) systems. Risk-based security domain classification for effective monitoring.",
  "Encryption & Data Security: Access, storage and data communication shall be encrypted using reliable encryption methods, industry encryption standards and tools to strengthen the security of communications and sensitive payment data in accordance with the relevant laws.",
  "Identity Theft Prevention: Licensee shall develop and implement a proactive Identity Theft Prevention Program which includes procedures for identification of information to be protected, and threats due to thefts and frauds as well as methods for responding appropriately to identified threats.",
  "Traceability & Accountability: Traceability of operations performed on IT and OT assets shall be ensured.",
  "Data Backup & Business Continuity: Regular backup of important data, transactions and software shall be ensured.",
  "Training & Security Awareness: Relevant employees of the licensee shall have appropriate knowledge and background to perform their tasks. Regular trainings shall be arranged to keep employees aware of the security risks, security controls and security control monitoring mechanisms. Employees shall be regularly updated about the changes in internal policies and procedures to ensure operational effectiveness.",
  "Our service empowers you to implement and improve security controls across your organization, ensuring compliance and protecting critical infrastructure from evolving threats."
]

  };
    return (
        <div >
            <Header 
                title={headerContent.title}
                subtitle={headerContent.subtitle}
                description={headerContent.description}
            />
            <Main 
                text={mainContent.text}
                image={mainContent.image}
            />
            <Compliance
                title={complianceContent.title}
                intro={complianceContent.intro}
                points={complianceContent.points} 
            />

        </div>
    );
}
export default page;