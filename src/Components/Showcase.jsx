import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./Line";


gsap.registerPlugin(ScrollTrigger);

function Showcase() {
    const boxRef = useRef(null);

    useEffect(() => {
    gsap.to(boxRef.current, {
      x: 80,
      y: -60,
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 20%",
        end: "bottom 60%",
        scrub: 5,
      },
    });
  }, []);

  return (
    <div>
        <p
        ref={boxRef}
        className="text-3xl md:text-6xl font-bold bold text-center"
      >
        Portfolio Showcase
      </p>
      <p className="text-center "></p>
    </div>
  )
}

export default Showcase