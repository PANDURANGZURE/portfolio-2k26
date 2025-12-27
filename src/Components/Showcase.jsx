import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiCode } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';
import { PiMedalFill } from 'react-icons/pi'; 
import { TbLayersIntersect } from 'react-icons/tb';
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineReadMore } from "react-icons/md";
import Line from "./Line"

gsap.registerPlugin(ScrollTrigger);

// --- SUB-COMPONENTS ---

const ProjectCard = ({ item }) => (
  <div className="border border-gray-300 rounded-3xl p-5 flex flex-col hover:animate-pulse  hover:shadow-2xl transition-shadow bg-white">
    <div className="w-full aspect-video bg-gray-100 rounded-2xl mb-4 overflow-hidden">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover " />
    </div>
    <h3 className="text-xl font-bold bold mb-2">{item.title}</h3>
    <p className="text-sm text-gray-700 leading-tight mb-6 normal flex-grow">{item.description}</p>
    <div className="flex justify-between items-center mt-auto">
      <a href={item.preview || item.link} target="_blank" rel="noreferrer" className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:underline">
        Preview <FiExternalLink/>
      </a>
      <a href={item.details || item.github} target="_blank" rel="noreferrer" className="text-black text-sm font-medium flex items-center gap-1 hover:underline">
        Details <MdOutlineReadMore size={30} />
      </a>
    </div>
  </div>
);

const CertificateCard = ({ item }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-full rounded-lg shadow-md bg-[#1a1a1a] hover:shadow-2xl overflow-hidden mb-4 border border-gray-800 aspect-[4/3]">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <h3 className="text-lg md:text-xl font-bold bold text-gray-900 leading-tight px-2">{item.title}</h3>
    <p className="text-md font-medium mt-1 text-gray-500 uppercase normal tracking-wide">{item.issuer}</p>
  </div>
);

const SkillCard = ({ item }) => (
  <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-2xl  hover:shadow-2xl  hover:bg-gray-50 transition-all group aspect-square bg-white shadow-sm">
    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:rotate-12 transition-all duration-300">
      <img 
        src={item.image} 
        alt={item.name || "skill"} 
        className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform" 
        onError={(e) => e.target.src = "https://via.placeholder.com/50?text=Logo"}
      />
    </div>
    <span className="text-[10px] md:text-xs font-bold mt-3 text-black bold group-hover:text-black uppercase tracking-wider text-center">
      {item.name}
    </span>
  </div>
);

// --- MAIN COMPONENT ---

function Showcase() {
  const [view, setView] = useState('projects'); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const boxRef = useRef(null);

  const fixUrl = (url) => {
    if (!url) return "";
    return url.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
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
    const fetchData = async () => {
      setLoading(true);
      setData([]);
      setVisibleCount(6);
      
      const endpoints = {
        projects: 'https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/project-api.json',
        certs: 'https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/Certificates.json',
        skills: 'https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/skills.json'
      };

      try {
        const response = await fetch(endpoints[view]);
        const result = await response.json();
        
        let rawArray = [];

        // 1. Handle Certificates (Only "My" key)
        if (view === 'certs') {
          rawArray = result.My || [];
        } 
        // 2. Handle Skills and Projects with "Super-Detection"
        else {
          if (Array.isArray(result)) {
            rawArray = result;
          } else {
            // This finds ANY array inside your JSON object (e.g., result.skills, result.data)
            const arrayKey = Object.keys(result).find(k => Array.isArray(result[k]));
            rawArray = arrayKey ? result[arrayKey] : [];
          }
        }

        const formatted = rawArray.map(item => ({
          ...item,
          image: fixUrl(item.image || item.icon || item.img)
        }));

        setData(formatted);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [view]);

  const btnBase = "flex-1 flex flex-col items-center justify-center py-4 px-2 border rounded-xl transition-all duration-300 active:scale-95";

  return (
    <div className="min-h-screen bg-white pb-20 pt-10 px-4 overflow-hidden">
      <div className=" mx-auto">
        <h2 ref={boxRef} className="text-4xl md:text-6xl bold font-bold text-center mb-3 ">Portfolio Showcase</h2>
        <p className="text-lg md:text-xl text-center leading-relaxed bold text-black mb-">Explore my journey through <span className="text-orange-500">projects</span> , <span className="text-orange-500">certifications</span> and <span className="text-orange-500">technical expertise.</span> <br /> Each section represents a milestone in my continuous learning path.</p>
        <Line text="Showcase" />
        {/* Navigation */}
        <div className="border mt-3 border-gray-300 rounded-2xl p-2 flex gap-3 mb-10 max-w-6xl  mx-auto bg-white shadow-sm">
          <button onClick={() => setView('projects')} className={`${btnBase} ${view === 'projects' ? 'border-black bg-gray-50' : 'border-transparent text-gray-400'}`}>
            <HiCode size={24} className="mb-1" />
            <span className="text-sm font-semibold">Projects</span>
          </button>
          <button onClick={() => setView('certs')} className={`${btnBase} ${view === 'certs' ? 'border-black bg-gray-50' : 'border-transparent text-gray-400'}`}>
            <PiMedalFill size={24} className="mb-1" />
            <span className="text-sm font-semibold">Certificates</span>
          </button>
          <button onClick={() => setView('skills')} className={`${btnBase} ${view === 'skills' ? 'border-black bg-gray-50' : 'border-transparent text-gray-400'}`}>
            <TbLayersIntersect size={24} className="mb-1" />
            <span className="text-sm font-semibold">Tech Stack</span>
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-20 text-gray-400 animate-pulse max-w-6xl">Loading {view}...</div>
        ) : data.length === 0 ? (
          <div className="text-center py-20 text-red-500 font-medium">No data found in {view}.json</div>
        ) : (
          <div className={`grid gap-6 max-w-6xl mx-auto ${view === 'skills' ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {(view === 'skills' ? data : data.slice(0, visibleCount)).map((item, idx) => (
              view === 'projects' ? <ProjectCard key={idx} item={item} /> :
              view === 'certs' ? <CertificateCard key={idx} item={item} /> :
              <SkillCard key={idx} item={item} />
            ))}
          </div>
        )}

        {/* Actions */}
        {!loading && view !== 'skills' && data.length > 6 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setVisibleCount(visibleCount >= data.length ? 6 : data.length)}
              className="px-10 py-3 border-2 border-black rounded-xl font-bold transition-all hover:bg-black hover:text-white active:scale-95"
            >
              {visibleCount >= data.length ? 'Show less' : 'View more'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Showcase;