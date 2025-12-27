import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

const ProjectCard = ({ item }) => (
  <div className="border border-gray-300 rounded-3xl p-5 flex flex-col hover:shadow-lg transition-shadow bg-white">
    <div className="w-full aspect-video bg-gray-100 rounded-2xl mb-4 overflow-hidden">
      <img 
        src={item.image || item.img} 
        alt={item.name} 
        className="w-full h-full object-cover" 
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
    <p className="text-sm text-gray-700 leading-tight mb-6 flex-grow">{item.description || item.desc}</p>
    <div className="flex justify-between items-center mt-auto">
      <a href={item.preview || item.link} target="_blank" rel="noreferrer" className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:underline">
        Preview <HiArrowUpRight />
      </a>
      <a href={item.details || item.github} target="_blank" rel="noreferrer" className="text-black text-sm font-medium flex items-center gap-1 hover:underline">
        Details <HiArrowUpRight />
      </a>
    </div>
  </div>
);

export default ProjectCard;