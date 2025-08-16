import react from "react";
import Header from "@/components/products/Header";
import Main from "@/components/services/Main";
import Compliance from "@/components/services/Complince";


const page = () => {
      const headerContent = {
    title: "Monitoring and Incident Response as a Service",
    subtitle: "",
    description:
      "In an era of advanced cyber threats, ensuring continuous monitoring and rapid incident response is vital for protecting your IT and OT environments. Our Monitoring and Incident Response as a Service combines cutting-edge technology and expert intervention to detect, mitigate, and recover from threats effectively, ensuring business continuity and regulatory compliance with standards like NEPRA.",
  };
  const mainContent = {
    text: "SPS’s Monitoring and Incident Response as a Service ensures that your IT and OT systems are continuously monitored for security risks and vulnerabilities, while providing rapid, effective responses to incidents. We implement approved mechanisms for monitoring security controls and managing incidents in compliance with NEPRA’s regulations.",
    image: "/images/monitor1.png",
  }
  const complianceContent = {
    title: "Compliance Areas",
    intro:
      "",
       points: [
  "Monitoring of Security Controls and Incident Management: A generation company connected to the national grid, a licensee, or a registration holder shall ensure that approved mechanisms for monitorization of security controls and any computer incident in line with the relevant best practices are in place.",
  "Incident Management Plan and Organizational CERT: A generation company connected to the national grid, a licensee, or a registration holder shall develop and have in place an incident management plan to immediately tackle any incident at the organizational level by the organizational CERT, ensuring that the incident is properly addressed and does not spread to or impact other licensees or stakeholders of the power sector.",
  "Security Controls Monitoring and Response Mechanism: A generation company connected to the national grid, a licensee, or a registration holder shall develop and implement a formally approved mechanism for the monitoring of Security Controls. An analysis of the effectiveness of existing or proposed Security Controls Monitoring methods shall be part of this mechanism. The licensee shall ensure that, at a minimum, the following aspects are covered: Monitoring of its network activity by collecting and analyzing host and network data related to security events (including privileged access to sensitive operating systems, configuration changes, and access to critical applications); methods for proactive monitoring of IDS/IPS and for responding to security breaches, with a rapid response team responsible for immediate action; monitoring and reporting mechanisms for Authentication Controls, documented and approved by senior management; procedures and timelines for restoration of systems; use of self-assessments, penetration testing, and independent security audits appropriate to system complexity and risk exposure; identification and listing of policy violations, unauthorized configuration changes, and other risk-increasing conditions; and procedures for regular monitoring of logs and audit trails, with retention of IT and OT security logs for a minimum of five years.",
  "Our service helps safeguard your operations by providing continuous monitoring, immediate incident response, and effective management of security breaches, ensuring compliance with NEPRA regulations and protection of critical infrastructure."
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