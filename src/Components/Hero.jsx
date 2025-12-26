import React from 'react'
import '../index.css'
import pic from '../assets/pic1.png'
import pic1 from '../assets/pic2.png'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Github, Linkedin,Instagram } from 'lucide-react';


function Hero() {
  return (
    <>
    <div className='w-screen h-screen flex flex-col justify-center p-5   '>
    <div className='flex justify-between'>
      <div className='flex'>
      <img className='md:h-34 h-20' src={pic} alt="" />
      <img className='md:h-34 h-20' src={pic1} alt="" />
    </div>
      <div>
        <MdOutlineArrowOutward className='md:text-9xl text-7xl' />
      </div>
    </div>
    <div>
      <p className='bold text-xl mt-2 absolute'> Hello, <span className='normal text-orange-500'>I'm</span></p>
    <p className='md:text-7xl text-5xl bold  md:mt-5 mt-8'>PANDURANG ZURE </p>
    </div>
    <div>
      <p className='bold text-xl  absolute '>I'm<span className='normal text-orange-500'> a</span></p>
    <p  className='md:text-8xl text-5xl bold font-extrabold md:mt-3 mt-5'>FRONTEND DEVLOPER </p>
    </div>
    <p className='bold text-xl md:text-2xl  mt-5 '>Running on <span className=' normal font-extrabold text-2xl text-orange-500'>8 GB </span>RAM, fueled by unlimited ambition.</p>
    <div className="flex text-center space-x-8 m-3">
              <a href="https://github.com/PANDURANGZURE" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
                <Github size={38} />
              </a>
              <a href="https://www.linkedin.com/in/pandurang-santosh-zure-au3112/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
                <Linkedin size={38} />
              </a>
              <a href="https://www.instagram.com/_anonymous_3112_/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
                <Instagram size={38} />
              </a>
            </div>
    <div className='flex justify-end text-right'>
      <p className='bold md:text-lg justify-end mt-10 text-right '>
        My goal is to build websites that are not only functional and efficient <br/> but also engaging and intuitive.
        I pay close attention to design aesthetics and usability,<br/> ensuring that each project is both visually striking and seamless to navigate.
      </p>
    </div>
    </div>
    
    </>
  )
}

export default Hero