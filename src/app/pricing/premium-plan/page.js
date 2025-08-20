import Header from '@/components/products/Header'
import Main from '@/components/pricing/Main';
import React from 'react'

const page = () => {
    const headerContant = {
        title: "Tailored Cybersecurity and Compliance Solutions for Your Business",
        description: "Every organization has unique needs and challenges. With our Premium Service, we offer a fully customized approach to NEPRA compliance, designed specifically for your priorities and requirements."
    };
    const MainContent = {
        included: [
          {
            title: "Bespoke Compliance Support",
            paragraph: "Work with our team to design a customized compliance strategy tailored to your specific needs, challenges, and timelines.",
          },
          {
            title: "Dedicated Security Experts",
            paragraph: "Collaborate with a team of cybersecurity experts who will work closely with your organization to address critical compliance areas, including:",
            list: ["Security Policy Management for IT and OT assets","Vulnerability Assessments and Risk Mitigation","Monitoring, Incident Response, and Reporting"],
          },
          {
            title: "Flexible Engagements",
            paragraph: "Choose how you want to work with us—whether it’s ongoing compliance support, focused improvement projects, or strategic advisory services.",
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
        <Main content={MainContent} heading={"What’s Included in the Premium Service?"}/>
    </div>
  )
}

export default page