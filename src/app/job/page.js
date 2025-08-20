import Careers from '@/components/job/Careers';
import Header from '@/components/products/Header'
import React from 'react'

const page = () => {
    const headerContant = {
        title: "Explore Career Opportunities at NEPRA",
        description: "Are you passionate about making a difference in the power sector? Join NEPRA and become a part of a dynamic team driving energy regulation and innovation. Check out our latest job openings and start your journey toward an impactful career."
    };
  return (
    <div>
        <Header
        title= {headerContant.title} 
        description={headerContant.description}
        />
        <Careers/>
    </div>
  )
}

export default page