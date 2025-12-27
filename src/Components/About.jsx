import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from './Line'

gsap.registerPlugin(ScrollTrigger);

function About() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 80,        // 👉 right (small)
      y: -60,       // 👆 up (small)
      ease: "none",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 20%",
        end: "bottom 60%",
        scrub: true,
        markers: true, // enable if needed
      },
    });
  }, []);

  return (
    <section className=" flex flex-col items-center justify-center">
      <p
        ref={boxRef}
        className="text-3xl md:text-6xl bold font-bold text-center"
      >
        About Me
      </p>
      <Line text='Who am i'/>
    </section>
  );
}

export default About;
