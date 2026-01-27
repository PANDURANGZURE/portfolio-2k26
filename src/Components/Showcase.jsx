import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiCode } from "react-icons/hi";
import { PiMedalFill } from "react-icons/pi";
import { TbLayersIntersect } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import Line from "./Line";

gsap.registerPlugin(ScrollTrigger);

// ---------------- CONSTANTS ----------------

const tiltOptions = {
  tiltMaxAngleX: 12,
  tiltMaxAngleY: 12,
  perspective: 1000,
  scale: 1.05,
  glareEnable: true,
  glareMaxOpacity: 0.3,
  glareBorderRadius: "16px",
  transitionSpeed: 1500,
};

const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "vscode", label: "VS Code Extension" },
  { id: "react", label: "React JS" },
  { id: "next", label: "Next.js" },
  { id: "tailwind", label: "Tailwind CSS" },
  
];

// Normalize API tags
const normalizeTag = (tag = "") => {
  const t = tag.toLowerCase();
  if (t.includes("react")) return "react";
  if (t.includes("next")) return "next";
  if (t.includes("tailwind")) return "tailwind";
  if (t.includes("vsce") || t.includes("vscode")) return "vscode";
  return null;
};

// ---------------- CARDS ----------------

const ProjectCard = ({ item }) => (
  <Tilt {...tiltOptions}>
    <div
      data-aos="fade-up"
      className="border border-gray-300 rounded-3xl p-5 flex flex-col bg-white hover:shadow-2xl transition-all"
    >
      <Link
        to={`/project/${item?.title?.toLowerCase().replace(/\s+/g, "-")}`}
        state={{ item }}
      >
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{item.date}</p>
        <p className="text-sm text-gray-700 mb-6">{item.description}</p>
      </Link>

      <div className="flex justify-between items-center mt-auto">
        <a
          href={item.preview || item.link}
          target="_blank"
          rel="noreferrer"
          className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:underline"
        >
          Preview <FiExternalLink />
        </a>

        <Link
          to={`/project/${item?.title?.toLowerCase().replace(/\s+/g, "-")}`}
          state={{ item }}
          className="text-black text-sm font-semibold hover:underline"
        >
          Details
        </Link>
      </div>
    </div>
  </Tilt>
);

const CertificateCard = ({ item }) => (
  <Tilt {...tiltOptions}>
    <div data-aos="fade-right" className="text-center">
      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-4">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p className="text-sm text-gray-500 uppercase">{item.issuer}</p>
    </div>
  </Tilt>
);

const SkillCard = ({ item }) => (
  <Tilt {...tiltOptions}>
    <div
      data-aos="fade-left"
      className="border rounded-2xl p-4 flex flex-col items-center bg-white hover:shadow-2xl transition-all"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 md:w-16 md:h-16 object-contain"
        onError={(e) => (e.target.src = "https://via.placeholder.com/50")}
      />
      <span className="mt-3 text-xs font-bold uppercase">{item.name}</span>
    </div>
  </Tilt>
);

// ---------------- MAIN COMPONENT ----------------

function Showcase() {
  const [view, setView] = useState("projects");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeFilter, setActiveFilter] = useState("all");
  const boxRef = useRef(null);

  // AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // GSAP
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 80,
      y: -60,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 20%",
        end: "bottom 60%",
        scrub: 5,
      },
    });
  }, []);

  const fixUrl = (url) =>
    url
      ? url.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/")
      : "";

  // FETCH DATA
  useEffect(() => {
    setLoading(true);
    setVisibleCount(6);
    setActiveFilter("all");

    const endpoints = {
      projects:
        "https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/project-api.json",
      certs:
        "https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/Certificates.json",
      skills:
        "https://raw.githubusercontent.com/PANDURANGZURE/api-project/refs/heads/main/skills.json",
    };

    fetch(endpoints[view])
      .then((res) => res.json())
      .then((result) => {
        let arr = [];

        if (view === "certs") arr = result.My || [];
        else if (Array.isArray(result)) arr = result;
        else {
          const key = Object.keys(result).find((k) => Array.isArray(result[k]));
          arr = key ? result[key] : [];
        }

        setData(
          arr.map((item) => ({
            ...item,
            image: fixUrl(item.image || item.icon || item.img),
          }))
        );
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [view]);

  // RESET COUNT ON FILTER CHANGE
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  // FILTER PROJECTS
  const filteredProjects =
    activeFilter === "all"
      ? data
      : data.filter(
          (item) =>
            Array.isArray(item.tags) &&
            item.tags.map(normalizeTag).includes(activeFilter)
        );

  return (
    <div className="min-h-screen bg-white px-4 pt-10 pb-20">
      <h2 ref={boxRef} className="text-4xl md:text-6xl font-bold bold text-center mb-4">
        Portfolio Showcase
      </h2>

      <p className="text-center text-xl bold mb-6">Explore my journey through <span className="text-orange-500"> projects</span> , <span className="text-orange-500">certifications </span>and <span className="text-orange-500">technical expertise </span>. <br />
Each section represents a milestone in my continuous learning path.</p>
      <Line  text="Showcase" />

      {/* NAVIGATION */}
      <div className="border mt-6 border-black rounded-2xl p-2 flex gap-3 mb-10 max-w-6xl mx-auto bg-white shadow-sm">
        <NavBtn icon={HiCode} label="Projects" active={view === "projects"} onClick={() => setView("projects")} />
        <NavBtn icon={PiMedalFill} label="Certificates" active={view === "certs"} onClick={() => setView("certs")} />
        <NavBtn icon={TbLayersIntersect} label="Tech Stack" active={view === "skills"} onClick={() => setView("skills")} />
      </div>

      {/* PROJECT FILTERS */}
      {view === "projects" && (
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl border font-semibold transition ${
                activeFilter === f.id
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {/* CONTENT */}
      {loading ? (
        <p className="text-center py-20">Loading...</p>
      ) : (
        <div
          className={`grid gap-6 max-w-6xl mx-auto ${
            view === "skills"
              ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {(view === "projects" ? filteredProjects.slice(0, visibleCount) : data).map(
            (item, i) =>
              view === "projects" ? (
                <ProjectCard key={i} item={item} />
              ) : view === "certs" ? (
                <CertificateCard key={i} item={item} />
              ) : (
                <SkillCard key={i} item={item} />
              )
          )}
        </div>
      )}

      {/* VIEW MORE */}
      {view === "projects" && filteredProjects.length > 6 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() =>
              setVisibleCount(
                visibleCount >= filteredProjects.length ? 6 : filteredProjects.length
              )
            }
            className="px-10 py-3 border-2 border-black rounded-xl font-bold hover:bg-black hover:text-white transition"
          >
            {visibleCount >= filteredProjects.length ? "Show less" : "View more"}
          </button>
        </div>
      )}
    </div>
  );
}

const NavBtn = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 flex flex-col items-center justify-center py-4 rounded-xl transition-all ${
      active ? "border border-black bg-gray-50" : "hover:bg-gray-100 text-gray-600"
    }`}
  >
    <Icon size={24} />
    <span className="text-sm font-semibold mt-1">{label}</span>
  </button>
);

export default Showcase;
