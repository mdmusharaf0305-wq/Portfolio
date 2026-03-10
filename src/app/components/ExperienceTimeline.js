import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <section className="experience-section">
      <ExperienceCard
        role="Software Developer"
        company="Xine Technology Solutions"
        duration="Jan 2025 – Present"
        points={[
          "Worked in a hybrid role as a Data Analyst and Backend Developer, analyzing datasets to generate insights and building interactive dashboards and reports for data-driven decision-making.",

          "Developed backend services and REST APIs using Node.js and Express, enabling applications and analytics tools to efficiently access and process data. Collaborated on integrating data pipelines, backend services, and visualization tools to create complete data-driven solutions.",
        
          "Also managed AWS deployment and cloud integration, implementing secure access controls and monitoring systems to ensure reliable and scalable applications."
        ]}
      />

      <ExperienceCard
        role="Data Engineer Intern"
        company="Mphasis"
        duration="Sep 2024 – Dec 2024"
        points={[
          "Worked as a Data Analyst, building and maintaining data processing pipelines to transform raw data into meaningful insights. Developed ETL workflows using Talend, MySQL, and Snowflake to clean, process, and prepare data for analysis.",

          "Optimized SQL queries to improve pipeline performance and efficiency. Built interactive Power BI dashboards to visualize KPIs and business metrics, enabling stakeholders to monitor performance and support data-driven decision-making."
        ]}
      />
    </section>
  );
}
