import { motion, AnimatePresence } from "framer-motion";
import { LuImage } from "react-icons/lu";
import { useCycle } from "../useCycle";

export default function ProjectCard({ tag, projects }) {
  const [active, setActive] = useCycle(projects.length);
  const p = projects[active];

  return (
    <div className="bg-white border border-card-border rounded-[20px] p-4.5 relative overflow-hidden h-full flex flex-col">
      <span className="self-start bg-white border border-card-border rounded-full text-xs text-[#8a8780] px-3 py-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.03)]">
        {tag}
      </span>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mt-4 aspect-video rounded-xl bg-[#f1efe9] flex items-center justify-center text-[#c2beb3] overflow-hidden">
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <LuImage size={26} />
            )}
          </div>
          <div className="text-[15px] font-extrabold text-ink mt-4">
            {p.title}
          </div>
          <p className="text-xs text-[#a29e93] mt-1.5 leading-relaxed">
            {p.desc}
          </p>
          <div className="flex gap-2.5 mt-3 flex-wrap">
            {p.stats.map((s) => (
              <span
                key={s}
                className="text-[11px] text-[#8a8780] bg-page-bg rounded-full px-2.5 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <a
        href={p.link}
        className="mt-auto pt-4 text-xs font-bold text-orange-dark"
      >
        {p.linkLabel} &#8599;
      </a>

      {projects.length > 1 && (
        <div className="flex gap-1.5 mt-3">
          {projects.map((proj, i) => (
            <motion.button
              key={proj.title}
              onClick={() => setActive(i)}
              aria-label={proj.title}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === active ? "bg-ink" : "bg-card-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
