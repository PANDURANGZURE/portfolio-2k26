import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from './Line'
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

  //aos
    useEffect(() => {
        AOS.init({
          duration: 2000,   // animation duration
          once: true,       // animate only once
          easing: "ease-in-out",
        });
      }, []);
  

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
    <> 
    <div data-aos="fade-up" className="overflow-hidden flex flex-col items-center justify-center mt-14 w-screen">
            <h2 ref={boxRef} className="text-4xl md:text-6xl bold font-bold text-center mb-3 mt-10 "> Connect with me</h2>
            <Line text="Contact" />
            
        </div>
        <div className="flex justify-center items-center">
            <div className="w-[60%] flex items-center  bold font-extrabold justify-start mt-10 text-3xl">
            <p data-aos="fade-right" className="text-left uppercase">I'm open for freelance projects, feel free to <br />email me to see how can we collaborate.</p>
        </div>
        </div>
        
    <form className="flex flex-col justify-center mt-10 items-center gap-y-10" onSubmit={onSubmit}>
        <div data-aos="fade-left" className="md:w-[60%] w-[80%]"><Tilt {...tiltOptions} data-aos="fade-left" ><p  className="bold">Email</p><input className="border hover:shadow-black hover:shadow-2xl border-black w-full  rounded-lg h-10 p-2" type="text" name="name" required/></Tilt></div>
      <div data-aos="fade-right" className="md:w-[60%] w-[80%]">
        <Tilt data-aos="fade-right" {...tiltOptions} >
        <p className="bold">Message:</p>
        <textarea name="message" className="border hover:shadow-black hover:shadow-2xl border-black w-full p-2 rounded-lg min-h-40" required></textarea></Tilt>
      </div>
      
      <button className="bg-black text-white py-3 px-8 bold rounded-lg hover:bg-white hover:text-black hover:border hover:border-black" type="submit">Submit</button>
      <span>{result}</span>
    </form>
    <div className="flex justify-center items-center">
        <div className="w-screen flex flex-col items-center   font-extrabold justify-center mt-10 ">
            <p data-aos="fade-right" className=" uppercase text-4xl bold mb-10">let's build something awesome together</p>
            {/* <Line text='Lets Build'/> */}
            <a data-aos="fade-left" href="mailto:pandurangzure3112@gmail.com"><p className=" uppercase   md:text-7xl">pandurangzure3112@gmail.com</p></a>
            <Line  text='Lets Build'/>
        </div>
    </div>
   
    </>
  );
}