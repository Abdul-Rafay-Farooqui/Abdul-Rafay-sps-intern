"use client";
import React from "react";

export default function ChooseSection({ image }) {
  return (
    <section className="relative px-6 py-16 my-6  overflow-hidden">

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Text content */}
        <div>
          <h1 className="text-3xl font-bold text-black mb-6">Why Choose Us?</h1>
          <ul className="list-disc  space-y-4 text-lg text-black leading-relaxed">
            <li>
              <p>By leveraging our expertise, your organization will be equipped to
              not only comply with NEPRA cybersecurity regulations but also
              proactively safeguard its IT and OT environments. Our service
              empowers you to focus on operational excellence while we manage
              your cybersecurity policies effectively.</p>
            </li>
            <li>
              <p>Secure your assets and build resilience today with our Security
              Policy Management for IT & OT Assets as a Service!</p>
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
