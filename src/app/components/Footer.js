export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 mb-12">
      <div className="bg-theme-card border border-theme-border rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Soft Ambient Light Gradient inside Card */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[150px] bg-indigo-500/3 blur-[80px] rounded-full pointer-events-none" />

        {/* LEFT — BRAND DECK */}
        <div className="text-center sm:text-left relative z-10">
          <p className="text-sm font-semibold text-theme-text-title tracking-tight">
            Mohammed Musharraf
          </p>
          <p className="text-xs text-theme-text-body mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* RIGHT — SOCIAL BUTTON ROW */}
        <div className="flex items-center gap-3 flex-wrap justify-center relative z-10 footer-icons">
          {/* Gmail */}
          <a 
            href="mailto:musharaff.dev@gmail.com" 
            aria-label="Email" 
            title="Email"
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-theme-border hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
              alt=""
              className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 icon-gmail filter grayscale brightness-75 dark:invert"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/musharraf-mohammed-374940212/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-theme-border hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt=""
              className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 icon-linkedin filter grayscale brightness-75 dark:invert"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mdmusharaf0305-wq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-theme-border hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group shadow-sm"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt=""
              className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 icon-github filter grayscale brightness-75 dark:invert"
            />
          </a>
        </div>

      </div>
    </footer>
  );
}