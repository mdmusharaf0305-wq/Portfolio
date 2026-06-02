import ExperienceCard from "./ExperienceCard";

export default function EducationTimeline() {
  return (
    <div className="relative w-full py-4">
      {/* Horizontal connector line on desktop - centered across 3 columns */}
      <div className="absolute top-[26px] left-[16.6%] right-[16.6%] h-0.5 bg-theme-timeline hidden md:block z-0" />
      
      <div className="flex flex-row md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-none w-full relative z-10">
        
        {/* Education 1: B.Tech */}
        <div className="flex flex-col items-center group shrink-0 w-[260px] md:w-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-theme-bg border-2 border-indigo-600 group-hover:border-cyan-500 group-hover:scale-125 transition-all duration-300 mb-5 hidden md:block z-10 shadow-sm" />
          <ExperienceCard
            role="B. Tech (ECE) • 7.32/10 (69.54%)"
            company="Kits College, JNTU Kakinada"
            duration="2018 – 2022"
          />
        </div>

        {/* Education 2: Intermediate */}
        <div className="flex flex-col items-center group shrink-0 w-[260px] md:w-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-theme-bg border-2 border-indigo-600 group-hover:border-cyan-500 group-hover:scale-125 transition-all duration-300 mb-5 hidden md:block z-10 shadow-sm" />
          <ExperienceCard
            role="Intermediate (MPC) • 918/1000 (91.8%)"
            company="Sri Chaitanya College"
            duration="2016 – 2018"
          />
        </div>

        {/* Education 3: Secondary School */}
        <div className="flex flex-col items-center group shrink-0 w-[260px] md:w-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-theme-bg border-2 border-indigo-600 group-hover:border-cyan-500 group-hover:scale-125 transition-all duration-300 mb-5 hidden md:block z-10 shadow-sm" />
          <ExperienceCard
            role="Secondary School (SSC) • 8.75/10 (83.12%)"
            company="Sri Vijetha School"
            duration="2016"
          />
        </div>

      </div>
    </div>
  );
}
