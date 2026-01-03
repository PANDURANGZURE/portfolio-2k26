import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from "./Line";
import {
  Code2,
  ExternalLink,
  GitCommit,
  Activity,
  Users,
  Calendar
} from "lucide-react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const tiltOptions = {
  tiltMaxAngleX: 12,
  tiltMaxAngleY: 12,
  perspective: 1000,
  scale: 1.02,
  glareEnable: true,
  glareMaxOpacity: 0.1,
  transitionSpeed: 1500
};

export default function Github() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [activities, setActivities] = useState([]);
  const username = "PANDURANGZURE";
  const headingRef = useRef(null);
  const boxRef = useRef(null);

  /* ---------------- GSAP + AOS ---------------- */
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
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%"
        }
      }
    );

    AOS.init({ duration: 1000, once: true });
  }, []);

  /* ---------------- GitHub API ---------------- */
  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      ),
      fetch(
        `https://api.github.com/users/${username}/events/public?per_page=5`
      )
    ])
      .then(async ([p, r, e]) => {
        setProfile(await p.json());
        setRepos(await r.json());
        setActivities(await e.json());
      })
      .catch(console.error);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 overflow-hidden">
      {/* ---------- HEADING ---------- */}
      <div
        
        className="flex flex-col items-center mb-16 "
      >
        <h2 ref={boxRef}  className="text-4xl md:text-6xl font-bold text-black text-center">
          Development Activity
        </h2>
        <Line text="Contributions" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* ---------- STATS ---------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard label="Public Repos" value={profile?.public_repos} icon={<Code2 />} />
          <StatCard
            label="Joined"
            value={
              profile?.created_at
                ? new Date(profile.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric"
                  })
                : "—"
            }
            icon={<Calendar />}
          />
          <StatCard label="Followers" value={profile?.followers} icon={<Users />} />
          <StatCard label="Following" value={profile?.following} icon={<Users />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ---------- ACTIVITY ---------- */}
          <div
            data-aos="fade-right"
            className="lg:col-span-1 border border-black rounded-2xl p-6"
          >
            <h3 className="font-bold text-black flex items-center gap-2 mb-6">
              <Activity size={18} /> Recent Activity
            </h3>

            <div className="space-y-3">
              {activities.map((event, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg border border-black/20"
                >
                  {event.type === "PushEvent" ? (
                    <GitCommit size={14} />
                  ) : (
                    <Code2 size={14} />
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono truncate text-black">
                      {event.repo.name.split("/")[1]}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {new Date(event.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- REPOS ---------- */}
          <div
            data-aos="fade-left"
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {repos.map(repo => (
              <Tilt key={repo.id} {...tiltOptions}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full p-6 rounded-2xl border border-black hover:border-2 transition-all"
                >
                  <h3 className="font-bold text-black truncate mb-2">
                    {repo.name}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-4 h-10">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500">
                    <span>{repo.language || "Web"}</span>
                    <span>⭐ {repo.stargazers_count}</span>
                  </div>
                </a>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STAT CARD ---------- */
const StatCard = ({ label, value, icon }) => (
  <div className="border border-black rounded-2xl p-6 flex flex-col items-center text-center hover:border-2 transition">
    <div className="mb-2">{icon}</div>
    <span className="text-3xl font-bold text-black">{value ?? 0}</span>
    <span className="text-xs uppercase tracking-tight text-gray-700 mt-1">
      {label}
    </span>
  </div>
);
