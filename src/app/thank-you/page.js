"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";

  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown <= 0) {
      router.push(returnUrl);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router, returnUrl]);

  const handleGoBackNow = () => {
    router.push(returnUrl);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-blue-100 px-6 py-10">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-blue-700 mb-3">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Your consultation request has been submitted. <br /> We’ll get back to
          you soon!
        </p>

        <p className="text-sm text-gray-500 italic mb-6">
          You will be redirected back in{" "}
          <span className="font-semibold text-blue-600">{countdown}</span>{" "}
          seconds...
        </p>

        <button
          onClick={handleGoBackNow}
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
        >
          Go Back Now
        </button>
      </div>
    </section>
  );
}
