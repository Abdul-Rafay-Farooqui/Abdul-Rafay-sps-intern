import React from "react";

const Solutions = ({
  maintitle,
  leftContent = [],
  rightContent = [],
  image,
  imagealt,
}) => {
  return (
    <section className="px-6 py-12 bg-white rounded-xl border border-gray-200 m-4 shadow-xl shadow-blue-500/30">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
        {maintitle}
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left column */}
        <div className="w-full lg:w-[33%] pt-5 flex flex-col gap-8">
          {leftContent.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl text-gray-800 mb-2">{section.title}</h3>
              <ul className="pl-0 text-gray-700 space-y-5">
                {section.points.map((point, pidx) => (
                  <li className="flex items-start gap-2" key={pidx}>
                    <img
                      src="/images/checkbox.png"
                      alt="Checked"
                      className="w-5 h-5 mt-[2px]"
                    />
                    <p className="m-0 p-0">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Center image */}
        <div className="w-[50%] lg:w-[34%] flex justify-center items-center my-8 lg:my-0">
          <img
            src={image}
            alt={imagealt }
            className="w-full h-full object-contain mx-auto"
          />
        </div>
        {/* Right column */}
        <div className="w-full lg:w-[32%] flex flex-col gap-8">
          {rightContent.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl text-gray-800 mb-2">{section.title}</h3>
              <ul className="pl-0 text-gray-700 space-y-5">
                {section.points.map((point, pidx) => (
                  <li className="flex items-start gap-2" key={pidx}>
                    <img
                      src="/images/checkbox.png"
                      alt="Checked"
                      className="w-5 h-5 mt-[2px]"
                    />
                    <p className="m-0 p-0">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
