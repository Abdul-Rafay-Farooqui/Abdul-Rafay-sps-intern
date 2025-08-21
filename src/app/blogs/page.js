import Blogs from '@/components/blogs/Blogs';
import Header from '@/components/products/Header'
import React from 'react'

const page = () => {
    const headerContent = {
        title: "Ever-Evolving Cybersecurity Landscape: Challenges and Impact on the Power Sector",
        description:
          "As Pakistan’s power sector continues its digital transformation, embracing advanced technologies to improve efficiency and service delivery, the importance of robust cybersecurity has become undeniable.",
      };
  return (
    <div>
        <Header 
        title={headerContent.title}
        subtitle={headerContent.subtitle}
        description={headerContent.description}
        />
        <Blogs/>
    </div>
  )
}

export default page