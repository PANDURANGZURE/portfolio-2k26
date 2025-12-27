import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./Line";
import { HiCode } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2'; // Added this missing import
import { PiMedalFill } from 'react-icons/pi';
import { TbLayersIntersect } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

function Showcase() {
  // 1. ALL HOOKS MUST BE INSIDE THE FUNCTION BODY
  const [view, setView] = useState('projects'); 
  const [data, setData] = useState([]);
  const boxRef = useRef(null);

  const btnBase = "flex-1 flex flex-col items-center justify-center py-4 px-2 border rounded-xl transition-all duration-300";

  // API Fetch Logic
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = '';
      if (view === 'projects') endpoint = '/api/projects';
      if (view === 'certs') endpoint = 'https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/Certificates.json';
      if (view === 'skills') endpoint = '/api/skills';

      try {
        // Mock data logic
        setData(new Array(6).fill({
          title: view === 'projects' ? 'Project Name' : view === 'certs' ? 'Certificate Name' : 'Skill Name',
          desc: 'Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.'
        }));
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [view]);

  // GSAP Animation
  useEffect(() => {
    const anim = gsap.to(boxRef.current, {
      x: 80,
      y: -60,
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 15%",
        end: "bottom 60%",
        scrub: 5,
        markers: false // Turned off markers for production look
      },
    });

    return () => anim.kill(); // Cleanup animation on unmount
  }, []);

  return (
    <div className="overflow-hidden">
      <p
        ref={boxRef}
        className="text-3xl md:text-6xl md:mt-14 z-50 font-bold text-center"
      >
        Portfolio Showcase
      </p>
      
      <p className="text-center font-bold mt-5 md:text-xl">
        Explore my journey through <span className="text-orange-500">projects</span>, 
        <span className="text-orange-500"> certifications</span> and 
        <span className="text-orange-500"> technical expertise</span>. <br/> 
        Each section represents a milestone in my continuous learning path.
      </p>

      <Line text='Showcase'/>

      <div className="max-w-6xl mx-auto p-6 font-sans text-black">
        
        {/* 1. SEPARATE NAVIGATION BUTTONS */}
        <div className="border border-gray-300 rounded-2xl p-2 flex gap-3 mb-10">
          <button 
            onClick={() => setView('projects')}
            className={`${btnBase} ${view === 'projects' ? 'border-black bg-gray-50' : 'border-gray-300 hover:bg-gray-50'}`}
          >
            <HiCode size={24} className="mb-1" />
            <span className="text-sm font-medium">Projects</span>
          </button>

          <button 
            onClick={() => setView('certs')}
            className={`${btnBase} ${view === 'certs' ? 'border-black bg-gray-50' : 'border-gray-300 hover:bg-gray-50'}`}
          >
            <PiMedalFill size={24} className="mb-1" />
            <span className="text-sm font-medium">Certifications</span>
          </button>

          <button 
            onClick={() => setView('skills')}
            className={`${btnBase} ${view === 'skills' ? 'border-black bg-gray-50' : 'border-gray-300 hover:bg-gray-50'}`}
          >
            <TbLayersIntersect size={24} className="mb-1" />
            <span className="text-sm font-medium">Tech Stack</span>
          </button>
        </div>

        {/* 2. DYNAMIC GRID AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded-3xl p-5 flex flex-col">
              <div className="w-full aspect-video bg-black rounded-2xl mb-4"></div>
              
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-tight mb-6 flex-grow">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:underline">
                  Preview <HiArrowUpRight />
                </button>
                <button className="text-black text-sm font-medium flex items-center gap-1 hover:underline">
                  Details <HiArrowUpRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 3. SEE MORE BUTTON */}
        <div className="mt-10">
          <button className="px-6 py-2 border border-gray-400 rounded-xl text-orange-500 font-medium hover:bg-gray-50 transition-colors">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;