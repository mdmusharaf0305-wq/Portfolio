import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationTimeline from "./components/EducationTimeline";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <Header />

      <main className="relative z-10">
        {/* ===================== */}
        {/* SKILLS */}
        {/* ===================== */}
        <SkillsSection />

        {/* ===================== */}
        {/* EXPERIENCE */}
        {/* ===================== */}
        <Section title="Experience" id="experience">
          <ExperienceTimeline />
        </Section>

        {/* ===================== */}
        {/* PROJECTS */}
        {/* ===================== */}
        <Section title="Projects" id="projects">
          <ProjectCard
            company={{
              name: "Costco Wholesale Corporation",
            }}
            title="Costco E-Commerce Platform"
            role="Frontend-Focused Full Stack Developer"
            description={[
              "Costco.com is a large-scale e-commerce platform supporting online shopping, product discovery, order management, and member-focused digital experiences.",
              "Contributed to scalable frontend and full-stack feature development for responsive web applications and cross-platform user experiences."
            ]}
            techStack={{
              frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Tailwind CSS"],
              backend: ["Node.js", "Express.js", "GraphQL", "Apollo Client"],
              databases: ["MongoDB", "PostgreSQL"],
              tools: ["Git", "Tailwind CSS"],
              testing: ["Jest", "Mocha", "Chai"]
            }}
            responsibilities={[
              "Developed scalable frontend applications using React.js and Next.js with focus on responsive UI development, rendering optimization, and maintainable component architecture.",
              "Built reusable TypeScript-based UI components and frontend modules to improve scalability, consistency, and development efficiency across features.",
              "Integrated REST APIs and GraphQL services for dynamic product, cart, authentication, and order management workflows.",
              "Implemented SSR and frontend optimization strategies using Next.js to improve SEO, rendering performance, and user experience.",
              "Developed backend services and API integrations using Node.js and Express.js supporting full-stack application functionality.",
              "Worked extensively with MongoDB and PostgreSQL for schema design, CRUD operations, query optimization, and efficient data handling.",
              "Implemented JWT-based authentication and authorization workflows for secure user and session management.",
              "Applied performance optimization techniques including code splitting, lazy loading, asynchronous processing, and efficient state management.",
              "Built unit and integration test cases using Jest, Mocha, and Chai to maintain code reliability and backend stability.",
              "Collaborated with frontend, backend, and QA teams in Agile/Scrum environments for feature delivery, debugging, and production support.",
              "Used Git and GitHub workflows for version control, branching strategies, pull requests, and collaborative development."
            ]}
          />

          <ProjectCard
            company={{
              name: "Healthgrades Corporation",
            }}
            title="Healthgrades Provider Directory Platform"
            role="Frontend-Focused Full Stack Developer"
            description={[
              "Healthgrades is a large-scale healthcare platform that helps users discover doctors, hospitals, healthcare providers, and treatment information through data-driven digital experiences.",
              "Contributed to scalable frontend and full-stack application development focused on performance, usability, and secure healthcare data workflows."
            ]}
            techStack={{
              frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Tailwind CSS"],
              backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Apollo Client"],
              databases: ["MongoDB", "PostgreSQL"],
              tools: ["Git", "Tailwind CSS"],
              testing: ["Jest", "Mocha", "Chai"]
            }}
            responsibilities={[
              "Developed scalable frontend applications using React.js and Next.js with focus on responsive UI development, maintainable component architecture, and optimized rendering performance.",
              "Built reusable TypeScript-based frontend components and integrated dynamic healthcare workflows using REST APIs and GraphQL services.",
              "Implemented SSR and SSG strategies using Next.js to improve SEO, page load performance, and user experience across healthcare search and provider discovery modules.",
              "Developed backend services and secure API integrations using Node.js and Express.js supporting healthcare-related application functionality.",
              "Worked extensively with MongoDB and PostgreSQL for schema design, CRUD operations, indexing, query optimization, and efficient data management.",
              "Implemented JWT-based authentication, request validation, centralized error handling, and secure API communication workflows.",
              "Applied asynchronous programming and backend optimization techniques to improve scalability and application performance.",
              "Wrote unit and integration test cases using Jest, Mocha, and Chai to improve application reliability and code quality.",
              "Collaborated with frontend, backend, QA, and product teams in Agile/Scrum environments for feature development, debugging, deployment, and production support.",
              "Maintained scalable, modular, and reusable application architecture following clean coding and collaborative development best practices."
            ]}
          />
        </Section>

        {/* ===================== */}
        {/* EDUCATION */}
        {/* ===================== */}
        <Section title="Education" id="education">
          <EducationTimeline />
        </Section>



        {/* ===================== */}
        {/* CERTIFICATIONS */}
        {/* ===================== */}
        <Section title="Certifications" id="certifications">
          <div className="max-w-2xl mx-auto bg-theme-card border border-theme-border rounded-2xl p-6 md:p-8 text-center shadow-md hover:bg-theme-card-hover transition-all duration-300">
            <h3 className="text-xl font-bold text-theme-text-title mb-2 tracking-tight">
              Data Visualization Certificate
            </h3>

            <p className="text-sm text-theme-text-body mb-6 leading-relaxed max-w-lg mx-auto">
              Certification focused on data visualization techniques, dashboard design,
              and transforming datasets into clear visual insights for business
              decision-making.
            </p>

            <div className="rounded-xl overflow-hidden border border-theme-border bg-slate-500/5 relative group cursor-zoom-in">
              <img
                src="/Data Visualization Cetitificate.png"
                alt="Data Visualization Certificate"
                className="w-full h-auto block duration-500 group-hover:scale-[1.015]"
              />
            </div>
          </div>
        </Section>

        {/* ===================== */}
        {/* CONTACT */}
        {/* ===================== */}
        <Section title="Get In Touch" id="contact">
          <ContactForm />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
