import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative w-full py-4">
      {/* Horizontal connector line on desktop - centered across 3 columns */}
      <div className="absolute top-[26px] left-[16.6%] right-[16.6%] h-0.5 bg-theme-timeline hidden md:block z-0" />

      <div className="flex flex-row md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-none w-full relative z-10">

        {/* Job 1 */}
        <div className="flex flex-col items-center group shrink-0 w-[260px] md:w-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-theme-bg border-2 border-brand-start group-hover:border-brand-end group-hover:scale-125 transition-all duration-300 mb-5 hidden md:block z-10 shadow-sm" />
          <ExperienceCard
            role="Senior Software Engineer"
            company="Xine Technologies"
            duration="Jan 2025 – June 2026"
          />
        </div>

        {/* Job 2 */}
        <div className="flex flex-col items-center group shrink-0 w-[260px] md:w-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-theme-bg border-2 border-brand-start group-hover:border-brand-end group-hover:scale-125 transition-all duration-300 mb-5 hidden md:block z-10 shadow-sm" />
          <ExperienceCard
            role="Software Engineer"
            company="Mphasis, Pune"
            duration="Sep 2024 – Dec 2024"
          />
        </div>

        {/* Job 3 */}
        <div className="flex flex-col items-center group shrink-0 w-[260px] md:w-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-theme-bg border-2 border-brand-start group-hover:border-brand-end group-hover:scale-125 transition-all duration-300 mb-5 hidden md:block z-10 shadow-sm" />
          <ExperienceCard
            role="Software Associate"
            company="Mphasis (Ants IT)"
            duration="Jan 2022 – Sep 2024"
          />
        </div>

      </div>
    </div>
  );
}
