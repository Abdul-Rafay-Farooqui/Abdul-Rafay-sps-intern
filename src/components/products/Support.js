import React from "react";

const Support = ({
  maintitle,
  maintext,
  contentarray = [],
  beneficiaries = [],
}) => {
  return (
    <section className="flex flex-col lg:flex-row justify-between px-6 py-12 bg-white rounded-xl shadow-lg shadow-blue-500/30 border border-gray-200 m-4">
      <div className="w-full lg:w-[66%] flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-left">
          {maintitle}
        </h2>
        {maintext && (
          <p className="text-gray-700 text-base mb-3 text-left">{maintext}</p>
        )}
        <ul className="pl-0 text-gray-700 text-base space-y-4">
          {contentarray.map((item, idx) => (
            <li className="flex items-start gap-2" key={idx}>
              <img
                src="/images/checkbox.png"
                alt="Checked"
                className="w-5 h-5 mt-[2px]"
              />
              <div className="flex flex-row items-center gap-2">
                <h4 className="font-semibold text-base m-0 p-0">
                  {item.title}:
                </h4>
                <p className="text-base m-0 p-0">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-[32%] flex flex-col justify-start mt-5 lg:mt-0">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-left">
          Who Can Benefit?
        </h2>
        <p className="text-gray-700 text-base mb-2 text-left">
          This service is tailored for:
        </p>
        <ul className="pl-0 text-gray-700 text-base space-y-2 text-left">
          {beneficiaries.map((b, idx) => (
            <li className="flex items-start gap-2" key={idx}>
              <img
                src="/images/checkbox.png"
                alt="Checked"
                className="w-5 h-5 mt-[2px]"
              />
              <h4 className="text-base">{b}</h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Support;
