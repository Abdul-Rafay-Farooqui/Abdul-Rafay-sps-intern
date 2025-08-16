import react from "react";
import Header from "@/components/products/Header";
import Main from "@/components/services/Main";
import Compliance from "@/components/services/Complince";


const page = () => {
      const headerContent = {
    title: "Regulatory Reporting as a Service",
    subtitle: "",
    description:
      "In highly regulated industries like the power sector, timely and accurate regulatory reporting is essential to meet compliance standards and avoid penalties. Our Regulatory Reporting as a Service ensures that your organization stays compliant with NEPRA and other industry regulations. We provide a streamlined, efficient approach to regulatory reporting, minimizing the complexity and effort involved, while ensuring you meet all necessary deadlines.",
  };
  const mainContent = {
    text: "Our Regulatory Reporting & Compliance service ensures that power sector entities—including generation companies, licensees, and registration holders—adhere to NEPRA’s evolving cybersecurity regulations. This service provides a structured framework for incident detection, reporting, and regulatory compliance to minimize security risks and enhance sector-wide resilience.",
    image: "/images/regular.png",
  }
  const complianceContent = {
    title: "Compliance Areas",
    intro:
      "",
      points: [
  "Regulatory Compliance and Mandatory Reporting: These regulations are subject to all relevant laws, rules, and regulations issued by the Authority from time to time. All licensees, registration holders, and generation companies connected to the grid shall ensure that: all established security breaches are reported to the Authority; incident and analysis reports of security breaches are furnished on a quarterly basis as per the Schedule; the impact of a security breach on business, systems, applications, users, customers, and dependent IT and OT assets is submitted; and a common mechanism for transfer of information, incident level ranking, frequency of reporting, and use of relevant tools is adopted in consultation with stakeholders.",
  "Mandatory Reporting of Security Breaches and Threats: Any incident involving a security breach or threat shall be reported to the Authority immediately, but no later than seventy-two hours from the first knowledge of the incident.",
  "Our service ensures you stay compliant with NEPRA’s reporting requirements, providing timely incident reporting, detailed breach analysis, and structured communication mechanisms to safeguard your operations and maintain regulatory trust."
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