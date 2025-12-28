import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs"
import Cursor from './Cursor';



const ProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get current project data passed from the Link state
  const project = location.state?.item;

  // State to track which image is currently showing
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset the image index whenever the project ID changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [id]);

  if (!project) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">Project details not found.</h2>
        <button onClick={() => navigate('/projects')} className="mt-4 text-orange-500">
          Back to Projects
        </button>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <>
      <Cursor />
      <div className="max-w-7xl mx-auto p-6 md:p-12 animate-in fade-in duration-500">
        {/* Top Navigation */}
        <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
          <button 
            onClick={() => navigate(-1)} 
            className="border px-4 py-1 rounded-md hover:bg-gray-50 flex items-center gap-2 transition-colors"
          >
            <HiArrowLeft /> Back
          </button>
        </div>

        <span className='flex font-bold text-black text-lg mb-2 bold'>
          Projects <IoIosArrowForward className='text-2xl mt-1' /> 
          <span className='text-orange-500 bold ml-1'>{project.title}</span>
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Info */}
          <div>
            <h1 className="text-5xl font-bold bold mb-4">{project.title}</h1>
            <p className="text-gray-900 leading-relaxed normal mb-10 text-lg">
              {project.description || "description missing"}
            </p>

            {/* Stats Boxes */}
            <div className="flex gap-4 mb-10">
              <div className="border rounded-2xl p-4 flex items-center gap-4 flex-1">
                <div className="bg-gray-100 p-3 rounded-xl">&lt;/&gt;</div>
                <div>
                  <p className="text-xl font-bold">{project.tags?.length || 0}</p>
                  <p className="text-xs bold font-bold">Total Technologies</p>
                </div>
              </div>
              <div className="border rounded-2xl p-4 flex items-center gap-4 flex-1">
                <div className="bg-gray-100 p-3 rounded-xl"><BsCalendarDate/></div>
                <div>
                  <p className="text-xl font-bold">{project.date}</p>
                  <p className="text-xs bold font-bold">Made in Year</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-10">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border px-6 py-2 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all">
                <FaGithub /> Github
              </a>
              <a href={project.preview} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-xl font-bold hover:bg-gray-800 transition-all">
                <TbWorld /> Live Demo
              </a>
            </div>

            {/* Tech Used Chips */}
            <div>
              <p className="text-sm font-bold bold mb-3">&lt;/&gt; Technologies Used</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags?.map((tech, i) => (
                  <span key={i} className="border normal px-4 py-1 rounded-lg text-sm bg-gray-50 text-gray-700">
                    &lt;/&gt; {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Media & Features */}
          <div className="flex flex-col gap-6">
            <div className="relative group w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={project.images[currentIndex]} 
                alt={project.title} 
                className="w-full h-full  transition-all duration-700 ease-in-out" 
              />
              
              {project.images?.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <IoIosArrowBack size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <IoIosArrowForward size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails Gallery */}
            <div className="flex gap-3 overflow-x-auto py-2">
              {project.images?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all 
                    ${currentIndex === index ? 'border-orange-500 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`view-${index}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;