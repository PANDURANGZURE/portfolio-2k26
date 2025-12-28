import React from "react";

function Loader() {
  return (
    <div className="absolute inset-0 w-screen h-screen overflow-hidden  flex items-center justify-center bg-black z-50">
      <div className="flex s text-5xl  text-white">
        {"Pandurang Zure".split("").map((char, i) => (
          <span
            key={i}
            className="animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Loader;
