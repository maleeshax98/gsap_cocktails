"use client";
import { cocktailLists, mockTailLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 70%",
        scrub: true,
        
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", { x: -100, y: 100 }, 0)
      .to("#c-right-leaf", { x: 100, y: 100 }, 0);
  }, []);
  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map((d) => (
              <li key={d.name}>
                <div className="md:me-28">
                  <h3>{d.name}</h3>
                  <p>
                    {d.country} | {d.detail}
                  </p>
                </div>
                <span>-{d.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="love">
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map((d) => (
              <li key={d.name}>
                <div className="md:me-28">
                  <h3>{d.name}</h3>
                  <p>
                    {d.country} | {d.detail}
                  </p>
                </div>
                <span>-{d.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
