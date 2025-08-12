"use client";
import React from "react";

const Why = ({ maintitle, maintext, contentarray = [], image, imagealt }) => {
  return (
    <section className="relative py-16 px-4 md:px-12 bg-gradient-to-tr from-blue-100 via-wheat to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Content */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <div className="flex items-center mb-8">
            <span className="inline-block w-2 h-12 bg-blue-600 rounded-full mr-4 animate-pulse"></span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg">
              {maintitle}
            </h2>
          </div>
          {maintext && (
            <p className="text-lg text-gray-800 mb-10 font-medium">
              {maintext}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentarray.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col  transition-all duration-200 hover:shadow-2xl hover:border-blue-400"
              >
                {item.title && (
                  <h3 className="text-2xl  text-black mb-2">
                    {item.title}
                  </h3>
                )}
                {item.heading && (
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.heading}
                  </h4>
                )}
                {item.text && (
                  <p className="text-base text-gray-700">{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-[50%] lg:w-1/3 flex justify-center items-center">
          {image && (
            <div className="relative w-full ">
              <img
                src={image}
                alt={imagealt || "Assessment"}
                className="w-full h-full object-cover  hover:scale-110 transition-transform duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Why;
