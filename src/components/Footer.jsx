const sections = [
  "Home",
  "Experience",
  "Developer portfolio",
  "Now / uses",
  "Contact",
];

export default function Footer() {
  return (
    <div className="bg-ink text-[#c7c4bc] px-6 sm:px-10 lg:px-14 pt-12 pb-7">
      <div className="max-w-250 mx-auto">
        <div className="flex justify-between gap-10 flex-wrap">
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2 mb-3.5">
              <div className="relative w-[22px] h-5">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                  <path
                    d="M11 1L21 19H1L11 1Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute -bottom-px -right-1 w-1.5 h-1.5 rounded-full bg-orange" />
              </div>
              <span className="text-sm text-white">Tegar Yasindra</span>
            </div>
            <p className="text-[13px] leading-relaxed text-[#9a978f] m-0">
              Fullstack developer building scalable mobile and web products
              end-to-end, across Go, Python, and Flutter.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="text-xs tracking-wide uppercase text-[#7d7a72] m-0 mb-3.5 font-bold">
                Sections
              </h4>
              {sections.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="block text-[13px] text-[#d8d5cd] no-underline mb-2.5"
                >
                  {s}
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-xs tracking-wide uppercase text-[#7d7a72] m-0 mb-3.5 font-bold">
                Connect
              </h4>
              <a
                href="mailto:tegar.yasindraa@gmail.com"
                className="block text-[13px] text-[#d8d5cd] no-underline mb-2.5"
              >
                Email
              </a>
              <a
                href="#"
                className="block text-[13px] text-[#d8d5cd] no-underline mb-2.5"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/tegaryasindra"
                className="block text-[13px] text-[#d8d5cd] no-underline mb-2.5"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block text-[13px] text-[#d8d5cd] no-underline mb-2.5"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-11 pt-5.5 border-t border-[#2b2a27] text-xs text-[#7d7a72]">
          <span>&copy; 2026 Tegar Yasindra. All rights reserved.</span>
          <a href="#top" className="text-[#d8d5cd] no-underline">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </div>
  );
}
