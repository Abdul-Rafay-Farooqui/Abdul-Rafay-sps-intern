"use client";
import Banner from "./components/home/Banner";
import Service from "./components/home/Service";
import Marquee from "./components/home/Marquee";
import TextMarquee from "./components/home/TextMarquee";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <TextMarquee/>
      <Service />
      <Marquee />
    </main>
  );
}
