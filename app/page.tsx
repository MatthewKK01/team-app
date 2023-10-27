"use client";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Mockup from "@/components/Mockup";
import Review from "@/components/Review";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mockup />
      <InfoSection />
      <Carousel />
   
      <Footer />
    </main>
  );
}
