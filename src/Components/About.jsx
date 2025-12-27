import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./Line";
import { Code2, Award, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
        scrub: 0.8,
      },
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
      setCerti(Object.keys(data.My).length); // ✅ count object items
    })
    .catch(console.error);
  }, []);

  
  const stats = [
    
    {
      icon: <Award size={24} />,
      title: "Certifications",
      desc: "Innovative web solutions crafted",
      value: certi,
    },
    {
      icon: <Code2 size={24} />,
      title: "Total Projects",
      desc: "Innovative web solutions crafted",
      value: count, // ✅ dynamic
    },
    {
      icon: <Trophy size={24} />,
      title: "Hackathon Achievements",
      desc: "Recognized for skills and efforts",
      value: "2",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <p
        ref={boxRef}
        className="text-3xl md:text-6xl font-bold bold text-center"
      >
        About Me
      </p>

      <Line text="Who am I" />

      {/* About content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-28 mt-10 md:mt-16">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-72 md:h-72 rounded-full border border-black flex items-center justify-center">
            <img
              src="https://pandurang-2k25.netlify.app/assets/pfp-_lj6DcG3.png"
              alt="Avatar"
              className="w-32 h-32 md:w-72 md:h-72 rounded-full object-cover grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed bold text-black">
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
      <section className="w-full px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border bg-white border-black/60 p-6 flex flex-col justify-between transition hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-full border border-black/60 flex items-center justify-center">
                  {item.icon}
                </div>

                <span className="text-4xl md:text-5xl font-bold">
                  {item.value}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default About;
