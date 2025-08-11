import react from "react";
import Header from "@/components/products/Header";
import Main from "@/components/services/Main";
import Compliance from "@/components/services/Complince";


const page = () => {
      const headerContent = {
    title: "Data Management as a Service",
    subtitle: "",
    description:
      "Data is the backbone of modern organizations, driving insights, operations, and innovation. However, managing large volumes of data while ensuring its security, integrity, and accessibility can be complex. Our Data Management as a Service offers a comprehensive solution tailored to your business needs, helping you organize, secure, and optimize data across IT and OT environments while maintaining regulatory compliance with standards like NEPRA.",
  };
  const mainContent = {
    text: "SPS’s Data Management as a Service ensures secure, accurate, and authorized access to critical data in compliance with NEPRA cybersecurity regulations. We provide robust mechanisms to validate and protect the integrity of your data, ensuring it is free from errors and accessible only to authorized personnel.",
    image: "/images/data1.png",
  }
  const complianceContent = {
    title: "Compliance Areas",
    intro:
      "",
    points: [
  "Data Integrity and Access Control Responsibilities: It shall be the responsibility of the licensee providing data to another licensee or stakeholder of the power sector to ensure that the data is free from any errors, access to data is provided only to authorized persons, and there is a mechanism in place to ensure data is authentic.",
  "Critical Data Validation Mechanism: The national grid company and the licensees or generation companies connected with it shall put in place a mechanism for any critical data validation.",
  "Our service helps you manage and safeguard your data, ensuring its authenticity, security, and compliance with industry regulations for seamless operations and data exchange within the power sector."
]
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

        </div>
    );
}
export default page;