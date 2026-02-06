"use client";

import Section from "./Section";

const SKILLS = [
  {
    key: "backend",
    title: "Backend Engineering",
    icon: "🧠",
    dense: true,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Async/Await",
      "Error Handling",
    ],
  },
  {
    key: "databases",
    title: "Databases",
    icon: "🗄️",
    dense: true,
    items: [
      "MySQL",
      "Indexing",
      "MongoDB",
      "DynamoDB",
      "Query Optimization",
    ],
  },
  {
    key: "cloud",
    title: "AWS & Serverless",
    icon: "☁️",
    dense: true,
    items: [
      "IAM",
      "KMS",
      "S3",
      "Lambda",
      "API Gateway",
      "CloudWatch",
    ],
  },
  {
    key: "frontend",
    title: "Frontend",
    icon: "🖥️",
    items: [
      "Next.js",
      "React",
      "Responsive UI",
    ],
  },
  {
    key: "data-eng",
    title: "Data Engineering",
    icon: "📊",
    dense: true,
    items: [
      "Python",
      "Talend",
      "ETL Pipelines",
      "Data Modeling",
      "Batch Processing",
    ],
  },
  {
    key: "bi",
    title: "BI & Analytics",
    icon: "📈",
    items: [
      "Power BI",
      "Dashboards",
      "KPI Reporting",
      "Data Analysis",
    ],
  },
  {
    key: "tools",
    title: "Tools & Practices",
    icon: "🛠️",
    dense: true,
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Postman",
      "Logging",
      "Microservices",
    ],
  },
];


export default function SkillsSection() {
  return (
    <Section title="Skills" id="skills">
      <div className="skills-section">
        {SKILLS.map((skill) => (
          <div
            key={skill.key}
            className={`flip-card ${skill.dense ? "flip-card--dense" : ""}`}
          >

            <div className="flip-card-inner">

              {/* FRONT */}
              <div className="flip-card-front">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-title">{skill.title}</div>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <div className="skill-pills">
                  {skill.items.map((item, i) => (
                    <span key={i} className="skill-pill">
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
