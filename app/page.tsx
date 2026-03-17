"use client";
import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";
import Art from "@/components/Art";
import Menu from "@/components/Menu";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <div className="">
      <ReactLenis root />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </div>
  );
};

export default page;
