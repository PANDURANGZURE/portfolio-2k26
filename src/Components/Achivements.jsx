import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from './Line'
import img from '../assets/achiv.png'
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

function Achivements() {
    const boxRef = useRef(null);
    const tiltOptions = {
    tiltMaxAngleX: 12,
    tiltMaxAngleY: 12,
    perspective: 1000,
    scale: 1.05,
    glareEnable: true,
    glareMaxOpacity: 0.3,
    glareBorderRadius: "16px",
    transitionSpeed: 1500
  };

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

  useEffect(() => {
        AOS.init({
          duration: 1000,   // animation duration
          once: true,       // animate only once
          easing: "ease-in-out",
        });
      }, []);

  return (
    <>
    <>
    <div>
        <div data-aos="fade-up" className="overflow-hidden ">
        <h2 ref={boxRef} className="text-4xl md:text-6xl bold font-bold text-center mb-3 mt-20 "> Recognized for skills and efforts</h2>
                <p className="text-lg md:text-xl text-center leading-relaxed bold text-black mt-5">A distinguished achievement representing top-tier performance within the <span className="text-orange-500">district</span>. <br />
                 This recognition honors exceptional technical skill and leadership, awarded for outperforming a broad field of regional <br />competitors through innovative problem-solving and dedicated effort. <span className="text-orange-500">For Project Agro-Connect</span></p>
                <Line text="Achivements" />
    </div>
    {/* img */}
    <div className="flex flex-col justify-center items-center mt-10">
        
        <div className="p-4 md:p-10">
      {/* 1. Main Wide Certificate */}
      <div className="flex justify-center">
        <Tilt {...tiltOptions} className="w-[80%]">
          <div data-aos="fade-up" className="hover:border-2 rounded-2xl flex flex-col hover:shadow-2xl transition bg-white overflow-hidden border border-gray-900">
            <p className="text-left font-semibold md:text-2xl bold m-2">Nirmitivedh</p>
            <img 
              className="rounded-b-2xl h-[50%] object-cover object-left" 
              src="https://github.com/PANDURANGZURE/project-img/blob/main/assets/certificates/nirmitived%20winner.jpg?raw=true" 
              alt="Nirmitivedh Winner" 
            />
          </div>
        </Tilt>
      </div>

      {/* 2. Side-by-Side Certificates */}
      <div className="flex justify-center items-center md:flex-row flex-col gap-8 mt-10">
        
        {/* Left Side Certificate */}
        <Tilt {...tiltOptions} className="md:w-[39%] w-[80%]">
          <div data-aos="fade-up" className=" border-gray-900 hover:border-2 shadow-2xl transition rounded-2xl flex flex-col bg-white overflow-hidden border border-gray-900">
            <p className="text-left font-semibold md:text-2xl bold m-2">Nirmitivedh</p>
            <img 
              className="rounded-b-2xl aspect-[4/3]  object-cover object-left" 
              src="https://media.licdn.com/dms/image/v2/D4D22AQFZK3ADstE0AA/feedshare-shrink_2048_1536/B4DZXtXBroHsAo-/0/1743443995185?e=1768435200&v=beta&t=qBOGpqsjgpXK_kIya7MCW0AYXTWQG1g0YaHDjHBaqYM" 
              alt="Nirmitivedh Achievement" 
            />
          </div>
        </Tilt>

        {/* Right Side Certificate */}
        <Tilt {...tiltOptions} className="md:w-[39%] w-[80%]">
          <div data-aos="fade-up" className="hover:border-2 border shadow-2xl transition rounded-2xl flex flex-col bg-white overflow-hidden  hover:border-gray-900">
            <p className="text-left font-semibold md:text-2xl bold m-2">TechFusion</p>
            <img 
              className="rounded-b-2xl aspect-[4/3] object-cover object-left" 
              src={img} 
              alt="TechFusion Winner" 
            />
          </div>
        </Tilt>
      </div>
    </div>
    </div>
    </div>
    </>
    
    </>
  )
}

export default Achivements