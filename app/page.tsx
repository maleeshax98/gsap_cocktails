"use client";
import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <div className="">
      <Hero />
      <Cocktails />
    </div>
  );
};

export default page;
