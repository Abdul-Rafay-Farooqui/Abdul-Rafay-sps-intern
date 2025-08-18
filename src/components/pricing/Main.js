import React from "react";
import Form from "../pricing/Form";

const Main = ({ content, heading }) => {
  return (
    <section className="px-3 md:px-16 py-16 bg-white text-gray-900">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
        {/* Heading 1 */}
        <h2 className="text-3xl font-bold text-black mb-6 border-l-4 border-blue-600 pl-3">
          {heading}
        </h2>

        {content.included.map((item, index) => (
          <div
            key={index}
            className="mb-8 p-6 rounded-xl shadow-sm bg-blue-50 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-black mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.paragraph}</p>

            {item.list && (
              <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-1">
                {item.list.map((point, i) => (
                  <li key={i} className="text-gray-800">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Heading 2 */}
        <h2 className="text-3xl font-bold text-black mb-6 border-l-4 border-blue-600 pl-3">
          How You Benefit:
        </h2>
        <ul className="space-y-3">
          {content.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-800">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2"></span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-[80%]">
        <Form/>
      </div>
      </div>
    </section>
  );
};

export default Main;
