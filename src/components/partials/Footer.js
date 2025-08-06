import React from "react";

const Footer = () => {
  const services = [
    "Security Policy Management for IT and OT assets as a Service",
    "Security controls implementation and improvement as a Service",
    "Security Risk Vulnerability Assessment as a Service",
    "Data Management as a Service",
    "Audit and Risk Assessment as a Service",
    "Monitoring and incident response as a Service",
    "Awareness and Training as a Service",
    "Regulatory Reporting as a Service",
  ];

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
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Logo and Company Description */}
            <div className="space-y-4 md:space-y-6">
              {/* Logo */}
              <div className=" items-center ">
                <img
                  src="/images/logo.png"
                  alt="SPS Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>

              {/* Company Description */}
              <div>

                <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                Software Productivity Strategists, Inc. (SPS) delivers AI and Cloud-powered industry solutions. With
                  expertise across design, development, security, and
                  operations, we build scalable, secure, and reliable systems.
                  Our award-winning team includes IBM-certified inventors and
                  global competition champions.
                </p>
              </div>
            </div>

            {/* Right Side - Services */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-white text-xl md:text-2xl font-bold border-b-2 border-blue-500 pb-2">
                Services
              </h3>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 md:space-x-3 group cursor-pointer"
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0 group-hover:bg-blue-400 transition-colors duration-200"></div>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="mt-8 md:mt-12 pt-6 text-center justify-items-center md:pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm md:text-sm text-center md:text-left">
                © 2024 Software Productivity Strategists, Inc. All rights
                reserved.
              </p>
            </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
