import React from 'react'

const Main = ({
  text,
  image
}) => {
  return (
    <section className=''>
        <div className='lg:flex px-10 my-5 py-5 space-y-10 lg:space-y-0'>
            <div className='w-full lg:w-[70%] text-gray-800 mt-5 xl:mt-7 flex lg:justify-start justify-center text-center lg:text-left'>
                <h1>{text}</h1>
            </div>
            <div className='w-full lg:w-[30%] flex justify-center items-center'>
                <img src={image} alt="Security Policy Management"  className='w-full h-full'/>
            </div>
        </div>
    </section>
  )
}

export default Main