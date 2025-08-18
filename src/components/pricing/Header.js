"use client";
import React from "react";

const Header = ({ title,description }) => {
  return (
    <section className="w-full min-h-[250px] h-[300px] xl:h-[250px] flex bg-blue-900 text-white rubik">
      <div className="h-full w-full bg-cover bg-center text-center bg-no-repeat bg-[url('https://res.cloudinary.com/dwiplkg4o/image/upload/v1755433421/bg_fqrppk.png')] flex flex-col lg:flex-row items-stretch relative">
        {/* Gradient overlay as a flex child */}
        <div
          className="w-full h-full bg-gradient-to-b from-black/40 to-black/40 absolute top-0 left-0 z-0 pointer-events-none"
          style={{ position: "absolute" }}
        ></div>
        <div className="relative flex flex-col justify-center w-full px-6 lg:px-20  py-8 lg:py-0">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            {title}
          </h1>
          <p className="text-white text-sm sm:text-base pt-3 px-4 lg:px-28 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
