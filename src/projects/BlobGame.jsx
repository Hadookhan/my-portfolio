import '../css/default.css';
import '../css/proj.css';
import blobGame from '../assets/blobGame.png';
import { motion } from "framer-motion";

export default function BlobGame() {

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
            <h2 className="proj-title">Blob Game</h2>
            <p className="proj-subtitle">
                A lightweight single-player arcade game built with Python + Pygame. <b>PC only.</b>
            </p>

            <div className="proj-cta-row">
                <a
                className="proj-btn primary"
                href="https://github.com/Hadookhan/blob/releases/download/latest/blob-main.zip"
                target="_blank"
                rel="noreferrer"
                >
                Download ZIP
                </a>

                <a
                className="proj-btn"
                href="https://github.com/Hadookhan/blob"
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
                src={blobGame}
                alt="Screenshot of the Blob Game project"
                title="Blob Game"
            />
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Description</h3>
            <p className="proj-text">
                Blob Game is a simple arcade-style experience focused on core gameplay: movement, timing, and reaction speed.
                The difficulty scales as you play, and the objective is to survive while collecting as many coins as possible.
            </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Tech Stack</h3>

            <div className="tech-grid">
                <div className="tech-category">
                <p className="tech-label"><b>Language</b></p>
                <div className="tech-icons">
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    title="Python"
                    />
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Framework / Library</b></p>
                <div className="tech-icons">
                    <img
                    src="https://img.shields.io/badge/Pygame-1a1a1a?style=for-the-badge&logo=python&logoColor=white"
                    alt="Pygame"
                    title="Pygame"
                    className="tech-badge"
                    />
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Focus</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">2D Game Dev</span>
                    <span className="tech-pill">Game Loop</span>
                    <span className="tech-pill">Collision</span>
                    <span className="tech-pill">Difficulty Scaling</span>
                </div>
                </div>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Self-reflection</h3>
            <p className="proj-text">
                This was the first project I completed end-to-end, so the code is rough compared to my newer work.
                However, it was a major milestone — it taught me how to finish a full program, iterate quickly, and learn
                through building. It also pushed me to strengthen my fundamentals through structured courses afterwards.
            </p>
            </motion.div>

        </motion.div>
        </section>
    </div>
  );
}
