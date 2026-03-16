"use client";
import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return (
    <div className="">
      <Hero />
    </div>
  );
};

export default page;
