import React from "react";

const Why = ({ maintitle, maintext, contentarray = [], image, imagealt }) => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-6 py-12 bg-[#fffff] rounded-xl border border-gray-200 m-4 shadow-xl shadow-blue-500/30">
      <div className="w-full lg:w-[66%] flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left lg:text-left">
          {maintitle}
        </h2>
        {maintext && (
          <p className="text-base text-gray-900 mb-6 text-left lg:text-left">
            {maintext}
          </p>
        )}
        <div className="text-gray-900 text-base space-y-6 text-left lg:text-left">
          {contentarray.map((item, idx) => (
            <div key={idx}>
              {item.title && <h3 className="text-xl mb-2">{item.title}</h3>}
              {item.heading && (
                <h4 className=" text-lg mb-1">{item.heading}</h4>
              )}
              {item.text && <p>{item.text}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50%] lg:w-[32%] flex justify-end items-start mt-8 lg:mt-0 h-full">
        {image && (
          <img
            src={image}
            alt={imagealt || "Assessment"}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default Why;
