"use client";
import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const page = () => {
  return <div className="flex-center h-[100vh]"></div>;
};

export default page;
