import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import {
  SiGo,
  SiPython,
  SiJavascript,
  SiFlutter,
  SiReact,
  SiDart,
  SiMysql,
  SiFirebase,
  SiGithubactions,
} from "react-icons/si";
import { LuUsers } from "react-icons/lu";
import StepCard from "./StepCard";
import ProjectCard from "./ProjectCard";
import { fadeUp, stagger, viewport } from "../motion";

function ImpactCount({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
    return controls.stop;
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const projects = [
  {
    title: "Sribuu",
    desc: "Led Sribuu from a single Flutter codebase to a fintech app trusted by 500,000+ active users, owning it end-to-end at Fintelite.",
    stats: ["500K+ users", "Flutter"],
    link: "https://sribuu.id/",
    linkLabel: "Visit site",
    image: "/images/sribuu.png",
  },
  {
    title: "Fintelite",
    desc: "Building the OCR, AI, and fintech systems Fintelite ships to clients across Southeast Asia, across the Go, Python, and Flutter stack.",
    stats: ["Fintech", "Go, Python, Flutter"],
    link: "https://fintelite.id/",
    linkLabel: "Visit site",
    image: "/images/fintelite.png",
  },
  {
    title: "Anycheck",
    desc: "Built Anycheck from scratch for a client — a Go backend and Flutter app that gives users one place to verify every document and certificate.",
    stats: ["Flutter", "Go", "Fintech"],
    link: "https://anycheck.ai/",
    linkLabel: "Visit site",
    image: "/images/anycheck.png",
  },
];

const techStack = [
  { label: "GO", icon: SiGo, accent: true },
  { label: "PY", icon: SiPython, accent: false },
  { label: "JS", icon: SiJavascript, accent: false },
  { label: "FL", icon: SiFlutter, accent: true },
  { label: "RN", icon: SiReact, accent: false },
  { label: "DART", icon: SiDart, accent: false },
  { label: "SQL", icon: SiMysql, accent: false },
  { label: "FB", icon: SiFirebase, accent: true },
  { label: "CI/CD", icon: SiGithubactions, accent: false },
];

const processSteps = [
  {
    heading: "01 System design",
    text: "I work across the full development lifecycle, from system design to deployment, integrating AI and backend services into production-ready, maintainable solutions.",
  },
  {
    heading: "02 Build",
    text: "Code follows the design, kept simple and typed so it stays maintainable as it grows.",
  },
  {
    heading: "03 Test",
    text: "Manual and automated checks run before anything ships to users.",
  },
  {
    heading: "04 Deploy",
    text: "Ships behind CI/CD with a staged rollout, so issues surface before they reach everyone.",
  },
  {
    heading: "05 Iterate",
    text: "Usage and feedback after launch feed straight back into the next build cycle.",
  },
];

const cardClass =
  "bg-white border border-card-border rounded-[20px] p-4.5 relative min-h-[230px] overflow-hidden";
const tagClass =
  "inline-block bg-white border border-card-border rounded-full text-xs text-[#8a8780] px-3 py-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.03)]";

export default function DevPortfolio() {
  return (
    <div className="bg-page-bg px-6 sm:px-10 lg:px-14 pb-4 mt-16">
      <div className="max-w-250 mx-auto">
        <div className="text-[28px] font-extrabold text-ink tracking-[-0.3px]">
          Developer portfolio
        </div>
        <p className="text-sm text-gray-text mt-1.5">
          A closer look at how I build.
        </p>

        <motion.div
          className="mt-11 grid grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className={cardClass}>
            <span className={tagClass}>Tech stack</span>
            <div className="mt-4.5 grid grid-cols-3 gap-2">
              {techStack.map((t) => (
                <motion.div
                  key={t.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`aspect-square rounded-[10px] flex flex-col items-center justify-center gap-1.5 text-[10px] font-bold cursor-default ${
                    t.accent
                      ? "bg-orange/10 text-orange-dark"
                      : "bg-[#f1efe9] text-[#6b6862]"
                  }`}
                >
                  <t.icon size={22} />
                  {t.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-ink rounded-[20px] p-4.5 relative overflow-hidden flex flex-col justify-start min-h-57.5"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-orange/30 blur-3xl" />
            <div className="relative flex items-center justify-between">
              <span className="self-start bg-white/10 border border-white/10 rounded-full text-xs text-white/70 px-3 py-1.5">
                Impact
              </span>
              <LuUsers size={18} className="text-white/30" />
            </div>
            <div className="relative text-[44px] font-extrabold text-orange mt-5.5 tracking-[-1px]">
              <ImpactCount to={500000} />+
            </div>
            <div className="relative text-[13px] text-white/60 mt-2.5 leading-relaxed">
              Scaled Sribuu to 500,000+ active users as the Flutter engineer
              owning it end-to-end at Fintelite.
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ProjectCard tag="Featured project" projects={projects} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`${cardClass} flex flex-col`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className={tagClass}>Availability</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#2ecc71]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71]" />
                Open to opportunities
              </span>
            </div>

            <div className="mt-4 rounded-xl bg-orange/8 p-3.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange/15 flex items-center justify-center text-orange-dark shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M3 10h18M8 3v4M16 3v4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.5 14.5l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-bold text-ink">
                  Currently available for new projects
                </div>
                <div className="text-[11px] text-[#8a8780] mt-0.5">
                  Let&rsquo;s build something amazing together!
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4">
              <div className="text-xl font-extrabold text-ink">&lt; 24h</div>
              <div className="text-[11px] text-[#a29e93] mt-0.5">
                Average reply time
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="col-span-2">
            <StepCard
              tag="Build process"
              steps={processSteps}
              stepLabels={["Design", "Build", "Test", "Deploy", "Iterate"]}
              className="min-h-[230px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
