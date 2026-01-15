import '../css/default.css';
import '../css/proj.css';
import chatbotAppImg from '../assets/mazeSolver.png'; // rename asset later if you want
import { motion } from "framer-motion";

export default function ChatbotApp() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      }
    }
  };

  return (
    <div>
        <h1 className="title">Project: Chatbot App</h1>
        <section className="project">

        <motion.div
            className="page-content proj-page"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            <motion.div variants={fadeInUp} className="proj-card">
            <h2 className="proj-title">Chatbot App</h2>
            <p className="proj-subtitle">
                A <b>PC-only</b> chatbot application with a production-style architecture:
                a backend API, caching, a database, and deployment tooling.
            </p>

            <div className="proj-cta-row">
                <a
                className="proj-btn primary"
                href="https://github.com/Hadookhan/chat-bot-app/releases/download/v1.1/Release.zip"
                target="_blank"
                rel="noreferrer"
                >
                Download ZIP
                </a>

                <a
                className="proj-btn"
                href="https://github.com/Hadookhan/chat-bot-app"
                target="_blank"
                rel="noreferrer"
                >
                View Source
                </a>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <img
                className="proj-img"
                src={chatbotAppImg}
                alt="Screenshot of the Chatbot App project"
                title="Chatbot App"
            />
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Description</h3>
            <p className="proj-text">
                This application allows users to interact with a chatbot through a desktop interface.
                Under the hood, it's structured as a full-stack system with a backend service, persistence,
                caching, and deployment considerations — designed to be extendable and maintainable.
            </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Tech Stack</h3>

            <div className="tech-grid">

                <div className="tech-category">
                <p className="tech-label"><b>Languages</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" title="C#" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Backend & APIs</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" title="Flask" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="NGINX" title="NGINX" />
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Desktop</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET / C# Forms" title=".NET / C# Forms" />
                    <span className="tech-pill">WinForms</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Database & Caching</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" title="Redis" />
                    <span className="tech-pill">SQLAlchemy</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Deployment & Tooling</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" title="Docker" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" title="AWS" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux / WSL" title="Linux / WSL" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" />
                </div>
                </div>

            </div>
            </motion.div>

            {/* Self-reflection */}
            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Self-reflection</h3>
            <p className="proj-text">
                This project helped me understand how real applications are structured beyond just “writing code”.
                I learned how to separate concerns across components, think about deployment, and use caching and
                persistence intentionally. If I were to iterate on it again, I'd focus on improving error handling,
                observability (logging/metrics), and strengthening the interface between the desktop client and API.
            </p>
            </motion.div>

        </motion.div>
        </section>
    </div>
  );
}
