import Header from "./components/Header";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import MotionSection from "./components/MotionSection";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container">
        <MotionSection>
          <Section title="Skills" id="skills">
            <ul>
              <li>
                <strong>Backend Engineering:</strong> Node.js, Express.js, RESTful API
                Design, JWT Authentication, Async/Await, Centralized Error Handling
              </li>

              <li>
                <strong>Databases:</strong> MySQL, MongoDB, DynamoDB
                (Query Optimization, Indexing)
              </li>

              <li>
                <strong>Cloud & Serverless (AWS):</strong> AWS Lambda, API Gateway,
                IAM, S3, CloudWatch, KMS, Serverless Architecture
              </li>

              <li>
                <strong>Frontend:</strong> Next.js, React, Responsive UI
              </li>

              <li>
                <strong>Data Engineering & Analytics:</strong> Python, ETL Pipelines,
                Data Transformation & Validation, Talend, Data Warehousing Concepts,
                Data Modeling, Batch & Incremental Processing
              </li>

              <li>
                <strong>Business Intelligence & Visualization:</strong> Power BI,
                Dashboard Development, Data Analysis, KPI Reporting
              </li>

              <li>
                <strong>Tools & Engineering Practices:</strong> Git, Bitbucket,
                Docker, Postman, Insomnia, CI/CD, Logging & Monitoring,
                Microservices
              </li>
            </ul>
          </Section>
        </MotionSection>


        <MotionSection>
          <Section title="Experience" id="experience">
            <ExperienceTimeline />
          </Section>
        </MotionSection>

        <MotionSection>
          <Section title="Projects" id="projects">
            <ProjectCard
              title="Serverless Case & Workflow Platform"
              description={[
                "Designed and built a backend-first platform to model how real-world operational or legal requests flow through a system — from intake to resolution.",
                "The project emphasizes scalable API design, stateless authentication, and cloud-native execution using serverless patterns that closely resemble production environments."
              ]}
              focus="API design, request lifecycle management, secure access control, cloud-native execution"
              tech="Node.js, Express, AWS Lambda, API Gateway, DynamoDB, JWT, CloudWatch"
              note="Public repository and architecture notes coming soon"
            />

            <ProjectCard
              title="Customer Analytics Data Pipeline"
              description={[
                "Designed and implemented an end-to-end data engineering pipeline to process and analyze large-scale customer datasets.",
                "Automated data ingestion, validation, and transformation workflows to produce analytics-ready datasets and stakeholder-facing insights."
              ]}
              focus="ETL automation, data validation, analytics modeling, business intelligence"
              tech="SQL, Python, Talend, Relational Databases, Power BI"
              note="Sample workflows and documentation coming soon"
            />
          </Section>
        </MotionSection>
      </main>

      <Footer />
    </>
  );
}
