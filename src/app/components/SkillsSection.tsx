"use client";

import Section from "./Section";

const SKILLS = [
  {
    key: "frontend",
    title: "Frontend Core",
    icon: "🖥️",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    key: "backend",
    title: "Backend & Databases",
    icon: "🧠",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    key: "integration",
    title: "API & Integration",
    icon: "🔌",
    items: [
      "GraphQL",
      "Apollo Client",
      "Axios",
      "Fetch API",
    ],
  },
  {
    key: "performance",
    title: "Performance & Arch",
    icon: "⚡",
    items: [
      "SSR, SSG, ISR",
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Responsive UI",
      "Clean Architecture",
    ],
  },
  {
    key: "testing",
    title: "Testing Frameworks",
    icon: "🧪",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Mocha",
      "Chai",
    ],
  },
  {
    key: "tools",
    title: "Tools & Editors",
    icon: "⚙️",
    items: [
      "Webpack",
      "Vite",
      "Git & GitHub",
      "VS Code",
      "GitHub Copilot",
      "Cursor AI",
    ],
  },
];

export default function SkillsSection() {
  return (
    <Section title="Skills" id="skills" className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.key}
            className="perspective-1000 group cursor-pointer h-48 md:h-44"
          >
            <div className="relative w-full h-full transform-style-3d duration-500 group-hover:rotate-y-180">
              
              {/* FRONT FACE */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-theme-border bg-theme-card backdrop-blur-md backface-hidden group-hover:border-brand-mid group-hover:ring-4 group-hover:ring-brand-mid/10 group-hover:shadow-lg group-hover:shadow-brand-mid/5 transition-all duration-300">
                <span className="text-3xl leading-none">{skill.icon}</span>
                <span className="text-sm md:text-base font-bold text-theme-text-title text-center px-2">
                  {skill.title}
                </span>
              </div>

              {/* BACK FACE */}
              <div className="absolute inset-0 flex items-center justify-center p-4 rounded-2xl border border-theme-border bg-theme-card backdrop-blur-md rotate-y-180 backface-hidden shadow-sm">
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-start/5 text-brand-start border border-brand-start/10 dark:bg-brand-end/5 dark:text-brand-end dark:border-brand-end/10 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
