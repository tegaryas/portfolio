import { motion } from "framer-motion";
import {
  SiAndroidstudio,
  SiFigma,
  SiFirebase,
  SiGithubactions,
  SiSupabase,
} from "react-icons/si";
import { fadeUp, stagger, viewport } from "../motion";

const desk = [
  { label: "Android Studio", icon: SiAndroidstudio },
  { label: "Figma", icon: SiFigma },
  { label: "Firebase", icon: SiFirebase },
  { label: "GitHub Actions", icon: SiGithubactions },
  { label: "Supabase", icon: SiSupabase },
];
const languages = [
  { label: "Indonesian", flag: "🇮🇩", level: "Native", fluency: 100 },
  { label: "English", flag: "🇬🇧", level: "Professional", fluency: 80 },
];
const anycheckTags = [
  "KYC / KYB",
  "PEP screening",
  "Fraud detection",
  "90%+ accuracy",
];

const cardClass =
  "bg-white border border-card-border rounded-[20px] p-4.5 relative min-h-[230px] overflow-hidden flex flex-col";
const tagClass =
  "self-start inline-block bg-white border border-card-border rounded-full text-xs text-[#8a8780] px-3 py-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.03)]";

export default function NowUses() {
  return (
    <div className="bg-page-bg px-6 sm:px-10 lg:px-14 pb-4 mt-16">
      <div className="max-w-250 mx-auto">
        <div className="text-[28px] font-extrabold text-ink tracking-[-0.3px]">
          Now / uses
        </div>
        <p className="text-sm text-gray-text mt-1.5">
          What I&rsquo;m focused on and working with at the moment.
        </p>

        <motion.div
          className="mt-11 grid grid-cols-3 grid-rows-2 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div
            variants={fadeUp}
            className="col-span-2 row-span-2 bg-ink rounded-[20px] p-6 relative overflow-hidden flex flex-col"
          >
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-orange/25 blur-3xl" />
            <div className="relative flex items-center justify-between flex-wrap gap-2">
              <span className="self-start bg-white/10 border border-white/10 rounded-full text-xs text-white/70 px-3 py-1.5">
                Right now
              </span>
              <div className="text-xs text-white/40 flex items-center gap-1.5">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-orange animate-ping opacity-75" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-orange" />
                </span>
                Bekasi, Indonesia
              </div>
            </div>

            <div className="relative text-2xl font-extrabold text-white mt-6 max-w-md">
              Building AnyCheck AI
            </div>
            <p className="relative text-[13px] text-white/60 mt-3 max-w-md leading-relaxed">
              An AI-powered KYC/KYB, risk analysis, and fraud-prevention
              platform for Indonesian fintechs, banks, and lenders&mdash;
              verifying IDs, screening PEPs, and reading bank statements in
              seconds against live government databases.
            </p>

            <div className="relative flex gap-2 flex-wrap mt-5">
              {anycheckTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-white/70 bg-white/10 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://anycheck.ai/"
              className="relative mt-auto pt-6 text-xs font-bold text-orange"
            >
              Visit anycheck.ai &#8599;
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className={cardClass}>
            <span className={tagClass}>On my desk</span>
            <div className="mt-5 flex flex-wrap gap-2">
              {desk.map((tool) => (
                <div
                  key={tool.label}
                  className="flex items-center gap-2 bg-page-bg border border-card-border rounded-full pl-2 pr-3 py-1.5"
                >
                  <span className="w-5.5 h-5.5 rounded-full bg-white border border-card-border flex items-center justify-center text-[#6b6862] shrink-0">
                    <tool.icon size={11} />
                  </span>
                  <span className="text-[11px] text-[#6b6862] whitespace-nowrap">
                    {tool.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className={cardClass}>
            <span className={tagClass}>Languages</span>
            <div className="mt-5 flex flex-col gap-3.5">
              {languages.map((lang) => (
                <div key={lang.label}>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-ink flex items-center gap-1.5">
                      <span>{lang.flag}</span>
                      {lang.label}
                    </span>
                    <span className="text-[10px] text-[#a29e93]">
                      {lang.level}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-page-bg overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-orange"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.fluency}%` }}
                      viewport={viewport}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
