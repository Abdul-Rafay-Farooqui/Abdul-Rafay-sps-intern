"use client";
import React from "react";

const Content = () => {
    const sections = [
        {
          heading: "Key Cybersecurity Challenges in Pakistan’s Power Sector",
          points: [
            "Legacy Infrastructure Vulnerabilities: Many power sector entities in Pakistan rely on outdated legacy systems that lack modern security features. These systems, designed before the age of cyber threats, are often difficult to patch and upgrade, making them prime targets for attackers.",
            "Increased Cyber Threat Landscape: With the adoption of interconnected systems, the attack surface for cybercriminals has expanded. Malware, ransomware, phishing attacks, and Advanced Persistent Threats (APTs) are becoming increasingly common, targeting both IT and OT systems.",
            "Lack of Awareness and Training: A significant challenge in the sector is the lack of cybersecurity awareness and technical expertise among employees. Human error remains one of the leading causes of security breaches, emphasizing the need for regular training and awareness programs.",
            "Regulatory Compliance and Enforcement Gaps: While NEPRA has introduced Cybersecurity Regulations 2021 outlining stringent guidelines aimed at protecting power sector entities, many organizations are still in the early stages of compliance. Inconsistent enforcement and resource limitations further hinder the effective implementation of these regulations.",
            "Integration of IT and OT Systems: The convergence of IT and OT systems has improved operational efficiency but also introduced new vulnerabilities. OT systems, traditionally isolated, are now exposed to threats from IT networks, requiring advanced security solutions tailored to this unique environment.",
            "Geopolitical Threats and State-Sponsored Attacks: Pakistan’s critical infrastructure, including the power sector, is a potential target for state-sponsored cyberattacks. These sophisticated attacks aim to disrupt essential services, causing significant economic and social impact.",
          ],
        },
        {
          heading: "Impact of Cybersecurity Breaches",
          points: [
            "Operational Disruptions: Cyberattacks can lead to significant power outages, disrupting industries, businesses, and daily life. These disruptions can have cascading effects on the economy and public safety.",
            "Financial Losses: Organizations face substantial financial losses due to ransomware attacks, data breaches, and operational downtime. The costs of incident response and system recovery further strain budgets.",
            "Reputation Damage: A cybersecurity breach can erode public trust in the power sector’s ability to deliver reliable and secure services. Rebuilding this trust takes considerable time and effort.",
            "National Security Risks: Compromising critical infrastructure can have severe implications for national security. Cyberattacks targeting the power sector can destabilize the economy and undermine governance.",
          ],
        },
        {
          heading: "The Way Forward",
          points: [
            "Adopting Cybersecurity Best Practices Power sector entities must implement robust cybersecurity frameworks, including network segmentation, regular vulnerability assessments, and incident response plans.",
            "Building a Skilled Workforce Investing in employee training and hiring cybersecurity experts are crucial to building a resilient defense against evolving threats.",
            "Collaboration and Information Sharing Enhanced collaboration between government agencies, power companies, and technology providers is essential for sharing threat intelligence and adopting innovative solutions.",
            "Compliance with NEPRA Guidelines Organizations must prioritize compliance with NEPRA’s cybersecurity regulations to safeguard their systems and data.",
            "Investing in Advanced Security Solutions Leveraging technologies such as AI-driven threat detection, Managed Detection and Response (MDR), and Zero Trust architecture can help mitigate risks and improve security posture.",
          ],
          text: "Cybersecurity in Pakistan’s power sector is not just an IT issue but a critical operational and national security concern. Proactive measures, strategic investments, and a culture of cybersecurity awareness are essential to addressing these challenges. As the sector evolves, so must its approach to safeguarding its digital and operational assets, ensuring reliable and secure power for the nation",
        },
      ];
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 px-6 md:px-10 lg:px-8 py-14 md:py-20">
      <div className="mx-auto container">
        <div className="bg-white border border-blue-200/60 rounded-3xl shadow-xl shadow-blue-900/5">
          <div className="px-6 md:px-10 pt-5">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-5">
            </div>
            <p className="text-black text-lg md:text-xl leading-relaxed mx-auto md:mx-0 text-center md:text-left">
              As Pakistan’s power sector continues its digital transformation,
              embracing advanced technologies to improve efficiency and service
              delivery, the importance of robust cybersecurity has become
              undeniable. The integration of IT and Operational Technology (OT)
              systems, smart grids, and IoT devices has enhanced operational
              capabilities but also exposed the sector to unprecedented
              cybersecurity risks.
            </p>
          </div>
          <div className="px-6 md:px-10 pb-8 md:pb-12 mt-8 md:mt-10 space-y-10 md:space-y-12">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black text-center md:text-left">
              {section.heading}
            </h1>
            <ul className="mt-5 space-y-3 max-w-4xl mx-auto md:mx-0">
              {section.points.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  {/* Checkmark Icon */}
                  <svg
                    className="mt-1 w-5 h-5 text-blue-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-800 pt-5">{section.text}</p>
          </div>
        ))}
      </div>
        </div>
        <div className="container mx-auto mt-10 md:mt-14">
          <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 rounded-3xl p-6 md:p-8 border border-blue-600 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center md:text-left mb-6">
              About the Writer
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src="/images/shahwar.png"
                alt="Muhammad Shahwar Khan"
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full border-4 border-white/60 shadow-lg"
              />
              <p className="text-blue-100 leading-relaxed text-justify">
                <span className="font-semibold text-white">
                  Muhammad Shahwar Khan
                </span>{" "}
                is a seasoned cybersecurity professional and the Director of
                NEPRA Compliance at SPS. Shahwar specializes in guiding power
                sector entities to achieve regulatory compliance under the NEPRA
                Cybersecurity Guidelines. His expertise spans aligning
                cybersecurity strategies with evolving regulations. As a trusted
                NEPRA Compliance Advisor, Shahwar is committed to helping
                organizations strengthen their cybersecurity posture, ensuring
                resilient and secure operations in an increasingly complex
                threat landscape. You may reach out at{" "}
                <a
                  href="mailto:Shahwar.khan@spsnet.com"
                  className="text-blue-200 underline"
                >
                  Shahwar.khan@spsnet.com
                </a>{" "}
                or through{" "}
                <span className="text-blue-200 font-semibold">
                  +92 345 5777769
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
