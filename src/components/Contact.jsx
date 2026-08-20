import { motion } from "framer-motion";
import { fadeUp, viewport } from "../motion";

const fieldClass =
  "w-full px-3.5 py-3.5 rounded-[10px] border border-card-border bg-[#f9f8f6] text-[13px] font-inherit text-ink outline-none transition-colors focus:border-orange focus:bg-white";

const CALENDAR_LINK = "https://calendar.app.google/idA6J4Yt3fwR2z1a9";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:tegar.yasindraa@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="bg-page-bg px-6 sm:px-10 lg:px-14 pb-4 mt-16">
      <div className="max-w-250 mx-auto">
        <div className="text-[28px] font-extrabold text-ink tracking-[-0.3px]">
          Let&rsquo;s work together
        </div>
        <p className="text-sm text-gray-text mt-1.5">
          Have a project in mind? Send a message or reach out directly.
        </p>

        <motion.div
          className="mt-6 bg-white border border-card-border rounded-[20px] flex overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="w-[36%] bg-ink text-white px-8 py-9">
            <h3 className="text-[22px] font-extrabold m-0 mb-2.5 tracking-[-0.3px]">
              Say hello
            </h3>
            <p className="text-[13px] text-[#b9b6ae] leading-relaxed m-0 mb-7">
              Fullstack developer based in Balikpapan, working across Go,
              Python, and Flutter.
            </p>

            <div className="flex items-center gap-2.5 text-[13px] text-[#e9e7e2] mb-3.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-orange"
              >
                <path
                  d="M3 6h18v12H3V6Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M3 7l9 6 9-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              tegar.yasindraa@gmail.com
            </div>
            <div className="flex items-center gap-2.5 text-[13px] text-[#e9e7e2] mb-3.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-orange"
              >
                <path
                  d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              +62 813-5400-0987
            </div>
            <div className="flex items-center gap-2.5 text-[13px] text-[#e9e7e2] mb-3.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-orange"
              >
                <path
                  d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="2.4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              Balikpapan, East Kalimantan, Indonesia
            </div>
            <div className="flex items-center gap-2.5 text-[13px] text-[#e9e7e2] mb-3.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-orange"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 7v5l3.5 2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              Usually replies within 24h
            </div>

            <div className="flex gap-2.5 mt-6">
              <a
                href="https://linkedin.com/in/tegaryasindra"
                className="w-9 h-9 rounded-full border border-[#3a3833] flex items-center justify-center text-[11px] font-bold text-[#e9e7e2] no-underline"
              >
                in
              </a>
              <span className="w-9 h-9 rounded-full border border-[#3a3833] flex items-center justify-center text-[11px] font-bold text-[#e9e7e2]">
                gh
              </span>
              <span className="w-9 h-9 rounded-full border border-[#3a3833] flex items-center justify-center text-[11px] font-bold text-[#e9e7e2]">
                tw
              </span>
            </div>
          </div>

          <div className="flex-1 px-10 py-9">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3.5 mb-3.5">
                <input
                  className={fieldClass}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  className={fieldClass}
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3.5">
                <textarea
                  className={`${fieldClass} resize-y min-h-24`}
                  name="message"
                  placeholder="Tell me about your project"
                  required
                />
              </div>
              <div className="flex gap-3 mt-1.5">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="bg-ink text-white border-none px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer"
                >
                  Send message
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={CALENDAR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-ink border border-card-border px-7 py-3.5 rounded-full text-sm font-bold cursor-pointer no-underline inline-flex items-center"
                >
                  Book a call
                </motion.a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
