import Header from '@/components/products/Header'
import Main from '@/components/pricing/Main';
import React from 'react'

const page = () => {
    const headerContant = {
        title: "Get Started on Your NEPRA Compliance",
        description: "At SPS, we understand the importance of staying ahead in cybersecurity and compliance. That’s why our Basic Service is designed to help power sector companies take the first step toward NEPRA Cybersecurity Compliance."
    };
    const MainContent = {
        included: [
          {
            title: "Monthly NEPRA Compliance Assessment",
            paragraph: "Our expert NEPRA compliance consultant will meet with your team once a month to assess your organization's current compliance status.",
          },
          {
            title: "Recommendations to Improve Compliance",
            paragraph: "You’ll receive detailed recommendations tailored to your specific needs, including optional services to improve your cybersecurity posture.",
          },
          {
            title: "Artifact Creation for NEPRA Audits",
            paragraph: "We’ll help you create essential artifacts and documentation that can be presented to NEPRA auditors, ensuring transparency and readiness during evaluations.",
          },
        ],
        benefits: [
          "Get a clear understanding of your compliance status.",
          "Develop confidence in presenting compliance evidence to NEPRA auditors.",
          "Begin improving your security policies and controls with actionable insights.",
        ],
      };
  return (
    <div>
        <Header title= {headerContant.title} description={headerContant.description}/>
        <Main content={MainContent} heading={"What’s Included in the Basic Service?"}/>
    </div>
  )
}

export default page