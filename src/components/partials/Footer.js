import React from "react";

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/back.jpg')" }}
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
                  <div className="flex gap-6 justify-center lg:justify-start">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <svg
                        className="w-7 h-7 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.93-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 24 4.59a8.43 8.43 0 0 1-2.54.7z" />
                      </svg>
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <svg
                        className="w-7 h-7 text-gray-300 hover:text-blue-600 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0" />
                      </svg>
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
