import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./Line";
import { HiCode } from 'react-icons/hi';
import { PiMedalFill } from 'react-icons/pi';
import { TbLayersIntersect } from 'react-icons/tb';


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
        start: "top 15%",
        end: "bottom 60%",
        scrub: 5,
        markers: true
      },
    });
  }, []);

  return (
    <div className="overflow-hidden">
        <p
        ref={boxRef}
        className="text-3xl md:text-6xl md:mt-14 z-50 font-bold bold text-center"
      >
        Portfolio Showcase
      </p>
      <p className="text-center bold mt-5 md:text-xl ">Explore my journey through <span className="text-orange-500">projects</span> , <span className="text-orange-500">certifications</span> and <span className="text-orange-500">technical expertise</span>. <br/> Each section represents a milestone in my continuous learning path.</p>
    <Line text='Showcase'/>
    
    </div>
  )
}

export default Showcase