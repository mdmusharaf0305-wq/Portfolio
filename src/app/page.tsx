import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container">
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
            title="Serverless Case & Workflow Platform"
            description={[
              "Designed and built a backend-first platform to model how real-world operational or legal requests flow through a system — from intake to resolution.",
              "The project emphasizes scalable API design, stateless authentication, and cloud-native execution using serverless patterns that closely resemble production environments.",
            ]}
            focus="API design, request lifecycle management, secure access control, cloud-native execution"
            tech="Node.js, Express, AWS Lambda, API Gateway, DynamoDB, JWT, CloudWatch"
            architecture={[
              "Client sends authenticated requests via API Gateway",
              "JWT-based authentication ensures stateless access control",
              "AWS Lambda functions handle business logic per workflow stage",
              "DynamoDB stores case data with optimized partition keys",
              "CloudWatch logs and metrics provide observability and debugging",
            ]}
            architectureImage="/architecture/serverless-workflow.png"
            decisions={[
              "Chose JWT-based stateless authentication for scalability and simplicity.",
              "Used DynamoDB with single-table design to optimize for common access patterns.",
              "Implemented Lambda functions per stage to ensure modularity and independent scaling.",
              "Added CloudWatch for centralized logging and monitoring from the start.",
            ]}
            tradeoffs={[
              "Stateless design increases complexity in certain cross-stage operations.",
              "DynamoDB requires careful partition key design to avoid hot partitions.",
              "Lambda cold starts can impact initial request latency.",
            ]}
            note="Public repository and architecture notes coming soon"
          />

          <ProjectCard
            title="Customer Analytics Data Pipeline"
            description={[
              "Designed and implemented an end-to-end data engineering pipeline to process and analyze large-scale customer datasets.",
              "Automated data ingestion, validation, and transformation workflows to produce analytics-ready datasets and stakeholder-facing insights.",
            ]}
            focus="ETL automation, data validation, analytics modeling, business intelligence"
            tech="SQL, Python, Talend, Relational Databases, Power BI"
            architecture={[
              "Raw customer data ingested from source systems",
              "Talend orchestrates ETL workflows with validation checks",
              "Python transformations clean and normalize datasets",
              "Relational database stores analytics-ready tables",
              "Power BI dashboards consume curated datasets for reporting",
            ]}
            architectureImage="/architecture/data-pipeline.png"
            decisions={[
              "Chose Talend for ETL orchestration due to its visual workflow design and enterprise features.",
              "Used Python for custom data transformations that exceeded Talend's built-in capabilities.",
              "Selected relational database for structured analytics data to ensure data integrity and query performance.",
              "Integrated Power BI for business-facing dashboards and self-service analytics.",
            ]}
            tradeoffs={[
              "Talend licensing costs can be significant for large-scale deployments.",
              "Python transformations add complexity compared to pure ETL tool solutions.",
              "Relational database choice may limit scalability for extremely large datasets compared to NoSQL alternatives.",
            ]}
            note="Sample workflows and documentation coming soon"
          />
        </Section>
      </main>

      <Footer />
    </>
  );
}
