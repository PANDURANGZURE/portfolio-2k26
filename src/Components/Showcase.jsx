import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./Line";
import { HiCode } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';
import { PiMedalFill } from 'react-icons/pi';
import { TbLayersIntersect } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

function Showcase() {
  const [view, setView] = useState('projects'); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const boxRef = useRef(null);

  const btnBase = "flex-1 flex flex-col items-center justify-center py-4 px-2 border rounded-xl transition-all duration-300";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let endpoint = '';
      
      // Setting endpoints from your provided links
      if (view === 'projects') endpoint = 'https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/project-api.json';
      if (view === 'certs') endpoint = 'https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/Certificates.json';
      if (view === 'skills') endpoint = 'https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/skills.json';

      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        
        // Ensure we are setting an array even if the API structure varies
        setData(Array.isArray(result) ? result : result.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [view]);

  useEffect(() => {
    const anim = gsap.to(boxRef.current, {
      x: 40,
      y: -20,
      ease: "power1.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 25%",
        end: "bottom 60%",
        scrub: 2,
      },
    });
    return () => anim.kill();
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <p ref={boxRef} className="text-3xl md:text-6xl md:mt-14 font-bold text-center">
        Portfolio Showcase
      </p>
      
      <p className="text-center font-bold mt-5 md:text-xl px-4">
        Explore my journey through <span className="text-orange-500">projects</span>, 
        <span className="text-orange-500"> certifications</span> and 
        <span className="text-orange-500"> technical expertise</span>.
      </p>

      <Line text='Showcase'/>

      <div className="max-w-6xl mx-auto p-6 font-sans text-black">
        
        {/* Navigation Buttons */}
        <div className="border border-gray-300 rounded-2xl p-2 flex gap-3 mb-10">
          <button onClick={() => setView('projects')} className={`${btnBase} ${view === 'projects' ? 'border-black bg-gray-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <HiCode size={24} className="mb-1" />
            <span className="text-sm font-medium">Projects</span>
          </button>

          <button onClick={() => setView('certs')} className={`${btnBase} ${view === 'certs' ? 'border-black bg-gray-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <PiMedalFill size={24} className="mb-1" />
            <span className="text-sm font-medium">Certifications</span>
          </button>

          <button onClick={() => setView('skills')} className={`${btnBase} ${view === 'skills' ? 'border-black bg-gray-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <TbLayersIntersect size={24} className="mb-1" />
            <span className="text-sm font-medium">Tech Stack</span>
          </button>
        </div>

        {/* Dynamic Grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-400 animate-pulse">Loading data...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, idx) => (
              <div key={idx} className="border border-gray-300 rounded-3xl p-5 flex flex-col hover:shadow-lg transition-shadow">
                {/* Image using URL from JSON */}
                <div className="w-full aspect-video bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                  <img 
                    src={item.image || item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x225?text=No+Image"; }}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{item.name || item.title}</h3>
                <p className="text-sm text-gray-700 leading-tight mb-6 flex-grow">
                  {item.description || item.desc || "A showcase of technical excellence and continuous improvement."}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <a href={item.preview || item.link} target="_blank" rel="noreferrer" className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:underline">
                    Preview <HiArrowUpRight />
                  </a>
                  <a href={item.details || item.github} target="_blank" rel="noreferrer" className="text-black text-sm font-medium flex items-center gap-1 hover:underline">
                    Details <HiArrowUpRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

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