import React from 'react'
import Form from '../pricing/Form'
import { FaTwitter, FaFacebookF } from "react-icons/fa";


const Content = () => {
  return (
    <section className='py-10 bg-white px-10'>
        <div className=' flex flex-col lg:flex-row my-auto text-gray-800'>
            <div className='container mx-auto'>
                <Form/>
            </div>
            <div className="w-full container mx-auto lg:w-auto h-[400px] bg-white border border-blue-800 rounded-3xl shadow-lg shadow-blue-900/5 p-8 mt-14">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-6 text-center md:text-left">
        Contact Info
      </h1>

      {/* Content */}
      <div className="space-y-4 text-blue-800">
        <p>
          <span className="font-semibold text-blue-900">Call Us:</span>{" "}
          +301-337-2290
        </p>
        <p>
          <span className="font-semibold text-blue-900">Email:</span>{" "}
          <a
            href="mailto:support@spsnet.com"
            className="text-blue-700 hover:underline"
          >
            support@spsnet.com
          </a>
        </p>
        <p>
          <span className="font-semibold text-blue-900">Address:</span> 2400
          Research Blvd, Suite 115, Rockville, MD 20850 USA.
        </p>
      </div>

      {/* Follow Us Button */}
      <div className="mt-8">
        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-md">
          Follow Us
        </button>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full text-blue-700 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full text-blue-700 transition"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>
    </div>
        </div>
    </section>
  )
}

export default Content