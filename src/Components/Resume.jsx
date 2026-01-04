import React, { useEffect, useState } from 'react';
import { FaDownload, FaSave, FaAddressBook } from "react-icons/fa";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Header';
import End from './End';

function Resume() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState({}); // Changed to object to match your JSON
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const projectsApi = "https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/project-api.json";
    const skillsApi = "https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/skills.json"; 

    setLoading(true);

    Promise.all([
      fetch(projectsApi).then(res => res.ok ? res.json() : []),
      fetch(skillsApi).then(res => res.ok ? res.json() : {})
    ])
      .then(([projectsData, skillsData]) => {
        setProjects(Array.isArray(projectsData) ? projectsData : (projectsData.projects || []));
        setSkills(skillsData); // Store the object directly
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  return (
    <>
    <Header/>
      {/* Action Buttons */}

      <div className=' mt-40 md:p-0 '>
        <div id='top' className='md:flex justify-between flex-wrap p-3'>
          <div data-aos="fade-up" className='md:ml-10 text-center md:text-left'>
            <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl bold text-black'>Pandurang Zure</h1>
            <p className='font-normal text-xs md:text-base lg:text-lg bold text-gray-800 mt-3'>UI/UX, Front-End Developer</p>
          </div>
          <div className='flex flex-col items-start'>
            <a href="https://github.com/PANDURANGZURE" className="hover:scale-110 transition flex justify-center ">
              <Github size={26} /><p className='ml-3 '>https://github.com/PANDURANGZURE</p>
            </a>
            <a href="https://www.linkedin.com/in/pandurang-santosh-zure-au3112/" className="hover:scale-110 transition flex justify-center ">
              <Linkedin size={26} /><p className='ml-3'>https://www.linkedin.com/in/pandurang-santosh-zure-au3112/</p>
            </a>
            <a href="https://www.instagram.com/_anonymous_3112_/" className="hover:scale-110 transition flex justify-center ">
              <Instagram size={26} /><p className='ml-3'>https://www.instagram.com/_anonymous_3112_/</p>
            </a>
            
          </div>
        </div>

        <hr data-aos="fade-up" className='mt-3 text-gray-800 border-gray-800' />

        <div className="container mx-auto px-4 py-4">
          <div className="max-w-5xl mx-auto p-6  rounded-lg font-sans grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Section - Education & Skills */}
            <div className="md:col-span-1">
              <section className="mt-6">
                <h2 data-aos="fade-up" className="text-xl md:text-2xl font-semibold border-b bold border-gray-700 pb-2">Education</h2>
                <div data-aos="fade-up" className="mt-3 text-sm">
                  <h3 className="font-medium text-black">SSC (10th)</h3>
                  <p className="text-gray-600bb">S.S English Medium School, 2021-22</p>
                  <p className="text-gray-500">Marks: 79.80%</p>
                </div>
                <div data-aos="fade-up" className="mt-4 text-sm">
                  <h3 className="font-medium text-black">Diploma in CS</h3>
                  <p className="text-gray-600bb">Ajeenkya D Y Patil University, 2022-25</p>
                  <p className="text-gray-500">Marks: 83.71%</p>
                </div>
                <div data-aos="fade-up" className="mt-4 text-sm">
                  <h3 className="font-medium text-black">BTech in CE</h3>
                  <p className="text-gray-600bb">G.H. Raisoni University, 2025-28</p>
                  <p className="text-gray-500">Status: Pursuing</p>
                </div>
              </section>

              {/* Technologies Section */}
              <section className="mt-6 bold">
                <h2 data-aos="fade-up" className="text-xl bold md:text-2xl font-semibold border-b border-gray-700 pb-2">Technologies</h2>
                <div className="flex flex-col mt-3">
                  {loading ? (
                    <p className="text-gray-500 text-sm italic">Loading skills...</p>
                  ) : error ? (
                    <p className="text-red-400 text-sm italic">{error}</p>
                  ) : Object.keys(skills).length > 0 ? (
                    Object.keys(skills).map((category) => (
                      <div key={category} className="mb-4">
                        <h4 data-aos="fade-up" className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                          {category}
                        </h4>
                        <div className="space-y-2">
                          {skills[category].map((skill, index) => (
                            <div data-aos="fade-up" key={index} className="flex items-center justify-between px-2 py-1 hover:border-2 rounded transition-colors group">
                              <span className='text-gray-800 text-sm '>{skill.name}</span>
                              <img src={skill.img} alt={skill.name} className="w-5 h-5 object-contain" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600 text-sm">No skills found.</p>
                  )}
                </div>
              </section>
            </div>

            {/* Right Section - Projects */}
            <div className="md:col-span-2">
              <section className="mt-6">
                <h2 data-aos="fade-up" className="text-xl md:text-2xl bold font-semibold border-b border-gray-700 pb-2">Projects</h2>
                <div className="mt-3 text-sm">
                  {loading ? (
                    <p className="text-gray-500 italic">Loading projects...</p>
                  ) : projects.length > 0 ? (
                    projects.slice(0, 7).map((project, index) => (
                      <div data-aos="fade-up" key={index} className="mb-6">
                        <h3 className="font-medium text-xl text-black">
                        {project.name} <span className='text-lg md:text-xl text-black font-bold bold ml-1'>{project.title}</span>
                        </h3>
                        <p className="text-gray-800 text-xs mt-1">
                          <span className='text-gray-600bb font-semibold'>Stack:</span> {Array.isArray(project.tags) ? project.tags.join(", ") : "N/A"} 
                        </p>
                        <p className="text-gray-600bb mt-2 leading-relaxed">
                          {project.description}
                        </p>
                        <a href={project.link}>
                            <p className="text-black hover:underline mt-2 leading-relaxed">
                          <b>Link: </b>{project.link}
                        </p>
                        </a>
                        <a href={project.github}>
                            <p className="text-black hover:underline mt-2 leading-relaxed">
                          <b>Github: </b>{project.github}
                        </p>
                        </a>
                        <hr className='mt-4 border-gray-800' />
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No projects to display.</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <End/>
    </>
  );
}

export default Resume;