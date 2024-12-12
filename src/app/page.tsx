import { Timeline } from "@/components/ui/timeline";
import About from "@/sections/About";
import Cta from "@/sections/Cta";
import Features from "@/sections/Features";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Team from "@/sections/Team";
import TimelineFeature from "@/sections/TimeLine";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <TimelineFeature />
      <Team />
      <Cta />
    </>
  );
}
