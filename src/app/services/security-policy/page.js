import react from "react";
import Header from "@/components/products/Header";
import Main from "@/components/services/Main";
import Compliance from "@/components/services/Complince";
import ChooseSection from "@/components/services/Choose";
import PolicyForm from "@/components/services/PolicyForm";


const page = () => {
      const headerContent = {
    title: "Security Policy Management for IT and OT Assets as a Service",
    subtitle: "",
    description:
      "In today’s interconnected power sector landscape, ensuring seamless compliance with NEPRA regulations while safeguarding critical IT and OT assets is crucial. Our Security Policy Management as a Service is designed to simplify and streamline the management of security policies across your organization’s infrastructure, enhancing compliance, security, and operational efficiency.",
  };
  const mainContent = {
    text: "Our Security Policy Management as a Service offers a comprehensive solution aligned with NEPRA Cybersecurity Guidelines. This service ensures that your organization not only meets compliance requirements but also fortifies its IT and OT infrastructure to protect critical systems and data. Here’s how we help",
    image: "/images/policy1.png",
  }
  const complianceContent = {
    title: "Compliance Areas",
    intro:
      "Every licensee, registration holder and a generation company connected to the national grid shall develop or adopt, implement and regularly review (at least once in every three years) and update IT and OT assets security policy, manuals and related standard operating procedures.",
    points: [
      "Define and put in place appropriate management structure with required skills and qualifications for developing, maintaining, reviewing, and updating the information security framework, and particularly hire qualified cybersecurity individuals and appoint Chief Information Security Officer (CISO)",
      "Provide for maintenance of inventory and categorization of IT and OT assets",
      "Provide for enhancement of security of IT and OT assets, particularly critical infrastructure",
      "Provide mechanisms to protect its systems from unauthorized access, to ensure integrity, confidentiality, and authenticity of data and systems",
      "Provide guidelines for acquisition of information technology (IT) and operational technology (OT) assets",
      "Contain provisions for reliability and availability of information systems and data and maintaining operational effectiveness",
      "Provide for accountability by incorporating standard operating procedures, policies, and controls to enable traceability of all operations and identification of the system user at the relevant time",
      "Provide for formulation, roles, and responsibilities of the Security Advisory Committee (SAC)",
      "Provide the requirements for regular monitoring of security controls, responding to security incidents, mitigating risks, and vulnerabilities in IT and OT assets",
      "Provide for patch and change management",
      "Provide for conducting regular audits, security risk assessments, and management thereof",
      "Adequately cover any gaps identified through a gap analysis and enable appropriate controls",
      "Provide requirements and processes for evaluating employees, contractors and other relevant stakeholders for potential risks",
      "Define a business continuity plan to ensure service continuity in case of any incident",
      "Provide for data disposal procedures and requirements that avoid any unauthorized access or use of such data",
      "Promote a culture of cyber-security awareness within the organization and channels for training and awareness of the employees and contractors",
      "Provide for establishment of channels of communications for sharing of any critical information relating to a threat to the power sector: Provided that it shall be ensured that any information shared in this regard is kept confidential",
      "Provide mechanism for seamlessly implementing the guidelines from PowerCert and/or the Authority",
      "Reporting of any significant threat or attack in real time to the Authority's designated officer and PowerCERT",
      "Provide for implementation of any other guidelines or directives issued by the Authority or PowerCERT in the interest of ensuring protection of power sector in general and any part thereof in particular",
    ],
  };
    return (
        <div>
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
            <ChooseSection />
            <PolicyForm />
        </div>
    );
}
export default page;