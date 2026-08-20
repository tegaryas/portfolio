import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import StepCard from "./StepCard";
import { fadeUp, stagger, viewport } from "../motion";

const cityPin = divIcon({
  className: "",
  html: '<span class="relative flex w-3 h-3"><span class="absolute inline-flex w-full h-full rounded-full bg-orange animate-ping opacity-75"></span><span class="relative inline-flex w-3 h-3 rounded-full bg-orange border-2 border-white"></span></span>',
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const experience = [
  {
    title: "Fullstack Developer · Fintelite",
    sub: "Jan 2022 – Present · South Jakarta",
  },
  {
    title: "Mobile Developer · BintanGo",
    sub: "Oct 2022 – Mar 2023 · South Jakarta",
  },
  {
    title: "Mobile Developer Intern · LingoTalk",
    sub: "Oct 2021 – Feb 2022 · South Jakarta",
  },
];

const howISteps = [
  {
    heading: "01 Discovery call",
    text: "In the first stage, we'll have a short call to discuss your goals, needs, and project requirements. This helps align the vision and set the foundation for a successful collaboration.",
  },
  {
    heading: "02 Scope & proposal",
    text: "I turn the discovery call into a clear scope, timeline, and price, so both sides know what's being built and when.",
  },
  {
    heading: "03 Design & prototype",
    text: "Wireframes and UI get aligned with you before a line of code is written, avoiding rework later.",
  },
  {
    heading: "04 Build & iterate",
    text: "Development happens in short cycles with regular check-ins, so you always see progress and can steer early.",
  },
  {
    heading: "05 Launch & handoff",
    text: "I deploy, document, and stay on for support after launch, so the handoff is smooth.",
  },
];

const cardClass =
  "bg-white border border-card-border rounded-[20px] p-4.5 relative overflow-hidden";
const tagClass =
  "inline-block bg-white border border-card-border rounded-full text-xs text-[#8a8780] px-3 py-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.03)]";

export default function Hero() {
  return (
    <div className="bg-page-bg px-6 sm:px-10 lg:px-14 pt-14 pb-18">
      <div className="max-w-250 mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="contents"
        >
          <motion.div
            variants={fadeUp}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <div className="relative w-[22px] h-5">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                  <path
                    d="M11 1L21 19H1L11 1Z"
                    stroke="#141311"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute -bottom-px -right-1 w-1.5 h-1.5 rounded-full bg-orange" />
              </div>
              <span className="text-sm text-ink underline underline-offset-3">
                tegar.yasindraa@gmail.com
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14">
            <div className="text-[42px] font-extrabold leading-[1.25] tracking-[-0.5px] flex items-center flex-wrap gap-3.5 text-ink">
              Hi, I&rsquo;m{" "}
              <span className="w-20 h-20 rounded-full border-[3px] border-white shadow-[0_0_0_1px_#ececE7] overflow-hidden">
                <img
                  src="/images/potrait.png"
                  alt="Tegar Yasindra"
                  className="w-full h-full object-cover"
                />
              </span>
              Tegar Yasindra!
            </div>
            <div className="text-[42px] font-extrabold leading-[1.25] tracking-[-0.5px] flex items-center flex-wrap gap-3.5">
              <span className="text-muted">I&rsquo;m a</span> Fullstack
              Developer <span className="text-muted">at</span>
            </div>
            <div className="text-[42px] font-extrabold leading-[1.25] tracking-[-0.5px] flex items-center flex-wrap gap-3.5">
              <span className="text-orange">Fintelite.</span>
              <span className="inline-flex items-center gap-2 bg-white border border-card-border rounded-full px-4 py-2 text-sm font-semibold text-ink ml-2">
                <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
                Open to work
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center gap-5.5 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-ink text-white border-none px-7.5 py-4 rounded-full text-[15px] font-bold whitespace-nowrap cursor-pointer"
            >
              Book a call
            </motion.button>
            <p className="text-[15px] text-[#3a3833] leading-relaxed max-w-[360px] m-0">
              I build fullstack products end–to–end, from system design to
              deployment—feel free to explore my work and reach out!
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-11 grid grid-cols-3 grid-rows-2 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div
            variants={fadeUp}
            className={`${cardClass} min-h-57.5 col-start-1 row-start-1`}
          >
            <span className={tagClass}>My experience</span>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-5 relative pl-4.5"
            >
              <div className="absolute left-1 top-1 bottom-2.5 w-px bg-[#e4e1d9]" />
              {experience.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className={`relative mb-10 ${i > 0 ? "opacity-30 -mt-3.5" : ""}`}
                >
                  <span
                    className={`absolute -left-4.5 top-1.5 w-2 h-2 rounded-full ${i > 0 ? "bg-[#c7c3b8]" : "bg-ink"}`}
                  />
                  <div className="text-[13px] font-bold text-ink">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#a29e93] mt-0.5">
                    {item.sub}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`${cardClass} min-h-57.5 col-start-2 row-start-1 flex flex-col`}
          >
            <span className={`${tagClass} self-start`}>My playlist</span>
            <iframe
              className="mt-4.5 rounded-xl overflow-hidden"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`${cardClass} min-h-57.5 col-start-3 row-start-1`}
          >
            <span className={tagClass}>Achievement</span>
            <div className="mt-5">
              <div className="text-sm font-bold text-ink max-w-[60%] leading-snug">
                Top 3 Startup – 1000 Startup Digital
              </div>
              <div className="text-[11px] text-[#a29e93] mt-1.5">
                Kementerian Kominfo RI, 2020
              </div>
            </div>
            <div className="absolute right-4 bottom-3.5 w-16 h-24 bg-orange rounded -rotate-4 shadow-[0_10px_20px_rgba(0,0,0,0.16)] flex items-center justify-center text-white/55 text-[9px] font-bold tracking-wide [writing-mode:vertical-rl]">
              TOP 3
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`${cardClass} max-h-65 col-start-1 row-start-2 p-0!`}
          >
            <span className={`${tagClass} absolute top-3.5 left-3.5 z-10`}>
              Map
            </span>
            <div className="relative isolate w-full h-full max-h-65">
              <MapContainer
                center={[-6.2383, 106.9756]}
                zoom={14}
                zoomControl={false}
                dragging={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                touchZoom={false}
                attributionControl={false}
                className="map-mono w-full h-full bg-white"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[-6.2383, 106.9756]} icon={cityPin} />
              </MapContainer>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 z-1000 [background:linear-gradient(to_top,rgba(20,19,17,0.85),rgba(20,19,17,0)_100%)]" />
              <div className="absolute bottom-3.5 left-4.5 right-4.5 z-1000">
                <div className="text-[15px] font-extrabold tracking-[2px] text-white">
                  BEKASI
                </div>
                <div className="text-[10px] tracking-[2px] text-white/70 mt-0.5">
                  INDONESIA
                </div>
                <div className="text-[9px] text-white/50 mt-1 font-mono">
                  6.2383&deg; S, 106.9756&deg; E
                </div>
                <div className="text-[8px] text-white/40 mt-1">
                  Map data &copy; OpenStreetMap contributors, style &copy; CARTO
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="col-start-2 col-span-2 row-start-2"
          >
            <StepCard
              tag="How I work"
              steps={howISteps}
              stepLabels={[
                "Step 01",
                "Step 02",
                "Step 03",
                "Step 04",
                "Step 05",
              ]}
              className="max-h-65"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
