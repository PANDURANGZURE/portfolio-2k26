import React from 'react';

const SkillCard = ({ item }) => (
  <div className="border border-gray-300 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-gray-50 transition-colors">
    <div className="w-20 h-20 mb-4">
      <img 
        src={item.icon || item.image} 
        alt={item.name} 
        className="w-full h-full object-contain" 
      />
    </div>
    <h3 className="text-lg font-bold">{item.name}</h3>
    {/* <p className="text-sm text-gray-500">{item.level || "Technical Skill"}</p> */}
  </div>
);

export default SkillCard;