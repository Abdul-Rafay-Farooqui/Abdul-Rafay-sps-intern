import React from "react";

const Footer = () => {
  return (
    <footer className="w-full relative bg-blue-900 text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="w-full bg-cover  bg-center bg-no-repeat relative bg-[url('/images/back.jpg')]"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Logo and Company Description */}
            <div className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start justify-center lg:justify-start">
              {/* Logo */}
              <div className="items-center">
                <img
                  src="/images/logo.png"
                  alt="SPS Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>

              {/* Company Description */}
              <div className="text-center lg:text-left flex justify-center lg:justify-start">
                <p className="text-gray-300 w-[70%] leading-relaxed text-sm md:text-[16px]">
                  Empowering the Power Sector to Comply with NEPRA Cyber Security Regulations.
                </p>
              </div>
            </div>

            {/* Right Side - Pages & Contact */}
            <div className="flex flex-col mt-4 lg:mr-10 justify-self-center lg:justify-self-end h-full">
              <div className="flex flex-col md:flex-row md:gap-40">
                {/* Pages */}
                <div className="text-center lg:text-left lg:mb-0 mb-8">
                  <h3 className="text-white text-xl md:text-2xl pb-5">Quick Links</h3>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <a href="/" className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors duration-200">Home</a>
                    <a href="/products" className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors duration-200">Products</a>
                    <a href="/services" className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors duration-200">Services</a>
                    <a href="/pricing" className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors duration-200">Pricing</a>
                    <a href="/activities" className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors duration-200">Activities</a>
                    <a href="/about" className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors duration-200">About Us</a>
                  </div>
                </div>

                {/* Contact + Social Icons */}
                <div className="text-center lg:text-left">
                  <h3 className="text-white text-xl md:text-2xl pb-5">Contact</h3>
                  <p className="text-gray-300 text-xs md:text-sm pb-3">Email: support@spsnet.com</p>
                  <p className="text-gray-300 text-xs md:text-sm pb-5">Phone: +301-337-2290</p>

                  {/* Social Icons under contact */}
                  <div className="flex gap-6 justify-center lg:justify-start  ">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <img
                        className="w-8 h-8 transform hover:scale-120 transition duration-300 "
                        src="/images/twitter.png"
                        alt="Twitter Icon"
                      />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <img
                        className="w-8 h-8  transform hover:scale-120 transition duration-300"
                        src="/images/facebook.png"
                        alt="Facebook Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 md:mt-12 pb-6 pt-6 text-center justify-items-center md:pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm md:text-sm text-center md:text-left">
              © 2024 Software Productivity Strategists, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
