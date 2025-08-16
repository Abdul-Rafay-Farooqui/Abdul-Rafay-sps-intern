import react from "react";
import Header from "@/components/products/Header";
import Main from "@/components/services/Main";
import Compliance from "@/components/services/Complince";


const page = () => {
      const headerContent = {
    title: "Audit and Risk Assessment as a Service",
    subtitle: "",
    description:
      "As the cybersecurity landscape evolves, organizations face increasing pressure to protect their assets, ensure compliance, and minimize risks. Our Audit and Risk Assessment as a Service provides a comprehensive evaluation of your IT and OT environments, helping you identify vulnerabilities, achieve regulatory compliance, and enhance operational resilience.",
  };
  const mainContent = {
    text: "SPS’s Audit and Risk Assessment as a Service helps ensure compliance with NEPRA regulations by providing specialized audits and risk assessments tailored to your organization's needs. We assist in meeting the Authority’s requirements for special audits or risk evaluations, including those related to interconnections between power sector stakeholders.",
    image: "/images/audit1.jpg",
  }
  const complianceContent = {
    title: "Compliance Areas",
    intro:
      "",
        points: [
        "Special Audit and Risk Assessment Directive: The Authority may, for reasons to be recorded in writing, order a special audit and/or risk assessment with such objectives as may be deemed appropriate in respect of any licensee, registration holder, and generation company, including any interconnection between the stakeholders of the power sector.",
        "Our service helps you proactively manage risks and comply with NEPRA’s audit and assessment requirements, ensuring that your operations remain secure and aligned with regulatory standards."
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