import React from "react";

const Banner = () => {
  return (
    <section className="w-full min-h-[400px] md:h-[500px] flex bg-[#EAF4FC] rubik">
      <div className="h-full w-full bg-cover bg-center bg-no-repeat bg-[url('/images/back.jpg')] flex flex-col lg:flex-row items-stretch relative">
        {/* Gradient overlay as a flex child */}
        <div
          className="w-full h-full bg-gradient-to-b from-black/40 to-black/40 absolute top-0 left-0 z-0 pointer-events-none"
          style={{ position: "absolute" }}
        ></div>
        {/* Content container */}
        <div className="flex flex-col lg:flex-row w-full h-full z-10 relative">
          {/* Left: Text */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:pl-10 py-8 lg:py-0">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              NEPRA Compliance as a Service
            </h1>
            <h2 className="text-white text-lg sm:text-xl font-medium pt-3 leading-relaxed">
              Empowering the Power Sector to Comply with NEPRA Cyber Security
              Regulations.
            </h2>
            <p className="text-white text-sm sm:text-base pt-3 leading-relaxed">
              We safeguard Pakistan's power generation, transmission, and
              distribution sectors with expert cybersecurity consulting and
              systems integration, ensuring compliance with NEPRA's regulations.
            </p>
          </div>
          {/* Right: Plans */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 lg:pr-10 py-8 lg:py-0">
            <h1 className="text-xl sm:text-2xl font-semibold pb-5 text-white text-center">
              Choose a Plan
            </h1>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full">
              <div className="bg-white text-black w-full sm:w-[170px] space-y-1 py-4 text-center border-2 rounded-lg">
                <h1 className="font-semibold">Basic</h1>
                <p className="text-gray-600">$1k/month</p>
                <button className="bg-[#0000FF] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="bg-white w-full sm:w-[170px] text-black space-y-1 py-4 text-center border-2 rounded-lg">
                <h1 className="font-semibold">Standard</h1>
                <p className="text-gray-600">$3k/month</p>
                <button className="bg-[#0000FF] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="bg-white w-full sm:w-[170px] text-black space-y-1 py-4 text-center border-2 rounded-lg">
                <h1 className="font-semibold">Premium</h1>
                <p className="text-gray-600">Custom</p>
                <button className="bg-[#0000FF] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
