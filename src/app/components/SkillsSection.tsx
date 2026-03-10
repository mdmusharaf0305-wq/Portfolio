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
    ],
  },
  {
    key: "databases",
    title: "Databases",
    icon: "🗄️",
    dense: true,
    items: [
      "MySQL",
      "MongoDB",
      "DynamoDB",
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
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    key: "bi",
    title: "BI & Analytics",
    icon: "📈",
    items: [
      "Python",
      "Power BI",
      "Talend",
      "Snowflake",
      "Dashboards",
      "KPI Reporting",
    ],
  },
  {
    key: "version-control",
    title: "Version Control",
    icon: "🛠️",
    dense: true,
    items: [
      "Git",
      "Bitbucket",
    ],
  },
  {
    key: "tools",
    title: "Tools & Practices",
    icon: "🛠️",
    dense: true,
    items: [
      "Docker",
      "CI/CD",
      "Postman",
      "Insomnia",
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
