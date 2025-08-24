import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import ClientWrapper from "@/components/partials/ClientWrapper";
import Script from "next/script"; 

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "NEPRA",
  description:
    "Empowering the Power Sector to Comply with NEPRA Cyber Security Regulations.",
  metadataBase: new URL("https://nepra.spsnet.com"),
  openGraph: {
    title: "NEPRA Compliance as a Service",
    description:
      "We safeguard Pakistan's power generation, transmission, and distribution sectors with expert cybersecurity consulting and systems integration, ensuring compliance with NEPRA's regulations.",
    url: "https://nepra.spsnet.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEPRA Compliance as a Service",
    description:
      "Expert cybersecurity solutions to help the power sector meet NEPRA cybersecurity regulations in Pakistan.",
    site: "@nepra",
  },
  keywords: [
    "NEPRA compliance",
    "cybersecurity power sector",
    "Pakistan power cybersecurity",
    "NEPRA Cyber Security Regulations",
    "security consulting",
    "IT OT asset protection",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${rubik.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* ✅ Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PKD7MH30HP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PKD7MH30HP');
          `}
        </Script>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NEPRA Cybersecurity Compliance",
          "url": "https://nepra.netlify.app"
        }),
      }}
    />
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
