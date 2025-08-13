"use client";
import Banner from "../components/home/Banner";
import Service from "../components/home/Service";
import Marquee from "../components/home/Marquee";
import TextMarquee from "../components/home/TextMarquee";
import ClientWrapper from "@/components/partials/ClientWrapper";

export default function Home() {
  return (
    <ClientWrapper>
    <main className="min-h-screen">
      <Banner />
      <TextMarquee />
      <Service />
      <Marquee />
    </main>
    </ClientWrapper>
  );
}
