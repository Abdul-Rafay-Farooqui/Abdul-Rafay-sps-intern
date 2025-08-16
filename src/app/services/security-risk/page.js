import react from "react";
import Header from "@/components/products/Header";
import Main from "@/components/services/Main";
import Compliance from "@/components/services/Complince";


const page = () => {
      const headerContent = {
    title: "Security Risk and Vulnerability Assessment as a Service",
    subtitle: "",
    description:
      "In a world of growing cyber threats and regulatory scrutiny, understanding and addressing vulnerabilities in your IT and OT environments is vital. Our Security Risk and Vulnerability Assessment as a Service provides a comprehensive evaluation of your organization’s security posture, identifying gaps and offering actionable insights to fortify your defenses.",
  };
  const mainContent = {
    text: "SPS’s Security Risk and Vulnerability Assessment as a Service provides a structured approach to identifying, evaluating, and prioritizing risks to your IT and OT assets, ensuring compliance with NEPRA cybersecurity regulations.",
    image: "/images/risk1.png",
  }
  const complianceContent = {
    title: "Compliance Areas",
    intro:
      "",
    points: [
    "Conducting regular Security Risk and Vulnerability Assessment: The licensee shall conduct and document a formal Security Risk / Vulnerability Assessment for Information Security Assets (IT and OT) with a view of identifying, estimating, and prioritizing risks to which its operations are exposed due to information security vulnerabilities. The control testing shall be based on the controls mentioned in the relevant international standards. The Board of Directors or a Committee of the Board authorized by the Board of Directors shall review the risk / vulnerability assessment document and take steps to mitigate any risks and vulnerabilities identified.",
    "The risk / vulnerability assessment shall cover the following aspects as a minimum requirement:",
    "A current and detailed description of licensee's business and technological environment and existing security measures in place including identification of location, systems, and methods for maintaining information.",
    "An identification of information and the information systems to be protected specifically.",
    "Classification and ranking (high, medium, low) of the sensitive systems and applications in order of their importance and based on the assessment of threats, vulnerabilities, or risk assessment.",
    "Assessment of potential threats and vulnerabilities to the security and integrity of data, information systems, and applications.",
    "An evaluation of existing security controls' effectiveness against each threat and vulnerability.",
    "The security and contractual responsibilities of Service Providers (SPs), including customers who have access to the licensee's systems and data.",
    "Compliance, concentration, operational, country, and legal risks shall be assessed by the licensees before entering into the contract, while managing information security outsourcing arrangements with the SPs.",
    "The Security Risk / Vulnerability Assessment shall be carried out at least once a year; however, in case of a major security breach, significant changes to the infrastructure, or introduction of a new product or service, an immediate review of risk assessment shall be carried out.",
    "In case of a major security breach, the risk assessment review shall include a detailed analysis of the factors that caused such security breaches.",
    "Our service helps you build a resilient cybersecurity posture, mitigate risks, and protect critical infrastructure by continuously monitoring and addressing vulnerabilities in your IT and OT environments."
    ]
  };
    return (
        <div className="bg-white">
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