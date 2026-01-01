import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from './Line';
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const [result, setResult] = useState("");
  const boxRef = useRef(null);
  
  const tiltOptions = {
    tiltMaxAngleX: 12,
    tiltMaxAngleY: 12,
    perspective: 1000,
    scale: 1.05,
    glareEnable: true,
    glareMaxOpacity: 0.3,
    glareBorderRadius: "16px",
    transitionSpeed: 1500
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });

    // GSAP Responsive Animation
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Full movement
      gsap.to(boxRef.current, {
        x: 80,
        y: -60,
        ease: "power1.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 20%",
          end: "bottom 60%",
          scrub: 5,
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: Reduced movement to prevent horizontal scroll
      gsap.to(boxRef.current, {
        x: 20,
        y: -10,
        ease: "power1.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 20%",
          end: "bottom 60%",
          scrub: 2,
        },
      });
    });

    return () => mm.revert(); // Cleanup
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "126f7c4c-7273-41b5-918e-08af92771c91");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="overflow-x-hidden w-full">
      {/* Header Section */}
      <div data-aos="fade-up" className="flex flex-col items-center justify-center mt-14 w-full">
        <h2 ref={boxRef} className="text-4xl md:text-6xl bold font-bold text-center mb-3 mt-10">
          Connect with me
        </h2>
        <Line text="Contact" />
      </div>

      {/* Intro Text */}
      <div className="flex justify-center items-center px-6">
        <div className="md:w-[60%] w-full flex items-center font-extrabold justify-start mt-10 text-2xl md:text-3xl">
          <p data-aos="fade-right" className="text-left bold uppercase leading-tight">
            I'm open for freelance projects, feel free to <br className="hidden md:block" /> 
            email me to see how we can collaborate.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <form className="flex flex-col justify-center mt-10 items-center gap-y-8 px-6" onSubmit={onSubmit}>
        <div data-aos="fade-left" className="md:w-[60%]  w-full">
          <Tilt {...tiltOptions}>
            <p className="font-bold mb-2 bold">Email</p>
            <input 
              className="border border-black w-full rounded-lg h-12 p-3 hover:shadow-xl transition-shadow" 
              type="email" 
              name="email" 
              placeholder="your@email.com"
              required 
            />
          </Tilt>
        </div>

        <div data-aos="fade-right" className="md:w-[60%] w-full">
          <Tilt {...tiltOptions}>
            <p className="font-bold mb-2 bold">Message:</p>
            <textarea 
              name="message" 
              className="border border-black w-full p-3 rounded-lg min-h-[160px] hover:shadow-xl transition-shadow" 
              placeholder="How can I help you?"
              required
            ></textarea>
          </Tilt>
        </div>

        <button 
          className="bg-black text-white bold py-3 px-10 font-bold rounded-lg hover:bg-white hover:text-black border border-black transition-all duration-300 active:scale-95" 
          type="submit"
        >
          Submit
        </button>
        <span className="mt-2 font-medium bold">{result}</span>
      </form>

      {/* Footer Branding */}
      <div className="flex justify-center items-center px-4 pb-20">
        <div className="w-full flex flex-col items-center font-extrabold justify-center mt-20 text-center">
          <p data-aos="fade-right" className="uppercase text-2xl md:text-4xl mb-6">
            let's build something awesome together
          </p>
          <a data-aos="fade-left" href="mailto:pandurangzure3112@gmail.com" className="w-full">
            <p className="uppercase text-lg sm:text-2xl md:text-6xl title lg:text-7xl break-all md:break-normal">
              pandurangzure3112@gmail.com
            </p>
          </a>
          <div className="w-full mt-10">
            <Line text='Lets Build' />
          </div>
        </div>
      </div>
    </div>
  );
}