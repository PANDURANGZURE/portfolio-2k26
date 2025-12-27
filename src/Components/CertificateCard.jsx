import React from 'react';

const CertificateCard = ({ item }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-full rounded-lg shadow-md bg-[#1a1a1a] overflow-hidden mb-4">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 leading-tight">{item.title}</h3>
    <p className="text-lg text-gray-500 font-medium mt-1">{item.issuer}</p>
  </div>
);

export default CertificateCard;