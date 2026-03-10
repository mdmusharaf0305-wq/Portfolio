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
            title="Inventory & Customer Analytics Reporting Platform"
            description={[
              "Extended the inventory management system by processing registered user and purchase transaction data stored in DynamoDB to generate structured analytical datasets.",
              "Developed Power BI dashboards tracking inventory levels, customer counts, recurring customers, and purchasing behavior to support data-driven decisions."
            ]}
            focus="Inventory analytics, customer behavior analysis, ETL pipelines, business intelligence reporting"
            tech="Talend, DynamoDB, SQL, Power BI"
            architecture={[
              "Inventory management system stores registered users and purchase transactions in DynamoDB",
              "Talend ETL pipelines extract, clean, and transform operational datasets",
              "Structured analytical datasets prepared for reporting and visualization",
              "Power BI dashboards connect to processed datasets to visualize KPIs such as inventory levels and purchasing behavior",
              "Business teams analyze dashboards to monitor demand trends and customer activity"
            ]}
            architectureImage="/architecture/inventory-customer-analytics.png"
            decisions={[
              "Used Talend ETL pipelines to transform DynamoDB operational data into structured analytical datasets.",
              "Designed dashboards focusing on key business metrics including inventory levels, customer counts, and purchasing patterns.",
              "Optimized data transformation workflows to support efficient dashboard refresh cycles.",
              "Structured reporting to provide clear visibility into demand trends and customer behavior."
            ]}
            tradeoffs={[
              "Analytics insights depend on ETL pipeline refresh schedules.",
              "Operational DynamoDB data required transformation before being suitable for analytical reporting."
            ]}
            note="Analytics extension built on top of the production inventory management system to provide inventory monitoring and customer purchasing insights."
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
          <ProjectCard
            company={{
              name: "Mphasis Pvt Ltd",
              logo: "logos/mphasis.png",
            }}
            title="Product Inventory Analytics & Reporting Dashboard"
            description={[
              "Processed product inventory datasets to generate structured analytical data for reporting and visualization.",
              "Built Power BI dashboards to track product inventory levels."
            ]}
            focus="Inventory analytics, ETL workflows, demand analysis, business intelligence reporting"
            tech="Talend, MySQL, Snowflake, SQL, Power BI"
            architecture={[
              "Raw product inventory data collected from operational databases",
              "Talend ETL workflows extract, clean, and transform inventory datasets",
              "Structured data stored and optimized within Snowflake",
              "SQL queries aggregate product inventory metrics",
              "Power BI dashboards connect to processed datasets for inventory visualization",
              "Business users monitor inventory levels and demand trends through dashboards"
            ]}
            architectureImage="/architecture/product-inventory-analytics.png"
            decisions={[
              "Designed ETL pipelines using Talend to ensure reliable transformation of product inventory data.",
              "Optimized SQL queries to improve performance of inventory data pipelines.",
              "Structured datasets to support efficient Power BI reporting and faster dashboard refresh cycles.",
              "Focused dashboard design on key inventory KPIs such as stock levels, demand trends, and customer purchasing patterns."
            ]}
            tradeoffs={[
              "Inventory insights depend on the frequency of ETL pipeline refresh cycles.",
              "Accurate inventory analytics required careful validation during data transformation stages."
            ]}
            note="Analytics solution enabling product inventory monitoring, demand trend analysis, and data-driven inventory management decisions."
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
        {/* ===================== */}
        {/* CERTIFICATIONS */}
        {/* ===================== */}
        <Section title="Certifications" id="certifications">
          <div
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              padding: "24px",
              textAlign: "center",
              border: "1px solid #e5e7eb"
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#111827"
              }}
            >
              Data Visualization Certificate
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "20px",
                lineHeight: "1.6"
              }}
            >
              Certification focused on data visualization techniques, dashboard design,
              and transforming datasets into clear visual insights for business
              decision-making.
            </p>

            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid #e5e7eb"
              }}
            >
              <img
                src="/Data Visualization Cetitificate.png"
                alt="Data Visualization Certificate"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block"
                }}
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
