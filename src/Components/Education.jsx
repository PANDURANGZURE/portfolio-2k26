import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Award, Trophy } from "lucide-react";
import Line from './Line';
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";


const stats = [
    { 
        img :"https://pandurang-2k25.netlify.app/assets/mvm-YIGxW4WQ.png",
        name: "M.V.M. Educational Campus",
        location: "Andheri, Mumbai",
        desc: "Completed classes 1st to 9th at M.V.M Educational Campus in Mumbai.",
        year: '(2012 - 2021)', 
    },
    {
        img :"https://pandurang-2k25.netlify.app/assets/ss-JyNiAYdY.png",
        name: "S.S English Medium School",
        location: "Vishrantwadi, Pune",
        desc: "Done my class 10th in Pune at SS Endlish Medium School.",
        year: '(2021 - 2022)', 
    },
    {
        img :"https://pandurang-2k25.netlify.app/assets/adypu-tGrykxe3.png",
        name: "Ajeenkya D Y Patil School of Engineering",
        location: "Lohegaon, Pune",
        desc: "Achieved a Diploma with distinction, securing an aggregate of 83.71%.",
        year: '(2022 - 2025)', 
    },
    {
        img :"https://github.com/PANDURANGZURE/project-img/blob/main/gh%20raisoni.png?raw=true",
        name: "G.H.Raisoni Skill Tech University",
        location: "Yerwada, Pune",
        desc: "Currently Pursuing BTech in Computer Engineering.",
        year: '(2025 - 2028)', 
    },
  ];

function Education() {
    const boxRef = useRef(null);
    const [count, setCount] = useState(0);
  
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
    // Initialize AOS
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });

    // GSAP Responsive Animation
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Full movement
      gsap.to(boxRef.current, {
        x: 80,
        y: -60,
        ease: "power1.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 20%",
          end: "bottom 60%",
          scrub: 5,
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: Reduced movement to prevent horizontal scroll
      gsap.to(boxRef.current, {
        x: 20,
        y: -10,
        ease: "power1.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 20%",
          end: "bottom 60%",
          scrub: 2,
        },
      });
    });

    

    return () => mm.revert(); // Cleanup
  }, []);
  return (
    <>
    <div className="overflow-x-hidden w-full">
        <div data-aos="fade-up" className="flex flex-col items-center justify-center mt-14 w-full">
                <h2 ref={boxRef} className="text-4xl md:text-6xl bold font-bold text-center mb-3 mt-10">
                Academic Journey
                </h2>
                <Line text="Education" />
              </div>
              <section data-aos="fade-up" className="w-full px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <Tilt {...tiltOptions} className="">
      <div
  data-aos="fade-up"
  className="group relative overflow-hidden rounded-2xl
  mt-8 md:flex
  border border-black
  transition-all duration-500"
>
  {/* LEFT — Image Section */}
<div
  className="relative shrink-0 w-full md:w-1/3
  h-40 md:h-auto
  flex items-center justify-center
  overflow-hidden"
>
  <img
    src={item.img}
    alt={item.name}
    className="h-full w-full object-cover
    grayscale group-hover:grayscale-0
    md:rounded-l-2xl rounded-t-3xl
    scale-95 group-hover:scale-100
    transition-all duration-500"
  />
</div>


  {/* RIGHT — Content Section (White) */}
  <div
    className="relative flex-1 bg-white
    p-6 md:p-7"
  >
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 className="text-black text-2xl font-semibold tracking-tight">
        {item.name}
      </h3>

      <span
        className="text-xs font-medium tracking-wide
        bg-black/10 text-black
        px-4 py-1.5 rounded-full"
      >
        {item.year}
      </span>
    </div>

    <p className="mt-1 text-gray-700 text-lg font-medium">
      {item.location}
    </p>

    <div className="mt-4 pl-4 border-l-4 border-black/10">
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {item.desc}
      </p>
    </div>
  </div>
</div>


            </Tilt>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default Education