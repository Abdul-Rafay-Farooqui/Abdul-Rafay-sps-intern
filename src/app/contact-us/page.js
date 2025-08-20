import Content from '@/components/contact-us/Content';
import Header from '@/components/products/Header'
import React from 'react'

const page = () => {
    const headerContant = {
        title: "Get Started on Your NEPRA Compliance",
        description: "At SPS, we understand the importance of staying ahead in cybersecurity and compliance. That’s why our Basic Service is designed to help power sector companies take the first step toward NEPRA Cybersecurity Compliance."
    };
  return (
    <div>
        <Header
        title= {headerContant.title} 
        description={headerContant.description}
        />
        <Content/>
    </div>
  )
}

export default page