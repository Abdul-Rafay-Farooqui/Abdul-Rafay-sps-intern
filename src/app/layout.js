
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "NEPRA",
  description: "Empowering the Power Sector to Comply with NEPRA Cyber Security Regulations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
