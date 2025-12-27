import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import Cursor from './Cursor';

const ProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data passed from the Link state, or fallback
  const project = location.state?.item;

  if (!project) return <div className="p-20 text-center">Project details not found.</div>;

  return (
    <>
    <Cursor/>
    <div className="max-w-7xl mx-auto p-6 md:p-12 font-sans animate-in fade-in duration-500">
      {/* Top Navigation */}
      <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
        <button onClick={() => navigate(-1)} className="border px-4 py-1 rounded-md hover:bg-gray-50 flex items-center gap-2">
          <HiArrowLeft /> Back
        </button>
        <span>Projects &gt; {project.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Info */}
        <div>
          <h1 className="text-5xl font-bold mb-4 underline decoration-4 underline-offset-8 decoration-black">
            {project.name}
          </h1>
          <p className="text-gray-700 leading-relaxed mb-10 text-lg">
            {project.description || "Detailed project breakdown and implementation summary goes here."}
          </p>

          {/* Stats Boxes */}
          <div className="flex gap-4 mb-10">
            <div className="border rounded-2xl p-4 flex items-center gap-4 flex-1">
              <div className="bg-gray-100 p-3 rounded-xl">&lt;/&gt;</div>
              <div>
                <p className="text-xl font-bold">{project.technologies?.length || 0}</p>
                <p className="text-xs text-gray-400">Total Technologies</p>
              </div>
            </div>
            <div className="border rounded-2xl p-4 flex items-center gap-4 flex-1">
              <div className="bg-gray-100 p-3 rounded-xl">☰</div>
              <div>
                <p className="text-xl font-bold">{project.features?.length || 0}</p>
                <p className="text-xs text-gray-400">Key Features</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <a href={project.github} className="flex items-center gap-2 border px-6 py-2 rounded-xl font-bold hover:bg-gray-50">
              <FaGithub /> Github
            </a>
            <a href={project.preview} className="flex items-center gap-2 border px-6 py-2 rounded-xl font-bold hover:bg-gray-50">
              <TbWorld /> Live Demo
            </a>
          </div>

          {/* Tech Used Chips */}
          <div>
            <p className="text-sm font-bold mb-3">&lt;/&gt; Technologies Used</p>
            <div className="flex gap-2 flex-wrap">
              {project.technologies?.map((tech, i) => (
                <span key={i} className="border px-4 py-1 rounded-lg text-sm bg-gray-50">&lt;/&gt; {tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Media & Features */}
        <div className="flex flex-col gap-8">
          <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          </div>

          <div className="border rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-4 text-gray-600">
              {project.features?.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold text-black">•</span> {feature}
                </li>
              )) || <li>No features listed for this project.</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectDetails;