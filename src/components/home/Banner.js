import React from "react";

const Banner = () => {
  const plans = [
    {
      name: "Basic",
      price: "$1k/month",
      features: [
        "Monthly NEPRA Compliance Assessment",
        "Recommendations to Improve Compliance",
        "Artifact Creation for NEPRA Audits",
      ],
    },
    {
      name: "Standard",
      price: "$3k/month",
      features: [
        "Weekly Compliance Sessions",
        "Detailed Compliance Roadmaps",
        "Artifact and Documentation Support",
      ],
    },
    {
      name: "Premium",
      price: "Custom",
      features: [
        "Bespoke Compliance Support",
        "Dedicated Security Experts",
        "Flexible Engagements Services",
      ],
    },
  ];
  return (
    <section className="w-full  flex bg-[#EAF4FC] ">
      <div className="h-full w-full bg-cover bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/dwiplkg4o/image/upload/v1755079927/bg_t0w6vt.jpg')] flex flex-col lg:flex-row items-stretch relative">
        {/* Gradient overlay as a flex child */}
        <div className="w-full h-full bg-gradient-to-b from-black/40 to-black/40 absolute top-0 left-0 z-0 pointer-events-none"></div>
        {/* Content container */}
        <div className="flex flex-col justify-center w-full h-full z-10 relative">
          {/* Left: Text */}
          <div className=" text-center w-full  px-6 lg:pl-10 py-8 lg:py-0 mt-16">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              NEPRA Compliance as a Service
            </h1>
            <h2 className="text-white text-lg sm:text-xl font-medium pt-3 leading-relaxed">
              Empowering the Power Sector to Comply with NEPRA Cyber Security
              Regulations.
            </h2>
            <p className="text-white text-sm sm:text-base px-5 lg:px-52 pt-3 leading-relaxed">
              We safeguard Pakistan's power generation, transmission, and
              distribution sectors with expert cybersecurity consulting and
              systems integration, ensuring compliance with NEPRA's regulations.
            </p>
          </div>
          {/* Right: Plans */}
          <div className="flex flex-col justify-center items-center px-6 lg:pr-10 py-10 ">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold pb-5 text-white text-center">
                Choose a Plan
              </h1>
              <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center w-full">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="bg-[#e4e4e4]/10 backdrop-blur-[8px] text-white w-full sm:w-[260px] h-[400px] py-8 px-6 text-center rounded-xl shadow-[0_10px_15px_10px_rgba(0,0,0,0.15)] flex flex-col justify-between items-center"
                  >
                    <div className="w-full flex flex-col items-center">
                      <h1 className="font-semibold text-2xl mb-4">
                        {plan.name}
                      </h1>
                      <p className="font-extralight text-md mb-1 text-white">
                        {plan.price}
                      </p>
                      {plan.features && (
                        <ul className="text-left space-y-4 my-7 w-full max-w-xs mx-auto">
                          {plan.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex text-sm items-start gap-5"
                            >
                              <span className="inline-block text-green-400">
                                {/* Heroicons checkmark SVG */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <button className="bg-transparent font-medium px-6 py-3 rounded-lg border-[1px] border-white text-white hover:text-black hover:bg-white transition-colors text-sm  mt-4">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
