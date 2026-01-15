import '../css/default.css';
import '../css/proj.css';
import mazeSolver from '../assets/mazeSolver.png';
import { motion } from "framer-motion";

export default function MazeSolver() {

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

            <motion.div variants={fadeInUp} className="proj-card">
            <h2 className="proj-title">Maze Solver</h2>
            <p className="proj-subtitle">
                A <b>PC-only</b> Python program that generates a random maze and solves it using
                Depth-First Search (DFS).
            </p>

            <div className="proj-cta-row">
                <a
                className="proj-btn primary"
                href="https://github.com/Hadookhan/Maze-Solver/releases/download/Complete/Maze-Solver-main.zip"
                target="_blank"
                rel="noreferrer"
                >
                Download ZIP
                </a>

                <a
                className="proj-btn"
                href="https://github.com/Hadookhan/Maze-Solver"
                target="_blank"
                rel="noreferrer"
                >
                View Source
                </a>
            </div>

            <div className="proj-alert subtle">
                <b>Note:</b> This was completed as a guided project through{" "}
                <a className="homeLinks" href="https://www.boot.dev" target="_blank" rel="noreferrer">Boot.dev</a>,
                and I used it to reinforce graph traversal fundamentals.
            </div>

            <div className="proj-alert">
                <b>Status:</b> currently under maintenance — I'm fixing a runtime/setup issue and will update shortly.
            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <img
                className="proj-img"
                src={mazeSolver}
                alt="Screenshot of the Maze Solver project"
                title="Completed Maze"
            />
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Description</h3>
            <p className="proj-text">
                The program builds a randomized maze and then solves it using DFS. The visual output helped me
                internalise how traversal decisions affect exploration and backtracking. It also served as a good
                introduction to building small visual tools in Python.
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
                <p className="tech-label"><b>Algorithms</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">Depth-First Search (DFS)</span>
                    <span className="tech-pill">Graph traversal</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>UI / Visualisation</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">tkinter</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Workflow</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">Testing</span>
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                    title="Git"
                    />
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    alt="Linux / WSL"
                    title="Linux / WSL"
                    />
                </div>
                </div>

            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Self-reflection</h3>
            <p className="proj-text">
                I completed this right after learning graph traversal (DFS/BFS), and it was one of the first projects
                where I felt the algorithm “click” through visual feedback. It strengthened my confidence applying DFS
                in a practical setting and taught me how to connect algorithmic logic to a user-facing visualisation.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                It also introduced me to <i>tkinter</i> for simple GUI rendering, plus the value of writing tests to
                keep behaviour reliable as the code evolves.
            </p>
            </motion.div>

        </motion.div>
        </section>
    </div>
  );
}
