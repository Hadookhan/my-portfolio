import '../css/default.css';
import '../css/proj.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function ChessGame() {

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
        <section className="project">

        <motion.div
            className="page-content proj-page"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            {/* Header */}
            <motion.div variants={fadeInUp} className="proj-card">
            <h2 className="proj-title">Chess (Sandbox)</h2>
            <p className="proj-subtitle">
                A lightweight chess sandbox with real-time piece movement powered by WebSockets.
                Designed as a learning-focused project for full-stack architecture and deployment.
            </p>

            <div className="proj-cta-row">
                <a
                className="proj-btn primary"
                href="https://www.hadi-khan-chess.com"
                target="_blank"
                rel="noreferrer"
                >
                Open Live Demo
                </a>

                <a
                className="proj-btn"
                href="https://github.com/Hadookhan/chess_v1"
                target="_blank"
                rel="noreferrer"
                >
                View Source
                </a>
            </div>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                <b>Note:</b> the backend may take ~1-2 minutes to wake up after inactivity (cold start),
                so the board can take a moment to load.
            </p>
            </motion.div>

            {/* Demo iframe */}
            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Interactive Board</h3>

            <div className="proj-iframe-wrap">
                <iframe
                src="https://www.hadi-khan-chess.com"
                title="Chess Game"
                className="proj-iframe"
                loading="lazy"
                />
            </div>

            <div className="proj-cta-row" style={{ marginTop: "0.9rem" }}>
                <a
                className="proj-btn primary"
                href="https://www.hadi-khan-chess.com"
                target="_blank"
                rel="noreferrer"
                >
                Go to Website
                </a>
            </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Description</h3>
            <p className="proj-text">
                This project is a simplified recreation of chess, closer to a sandbox than a strict rules engine,
                where players can move pieces freely. It includes real-time piece updates using WebSockets, making
                it a great testbed for synchronisation and client-server communication.
            </p>
            </motion.div>

            {/* Tech Stack (replaces skills learned) */}
            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Tech Stack</h3>

            <div className="tech-grid">

                <div className="tech-category">
                <p className="tech-label"><b>Frontend</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" title="Vite" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Backend</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" title="Flask" />
                    <span className="tech-pill">WebSockets</span>
                    <span className="tech-pill">API</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Deployment & Tools</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux / WSL" title="Linux / WSL" />
                    <span className="tech-pill">Vercel</span>
                    <span className="tech-pill">Render</span>
                    <span className="tech-pill">DNS</span>
                </div>
                </div>

            </div>
            </motion.div>

            {/* Self-reflection */}
            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Self-reflection</h3>
            <p className="proj-text">
                This project was a major milestone because it pushed me beyond basic scripting into full-stack design:
                object-oriented structure, client-server communication, and choosing algorithms/data structures that made
                the system easier to reason about. It was also the first project I tracked properly with Git after learning
                version control fundamentals through Boot.dev.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                I also learned practical deployment skills, hosting a frontend and deploying a backend API service, 
                and how real-world infrastructure constraints (like cold starts) affect user experience.
                Compared to my earlier <Link className="homeLinks" to="/projects/blob-game">Blob Game</Link>, this was a big step up in engineering maturity.
            </p>
            </motion.div>

        </motion.div>
        </section>
    </div>
  );
}
