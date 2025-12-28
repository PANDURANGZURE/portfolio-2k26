import React from 'react'
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

function End() {
  return (
    <>
     <div className="flex justify-center items-center my-10 md:my-20 text-black">
        <p className="s text-black md:text-9xl text-5xl">Pandurang Zure</p>
    </div>
     <footer className="w-full  px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Section */}
        <p className="text-sm normal ">
          © 2026 <span className='bold'>India, All rights reserved by Pandurang Zure</span>
        </p>

        {/* Center Section */}
        <div className="flex flex-col items-center gap-4">
          <h2 className=" tracking-widest bold text-sm">
            SOCIAL LINKS
          </h2>

          <div className="flex items-center gap-6">
            <a href="https://github.com/PANDURANGZURE" className="hover:scale-110 transition">
              <Github size={26} />
            </a>
            <a href="https://www.linkedin.com/in/pandurang-santosh-zure-au3112/" className="hover:scale-110 transition">
              <Linkedin size={26} />
            </a>
            <a href="https://www.instagram.com/_anonymous_3112_/" className="hover:scale-110 transition">
              <Instagram size={26} />
            </a>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2  border border-[#1f1f1f] px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
          <span className="text-sm ">
            Available for new projects
          </span>
        </div>

      </div>
    </footer>
    </>
  )
}

export default End