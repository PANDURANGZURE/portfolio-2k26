import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../index.css'
import pic from '../assets/pic1.png'
import pic1 from '../assets/pic2.png'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Github, Linkedin,Instagram } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'



function Hero() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const arrowRef = useRef(null);
  const multiplier = 0.35;
  const boxRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: true,       // animate only once
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

    if (boxRef.current) {
      const tBox = gsap.to(boxRef.current, {
        x: 300,      // move right (to)
        y: -200,     // move up (to)
        ease: 'none',
        scrollTrigger: {
          trigger: boxRef.current,
          
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,  
          
        },
      });
      
      setTimeout(() => ScrollTrigger.refresh(), 50);
    } else {
      
    }


    const updateRotation = (scrollPos) => {
      const rotation = (scrollPos * multiplier) % 360;
      if (img1Ref.current) gsap.set(img1Ref.current, { rotation });
      if (img2Ref.current) gsap.set(img2Ref.current, { rotation: -rotation });
      if (arrowRef.current) gsap.set(arrowRef.current, { rotation });
    };

    const st = ScrollTrigger.create({
      onUpdate: (self) => updateRotation(self.scroll())
    });

  
    updateRotation(window.scrollY || 0);

    return () => {
      if (st && st.kill) st.kill();
    };
    
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return (
    <>
    <div   className='w-screen h-screen flex flex-col justify-center p-5 overflow-hidden    '>
    <div    className='flex justify-between mt-5'>
      <div className='flex items-center md:space-x-4'>
        <img
          ref={img1Ref}
          className='md:h-34 h-20 fade-scale slide-left '
          src={pic}
          alt="portrait 1"
          style={{ transform: 'rotate(0deg)', willChange: 'transform' }}
          
        />
        <img
          ref={img2Ref}
          className='md:h-34 h-20 fade-scale slide-right'
          src={pic1}
          alt="portrait 2"
          style={{ transform: 'rotate(0deg)', willChange: 'transform' }}
        />
      </div>
      <div ref={arrowRef} className='fade-scale' style={{ transform: 'rotate(0deg)', willChange: 'transform' }}>
        <a className='md:block hidden' href="mailto:pandurangzure3112@gmail.com"><MdOutlineArrowOutward className='md:text-9xl text-7xl hover:rotate-12' /></a>
      </div>
    </div>
    <div>
      <p data-aos="fade-right" className='bold md:text-xl mt-2 absolute'> Hello, <span className='normal text-orange-500'>I'm</span></p>
    <p data-aos="fade-up"  className='md:text-7xl text-4xl bold font-semibold  md:mt-5 mt-8'>Pandurang Zure. </p>
    </div>
    <div>
      <p data-aos="fade-right" className='bold md:text-xl  absolute '>I'm<span className='normal text-orange-500'> a</span></p>
    <p data-aos="fade-up" className='md:text-8xl text-5xl bold font-extrabold md:mt-3 mt-5 '>FRONTEND DEVLOPER </p>
    </div>
    <p data-aos="fade-left" className='bold  md:text-2xl  mt-5 '>Running on <span className=' normal font-extrabold text-2xl text-orange-500'>8 GB </span>RAM, fueled by unlimited ambition.</p>
    <div  className="flex text-center space-x-8 m-3 icons">
              <a data-aos="zoom-out" href="https://github.com/PANDURANGZURE" target="_blank" rel="noopener noreferrer" className="icon hover:text-gray-800 transition">
                <Github size={38} />
              </a>
              <a data-aos="zoom-out" href="https://www.linkedin.com/in/pandurang-santosh-zure-au3112/" target="_blank" rel="noopener noreferrer" className="icon hover:text-gray-800 transition">
                <Linkedin size={38} />
              </a>
              <a data-aos="zoom-out" href="https://www.instagram.com/_anonymous_3112_/" target="_blank" rel="noopener noreferrer" className="icon hover:text-gray-800 transition">
                <Instagram size={38} />
              </a>
            </div>
            {/* <Link to="/resume">
          <button className="mt-6 px-6 py-3 rounded-full bold border border-black font-bold hover:bg-black hover:text-white transition">
            Resume
          </button>
          </Link> */}
    <div className='flex justify-end text-right'>
      <p ref={boxRef} className='bold md:text-lg justify-end md:mt-16 mt-24 text-right slide-right pr-20 '>
        My <span  className=' text-orange-500'>goal</span> is to build websites that are not only functional and efficient <br/> but also engaging and intuitive.
        I pay close attention to design aesthetics and usability,<br/> ensuring that each project is both visually striking and seamless to navigate.
      </p>
    </div>
    </div>
    
    </>
  )
}

export default Hero