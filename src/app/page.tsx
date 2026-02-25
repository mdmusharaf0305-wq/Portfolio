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
          company={{
            name: "Xine Technology Solutions Pvt Ltd",
            logo: "logos/xine.png",
          }}
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
          company={{
            name: "Xine Technology Solutions Pvt Ltd",
            logo: "logos/xine.png",
          }}
            title="AI Chatbot Platform (Amazon Bedrock)"
            description={[
              "Designed and deployed a production-grade conversational platform powered by Amazon Bedrock with structured prompt engineering and agent-driven workflows.",
              "Built secure backend integrations enabling the chatbot to execute API-based tasks through controlled action groups."
            ]}
            focus="Conversational AI orchestration, agent workflows, secure API execution, production deployment"
            tech="Node.js, Express.js, Amazon Bedrock, AWS IAM, REST APIs, Vercel"
            architecture={[
              "Client sends user query to backend API",
              "Backend validates request and prepares structured prompt context",
              "Amazon Bedrock model invoked with agent configuration",
              "Custom action groups trigger secure backend API workflows",
              "Responses returned to client with controlled formatting and safety validation",
              "System deployed to production with environment-based configuration"
            ]}
            architectureImage="/architecture/chatbot.png"
            decisions={[
              "Designed structured prompt templates to reduce hallucination and improve response consistency.",
              "Implemented controlled action groups to securely execute backend tasks.",
              "Separated orchestration logic from API layer for maintainability.",
              "Applied iterative prompt refinement to improve reliability and deterministic behavior.",
              "Validated system stability through end-to-end testing across multiple scenarios."
            ]}
            tradeoffs={[
              "External model invocation introduces latency and cost considerations.",
              "Agent-based execution requires strict permission management to avoid misuse.",
              "Prompt engineering requires ongoing tuning to maintain response quality."
            ]}
            note="Production-stabilized AI system with continuous prompt optimization and agent workflow enhancements."
          />

          <ProjectCard
           company={{
            name: "Mphasis Pvt Ltd",
            logo: "logos/mphasis.png",
          }}
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
        {/* ===================== */}
        {/* FEATURED PROJECT */}
        {/* ===================== */}
        <Section title="Featured Project" id="cashflow-platform">
          <ProjectCard
            title="Real-Time Cashflow Management Platform"
            liveUrl="https://cash-flow-pro-sigma.vercel.app/en"
            description={[
              "Independently designed, developed, and deployed a production-grade cashflow management platform to track income, expenses, and financial health in real time.",
              "Owned the system end-to-end — from backend architecture and API design to production deployment and post-release improvements."
            ]}
            focus="Financial data processing, secure API design, production deployment, scalable backend architecture"
            tech="Node.js, Express.js, MongoDB, JWT, REST APIs, Vercel"
            architecture={[
              "Client applications interact with backend services via REST APIs",
              "Node.js backend handles authentication, validation, and financial business logic",
              "MongoDB stores transactional and aggregated financial records with indexed collections",
              "Server-side logic deployed to Vercel production environment",
              "Environment variables configured securely for production runtime"
            ]}
            architectureImage="/architecture/cashflow_pro.png"
            decisions={[
              "Designed a modular backend structure to support scalable financial tracking.",
              "Chose MongoDB for flexible financial modeling and aggregation capabilities.",
              "Implemented JWT-based stateless authentication for secure access control.",
              "Optimized database queries with indexing for aggregation-heavy workloads.",
              "Managed production deployment and environment configuration using Vercel."
            ]}
            tradeoffs={[
              "NoSQL schema flexibility requires strict validation at the application layer.",
              "Financial aggregation queries require careful index planning for performance.",
              "Serverless-style deployments can introduce cold-start latency under low traffic."
            ]}
            note="Live production deployment on Vercel with ongoing enhancements to analytics and forecasting."
          />
        </Section>
      </main>

      <Footer />
    </>
  );
}
