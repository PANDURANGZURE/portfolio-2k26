import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return createPortal(
    
        <CiLocationArrow1
      ref={cursorRef}
      className="fixed top-0 left-0 text-3xl scale-x-[-1] z-[9999] hidden md:block pointer-events-none   text-black"
    />
    ,
    document.body
  );
}
