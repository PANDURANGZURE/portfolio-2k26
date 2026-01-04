import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from './Line';
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const stats = [
    { 
        img :"https://pandurang-2k25.netlify.app/assets/mvm-YIGxW4WQ.png",
        name: "M.V.M. Educational Campus",
        location: "Andheri, Mumbai",
        desc: "Completed classes 1st to 9th at M.V.M Educational Campus in Mumbai.",
        year: '2012 - 2021', 
    },
    {
        img :"https://pandurang-2k25.netlify.app/assets/ss-JyNiAYdY.png",
        name: "S.S English Medium School",
        location: "Vishrantwadi, Pune",
        desc: "Done my class 10th in Pune at SS English Medium School.",
        year: '2021 - 2022', 
    },
    {
        img :"https://pandurang-2k25.netlify.app/assets/adypu-tGrykxe3.png",
        name: "Ajeenkya D Y Patil School of Engineering",
        location: "Lohegaon, Pune",
        desc: "Achieved a Diploma with distinction, securing an aggregate of 83.71%.",
        year: '2022 - 2025', 
    },
    {
        img :"https://github.com/PANDURANGZURE/project-img/blob/main/gh%20raisoni.png?raw=true",
        name: "G.H.Raisoni Skill Tech University",
        location: "Yerwada, Pune",
        desc: "Currently Pursuing BTech in Computer Engineering.",
        year: '2025 - 2028', 
    },
];

function Education() {
    const boxRef = useRef(null);
  
    const tiltOptions = {
        tiltMaxAngleX: 10,
        tiltMaxAngleY: 10,
        perspective: 1000,
        scale: 1.02,
        glareEnable: true,
        glareMaxOpacity: 0.2,
        transitionSpeed: 1500
    };

    useEffect(() => {
        // 1. AOS Init
        AOS.init({
            duration: 1000,
            once: true,
        });

        // 2. GSAP Animation
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.to(boxRef.current, {
                x: 80, // Move right
                y: -60, // Move up
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: "top bottom", 
                    end: "bottom top",
                    scrub: 1, // Smoothly follows scroll
                    invalidateOnRefresh: true, // Recalculates if window resizes
                },
            });
        });

        // Mobile: Vertical only to keep scroll "easy"
        mm.add("(max-width: 767px)", () => {
            gsap.to(boxRef.current, {
                y: -15,
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });

        return () => {
            mm.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="relative w-full overflow-clip">
            <div data-aos="fade-up" className="flex flex-col items-center justify-center mt-14 w-full">
                <h2 
                    ref={boxRef} 
                    className="text-4xl md:text-6xl font-bold bold text-center mb-3 mt-10 will-change-transform"
                >
                    Academic Journey
                </h2>
                <Line text="Education" />
            </div>

            <section className="w-full px-4 py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stats.map((item, index) => (
                        <Tilt key={index} {...tiltOptions}>
                            <div
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group relative overflow-hidden rounded-2xl flex flex-col md:flex-row border border-black bg-white transition-all duration-500 shadow-sm"
                            >
                                {/* Image Section */}
                                <div className="relative shrink-0 w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="relative flex-1 p-6">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <h3 className="text-black bold text-xl font-bold leading-tight">
                                            {item.name}
                                        </h3>
                                        <span className="text-[10px] normal bg-black text-white px-3 py-1 rounded-full whitespace-nowrap">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="mt-1 bold text-gray-800 text-sm font-semibold">
                                        {item.location}
                                    </p>
                                    <div className="mt-4 pl-4 border-l-2 border-gray-900">
                                        <p className="text-gray-900 title text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Education;