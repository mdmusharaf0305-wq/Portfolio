import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <section className="experience-section">
      <ExperienceCard
        role="Software Developer"
        company="Xine Technology Solutions"
        duration="Jan 2025 – Present"
        points={[
          "Developed backend microservices using Node.js, Express, and AWS Lambda",
          "Designed and deployed 10+ production-ready REST APIs",
          "Improved API performance by 25% through database query optimization and caching",
          "Implemented IAM policies, KMS encryption, and API Gateway routing",
          "Reduced debugging time by 40% using CloudWatch Logs and structured logging",
        ]}
      />

      <ExperienceCard
        role="Data Engineer Intern"
        company="Mphasis"
        duration="Sep 2024 – Dec 2024"
        points={[
          "Built ETL workflows using Talend and MySQL for data processing pipelines",
          "Reduced SQL pipeline execution time by 35% through query optimization",
          "Created Power BI dashboards to visualize KPIs and business metrics",
          "Containerized ETL processes using Docker for consistency across environments",
        ]}
      />
    </section>
  );
}
