"use client";
import React from "react";

export default function ChooseSection({ image }) {
  return (
    <section className="relative px-6 py-16 bg-blue-100 my-6  overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl z-0"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Text content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 leading-relaxed">
            <li>
              By leveraging our expertise, your organization will be equipped to
              not only comply with NEPRA cybersecurity regulations but also
              proactively safeguard its IT and OT environments. Our service
              empowers you to focus on operational excellence while we manage
              your cybersecurity policies effectively.
            </li>
            <li>
              Secure your assets and build resilience today with our Security
              Policy Management for IT & OT Assets as a Service!
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/policy2.png"
            alt="Security Policy Management"
            className="rounded-lg shadow-md w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
