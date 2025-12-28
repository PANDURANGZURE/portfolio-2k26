import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from './Line'
import img from '../assets/achiv.png'

gsap.registerPlugin(ScrollTrigger);

function Achivements() {
    const boxRef = useRef(null);

    useEffect(() => {
    gsap.to(boxRef.current, {
      x: 80,
      y: -60,
      ease: "power1.out",
      force3D: true,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 20%",
        end: "bottom 60%",
        scrub: 5,
      },
    });
  }, []);

  return (
    <>
    <>
    <div>
        <div className="overflow-hidden">
        <h2 ref={boxRef} className="text-4xl md:text-6xl bold font-bold text-center mb-3 mt-10 "> Recognized for skills and efforts</h2>
                <p className="text-lg md:text-xl text-center leading-relaxed bold text-black mt-5">A distinguished achievement representing top-tier performance within the <span className="text-orange-500">district</span>. <br />
                 This recognition honors exceptional technical skill and leadership, awarded for outperforming a broad field of regional <br />competitors through innovative problem-solving and dedicated effort. <span className="text-orange-500">For Project Agro-Connect</span></p>
                <Line text="Achivements" />
    </div>
    {/* img */}
    <div className="flex flex-col justify-center items-center mt-10">
        
        <div className="hover:border-2 w-[80%]  rounded-2xl flex flex-col hover:shadow-2xl hover:scale-110 transition  ">
            <p className="text-left font-semibold md:text-2xl bold m-2">Nirmitivedh </p>
            <img className="rounded-2xl h-[80%]" src="https://github.com/PANDURANGZURE/project-img/blob/main/assets/certificates/nirmitived%20winner.jpg?raw=true" alt="" />
        </div>


        <div className="flex justify-center items-center md:flex-row flex-col gap-8 mt-10">
            <div className="hover:border-2  md:w-[39%] w-[80%] shadow-2xl hover:scale-105 transition rounded-2xl flex flex-col ">
            <p className="text-left font-semibold md:text-2xl bold m-2">Nirmitivedh </p>
            <img className="rounded-2xl " src="https://media.licdn.com/dms/image/v2/D4D22AQFZK3ADstE0AA/feedshare-shrink_2048_1536/B4DZXtXBroHsAo-/0/1743443995185?e=1768435200&v=beta&t=qBOGpqsjgpXK_kIya7MCW0AYXTWQG1g0YaHDjHBaqYM" alt="" />
        </div><div className="hover:border-2 md:w-[39%] w-[80%] shadow-2xl hover:scale-105 transition  rounded-2xl flex flex-col ">
            <p className="text-left font-semibold md:text-2xl bold m-2">TechFusion </p>
            <img className="rounded-2xl h-full" src={img} alt="" />
        </div>
        </div>
    </div>
    </div>
    </>
    
    </>
  )
}

export default Achivements