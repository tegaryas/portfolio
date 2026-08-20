import { motion, AnimatePresence } from "framer-motion";
import { useCycle } from "../useCycle";

export default function StepCard({ tag, steps, stepLabels, className = "" }) {
  const [active, setActive] = useCycle(steps.length);
  const step = steps[active];

  return (
    <div
      className={`bg-white border border-card-border rounded-[20px] p-4.5 flex flex-col h-full ${className}`}
    >
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
          <div className="text-lg font-extrabold text-ink mt-6.5">
            {step.heading}
          </div>
          <p className="text-[13px] text-[#8a8780] leading-relaxed mt-2.5 max-w-[460px]">
            {step.text}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-auto pt-4 flex gap-2 flex-wrap">
        {stepLabels.map((label, i) => (
          <motion.button
            key={label}
            onClick={() => setActive(i)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              i === active
                ? "bg-ink text-white"
                : "bg-white border border-card-border text-[#8a8780]"
            }`}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
