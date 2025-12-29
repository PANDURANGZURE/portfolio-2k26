import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./Line";
import { Code2, Award, Trophy } from "lucide-react";
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);
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

  
  

function About() {
  const boxRef = useRef(null);
  const [count, setCount] = useState(0);
  const [certi, setCerti] = useState(0);

  // GSAP animation
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

  //aos
  useEffect(() => {
      AOS.init({
        duration: 1000,   // animation duration
        once: true,       // animate only once
        easing: "ease-in-out",
      });
    }, []);

  
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/project-api.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCount(data.length);
      })
      .catch(console.error);

      fetch(
    "https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/Certificates.json"
  )
    .then((res) => res.json())
    .then((data) => {
      setCerti(Object.keys(data.My).length);
    })
    .catch(console.error);
  }, []);

  
  const stats = [
    {
      icon: <Code2 size={24} />,
      title: "Total Projects",
      desc: "Innovative web solutions crafted",
      value: count, 
    },
    {
      icon: <Trophy size={24} />,
      title: "Hackathon Achievements",
      desc: "Recognized for skills and efforts",
      value: "2",
    },
    {
      icon: <Award size={24} />,
      title: "Certifications",
      desc: "Innovative web solutions crafted",
      value: certi,
    },
  ];

  return (
    <section data-aos="fade-up" className="flex flex-col items-center w-screen justify-center mb-10">
      <p
      
        ref={boxRef}
        className="text-4xl md:text-6xl font-bold bold text-center"
      >
        About Me
      </p>

      <Line text="Who am I" />

      {/* About content */}
      <div className=" mx-auto flex flex-col md:flex-row items-center md:gap-28 mt-10 md:mt-16">
        {/* Avatar */}
        <Tilt {...tiltOptions} className="">
          <div data-aos="fade-right" className="flex-shrink-0 ">
          <div className="w-[100%]  md:w-72 md:h-72 rounded-full  border-black flex items-center justify-center">
            <img
              src="https://pandurang-2k25.netlify.app/assets/pfp-_lj6DcG3.png"
              alt="Avatar"
              className="w-[80%]   md:w-72 md:h-72 rounded-full object-cover grayscale hover:grayscale-0 transition hover:rotate-12"
            />
          </div>
        </div>
        </Tilt>
        

        {/* Text */}
        <div data-aos="fade-left" className="text-center md:text-left max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed bold text-black p-2">
            I'm a{" "}
            <span className="text-orange-500 font-semibold">
              Web Developer
            </span>{" "}
            based in Pune, Maharashtra, passionate about crafting responsive and visually appealing websites. I enjoy transforming complex problems into simple, elegant, and user-friendly web experiences.

My goal is to build websites that are not only functional and efficient but also engaging and intuitive. I pay close attention to design aesthetics and usability, ensuring that each project is both visually striking and seamless to navigate.
          </p>

          <button className="mt-6 px-6 py-3 rounded-full bold border border-black font-bold hover:bg-black hover:text-white transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Stats */}
      <section data-aos="fade-up" className="w-full px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <Tilt {...tiltOptions} className="">
            <div
              key={index}
              className="relative rounded-2xl border bg-white border-black/60 p-6 flex flex-col justify-between transition hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-full border border-black/60 flex items-center justify-center hover:rotate-12 ">
                  {item.icon}
                </div>

                <span className="text-4xl md:text-5xl font-bold hover:rotate-12">
                  {item.value}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
              </div>
            </div>
            </Tilt>
          ))}
        </div>
      </section>
    </section>
  );
}

export default About;
