"use client";
import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <div className="">
      <Hero />
      <Cocktails />
      <About />
    </div>
  );
};

export default page;
