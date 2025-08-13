"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPricingDropdownOpen, setIsPricingDropdownOpen] = useState(false);
  const [isActivitiesDropdownOpen, setIsActivitiesDropdownOpen] =
    useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);

  const productOptions = [
    { name: "Kespersky", href: "/products/kaspersky" },
    { name: "Tenable", href: "/products/tenable" },
    { name: "Microsoft", href: "/products/microsoft" },
    { name: "Fortinet", href: "/products/fortinet" },
    { name: "Trend Micro", href: "/products/trend-micro" },
  ];

  const serviceOptions = [
    { name: "Security Policy Management for IT and OT assets", href: "/services/security-policy" },
    { name: "Security controls implementation and improvement", href: "/services/security-control" },
    { name: "Security risk and vulnerability assessment", href: "/services/security-risk" },
    { name: "Data Management", href: "/services/data-management" },
    { name: "Audit and Risk Assessment", href: "/services/audit-and-risk" },
    { name: "Monitoring and Incident Response", href: "/services/monitoring" },
    { name: "Awareness and Training", href: "/services/awareness-and-training" },
    { name: "Regulatory Reporting", href: "/services/regulatory-reporting" },
  ];

  const pricingOptions = [
    { name: "Basic Plan", href: "/pricing/basic" },
    { name: "Standard Plan", href: "/pricing/standard" },
    { name: "Premium Solutions", href: "/pricing/premium" },
  ];

  const activitiesOptions = [
    { name: "Webinar", href: "/activities/training" },
    { name: "Blog", href: "/activities/workshops" },
  ];

  const aboutUsOptions = [
    { name: "Contact Us", href: "/about/contact" },
    { name: "Jobs", href: "/about/contact" },
  ];

  return (
  <div className="w-full flex sticky top-0 z-50 justify-between items-center px-4 py-3 rubik bg-gradient-to-r from-[#002147] via-blue-800  to-blue-900">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="https://res.cloudinary.com/dwiplkg4o/image/upload/v1755085423/logo_ccg6mx.png"
          alt="logo"
          className="h-12 md:h-[51px] object-cover"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden xl:flex items-center">
        <ul className="flex text-[16.5px] gap-6 lg:gap-8 text-white font-medium">
          <li>
            <a href="/" className="hover:text-blue-300 transition-colors">
              Home
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
              className="hover:text-blue-300 transition-colors flex items-center"
            >
              Products{" "}
              <span
                className={`ml-1 transition-transform duration-300 inline-block ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </button>
            {isProductsDropdownOpen && (
              <div
                className="absolute top-full left-0 w-52 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                {productOptions.map((product, index) => (
                  <a
                    key={index}
                    href={product.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
              className="hover:text-blue-300 transition-colors flex items-center"
            >
              Services{" "}
              <span
                className={`ml-1 transition-transform duration-300 inline-block ${
                  isServicesDropdownOpen ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </button>
            {isServicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-52 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                {serviceOptions.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block px-3 py-1 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => setIsPricingDropdownOpen(!isPricingDropdownOpen)}
              onMouseEnter={() => setIsPricingDropdownOpen(true)}
              onMouseLeave={() => setIsPricingDropdownOpen(false)}
              className="hover:text-blue-300 transition-colors flex items-center"
            >
              Pricing{" "}
              <span
                className={`ml-1 transition-transform duration-300 inline-block ${
                  isPricingDropdownOpen ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </button>
            {isPricingDropdownOpen && (
              <div
                className="absolute top-full left-0  w-48 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setIsPricingDropdownOpen(true)}
                onMouseLeave={() => setIsPricingDropdownOpen(false)}
              >
                {pricingOptions.map((pricing, index) => (
                  <a
                    key={index}
                    href={pricing.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {pricing.name}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() =>
                setIsActivitiesDropdownOpen(!isActivitiesDropdownOpen)
              }
              onMouseEnter={() => setIsActivitiesDropdownOpen(true)}
              onMouseLeave={() => setIsActivitiesDropdownOpen(false)}
              className="hover:text-blue-300 transition-colors flex items-center"
            >
              Activities{" "}
              <span
                className={`ml-1 transition-transform duration-300 inline-block ${
                  isActivitiesDropdownOpen ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </button>
            {isActivitiesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setIsActivitiesDropdownOpen(true)}
                onMouseLeave={() => setIsActivitiesDropdownOpen(false)}
              >
                {activitiesOptions.map((activity, index) => (
                  <a
                    key={index}
                    href={activity.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {activity.name}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)}
              onMouseEnter={() => setIsAboutUsDropdownOpen(true)}
              onMouseLeave={() => setIsAboutUsDropdownOpen(false)}
              className="hover:text-blue-300 transition-colors flex items-center"
            >
              About Us{" "}
              <span
                className={`ml-1 transition-transform duration-300 inline-block ${
                  isAboutUsDropdownOpen ? "rotate-180" : ""
                }`}
              >
                +
              </span>
            </button>
            {isAboutUsDropdownOpen && (
              <div
                className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setIsAboutUsDropdownOpen(true)}
                onMouseLeave={() => setIsAboutUsDropdownOpen(false)}
              >
                {aboutUsOptions.map((about, index) => (
                  <a
                    key={index}
                    href={about.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {about.name}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Desktop Login Button */}
      <div className="hidden xl:block">
        <button className="bg-transparent text-white text-sm rounded-md border-white px-4 py-2 border-[1px] hover:bg-white hover:text-[#002147] transition-colors">
          Login to CMS
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden">
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#002147] xl:hidden border-t border-gray-700">
          <div className="px-4 py-4 space-y-4">
            <ul className="space-y-3 text-white text-center font-medium">
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-blue-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    setIsProductsDropdownOpen(!isProductsDropdownOpen)
                  }
                  className="w-full flex items-center justify-center py-2 hover:text-blue-300 transition-colors"
                >
                  Products{" "}
                  <span
                    className={`ml-1 transition-transform duration-300 inline-block ${
                      isProductsDropdownOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isProductsDropdownOpen && (
                  <div className="mt-2 bg-blue-900 rounded-md py-2">
                    {productOptions.map((product, index) => (
                      <a
                        key={index}
                        href={product.href}
                        className="block px-4 py-2 text-white hover:text-blue-300 transition-colors"
                      >
                        {product.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() =>
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  className="w-full flex items-center justify-center py-2 hover:text-blue-300 transition-colors"
                >
                  Services{" "}
                  <span
                    className={`ml-1 transition-transform duration-300 inline-block ${
                      isServicesDropdownOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isServicesDropdownOpen && (
                  <div className="mt-2 bg-blue-900 rounded-md py-2">
                    {serviceOptions.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-white hover:text-blue-300 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() =>
                    setIsPricingDropdownOpen(!isPricingDropdownOpen)
                  }
                  className="w-full flex items-center justify-center py-2 hover:text-blue-300 transition-colors"
                >
                  Pricing{" "}
                  <span
                    className={`ml-1 transition-transform duration-300 inline-block ${
                      isPricingDropdownOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isPricingDropdownOpen && (
                  <div className="mt-2 bg-blue-900 rounded-md py-2">
                    {pricingOptions.map((pricing, index) => (
                      <a
                        key={index}
                        href={pricing.href}
                        className="block px-4 py-2 text-white hover:text-blue-300 transition-colors"
                      >
                        {pricing.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() =>
                    setIsActivitiesDropdownOpen(!isActivitiesDropdownOpen)
                  }
                  className="w-full flex items-center justify-center py-2 hover:text-blue-300 transition-colors"
                >
                  Activities{" "}
                  <span
                    className={`ml-1 transition-transform duration-300 inline-block ${
                      isActivitiesDropdownOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isActivitiesDropdownOpen && (
                  <div className="mt-2 bg-blue-900 rounded-md py-2">
                    {activitiesOptions.map((activity, index) => (
                      <a
                        key={index}
                        href={activity.href}
                        className="block px-4 py-2 text-white hover:text-blue-300 transition-colors"
                      >
                        {activity.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() =>
                    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)
                  }
                  className="w-full flex items-center justify-center py-2 hover:text-blue-300 transition-colors"
                >
                  About Us{" "}
                  <span
                    className={`ml-1 transition-transform duration-300 inline-block ${
                      isAboutUsDropdownOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isAboutUsDropdownOpen && (
                  <div className="mt-2 bg-blue-900 rounded-md py-2">
                    {aboutUsOptions.map((about, index) => (
                      <a
                        key={index}
                        href={about.href}
                        className="block px-4 py-2 text-white hover:text-blue-300 transition-colors"
                      >
                        {about.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </ul>
            <div className="pt-4 border-t border-gray-700 justify-items-center">
              <button className="w-full md:w-[50%] md:ml-[25%]  bg-transparent text-white text-sm rounded-md border-white px-4 py-2 border-[1px] hover:bg-white hover:text-[#002147] transition-colors">
                Login to CMS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
