import React from 'react';
import { Github, Linkedin,Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-[#181818] to-black text-white py-10 shadow-inner z-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-cyan-200">PANDURANG ZURE<span className="text-white">.</span></h2>
          <p className="text-sm text-gray-400 mt-2">
            Made with efforts and <span className="text-red-500">❤️</span> by <span className="text-cyan-400 font-medium">Panduarang Zure</span>
          </p>
        </div>

        <div className="flex text-center space-x-6">
          <a href="https://github.com/PANDURANGZURE" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/pandurang-santosh-zure-au3112/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Linkedin size={22} />
          </a>
          <a href="https://www.instagram.com/_anonymous_3112_/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            <Instagram size={22} />
          </a>
        </div>

        <div className="text-xs text-gray-500 text-center md:text-right">
          &copy; Panduarang Zure 2026
        </div>
      </div>
    </footer>
  );
}

export default Footer;