"use client"
import React from "react";
import { navLinks } from "../constants";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
          <p className="text-2xl font-bold">Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
