import react from "react";
import Header from "@/components/products/Header";
import Main from "@/components/services/Main";
import Compliance from "@/components/services/Complince";


const page = () => {
      const headerContent = {
    title: "Awareness and Training as a Service",
    subtitle: "",
    description:
      "Human error remains one of the leading causes of cybersecurity breaches. Equip your workforce with the knowledge and skills needed to combat cyber threats and ensure compliance with our Awareness and Training as a Service. Designed for organizations in the power sector, this service aligns with NEPRA guidelines and empowers your employees to become the first line of defense against security risks.",
  };
  const mainContent = {
    text: "SPS’s Awareness and Training as a Service is designed to ensure that your organization is equipped to manage and mitigate information security risks effectively. We provide a comprehensive training program focused on cybersecurity threats, best practices, and regulatory compliance, fostering a secure and informed workforce.",
    image: "/images/aware1.png",
  }
  const complianceContent = {
    title: "Compliance Areas",
    intro:
      "",
       points: [
  "Information Security Awareness and Training Program: A formal awareness and training program regarding information security threats and safeguards to minimize frauds and identity theft risks shall be developed and implemented by the licensees. This program shall cover, at a minimum, the following aspects: an explanation of liabilities, roles, and responsibilities of the licensee as well as its customers and users for using IT and OT products and services offered by the licensee; compliance with disclosure requirements under applicable laws; contact details of the help desk for information security issues; procedure for re-authentication and user profile updating; complaint handling process including dispute resolution mechanisms related to IT and OT assets; regular issuance of guidelines to customers and users for mitigating the latest risks associated with IT and OT assets; and regular review and evaluation of the awareness and training programs by the management.",
  "Our Awareness and Training as a Service ensures that your workforce stays informed, compliant, and prepared to mitigate security risks, protecting your IT and OT assets from evolving threats."
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