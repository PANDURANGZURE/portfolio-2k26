import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
        AOS.init({
          duration: 1000,   // animation duration
          once: true,       // animate only once
          easing: "ease-in-out",
        });
      }, []);
  return (
    <>
    <div data-aos="fade-up" className='flex fixed top-0 justify-between w-screen px-20 py-5  z-50 no-mouse '>
        <div data-aos="fade-right" className='font-bold text-3xl s '>Pandurang Zure</div>
        <div>
            <div data-aos="fade-left" className="flex items-center gap-2 backdrop-blur-2xl  border border-[#1f1f1f] px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
          <span className="text-sm ">
            Available for new projects
          </span>
        </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Header