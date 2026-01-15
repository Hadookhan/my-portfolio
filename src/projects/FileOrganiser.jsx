import '../css/default.css';
import '../css/proj.css';
import fileOrganiser from '../assets/fileOrganiser.png';
import { motion } from "framer-motion";

export default function FileOrganiser() {

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
        <h1 className="title">Project: File Organiser</h1>
        <section className="project">

        <motion.div
            className="page-content proj-page"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            <motion.div variants={fadeInUp} className="proj-card">
            <h2 className="proj-title">File Organiser</h2>
            <p className="proj-subtitle">
                A <b>PC-only</b> desktop utility that automatically organises files based on
                user-defined rules. Designed to explore file systems, traversal algorithms,
                and configuration-driven behaviour.
            </p>

            <div className="proj-cta-row">
                <a
                className="proj-btn primary"
                href="https://github.com/Hadookhan/FileOrganizer/releases/download/v1.0/FileOrganizer.zip"
                target="_blank"
                rel="noreferrer"
                >
                Download ZIP
                </a>

                <a
                className="proj-btn"
                href="https://github.com/Hadookhan/FileOrganizer"
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
                src={fileOrganiser}
                alt="Screenshot of the File Organiser project"
                title="File Organiser Menu"
            />
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Description</h3>
            <p className="proj-text">
                The application allows users to specify a source directory and a target directory.
                Once execution is confirmed, files are moved and categorised automatically into
                structured folders based on configurable rules. The focus of the project was on
                correctness, safety, and predictable behaviour when interacting with real file systems.
            </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Tech Stack</h3>

            <div className="tech-grid">

                <div className="tech-category">
                <p className="tech-label"><b>Language & Framework</b></p>
                <div className="tech-icons">
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    alt="C#"
                    title="C#"
                    />
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
                    alt=".NET"
                    title=".NET Framework"
                    />
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Core Concepts</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">File systems</span>
                    <span className="tech-pill">Tree traversal</span>
                    <span className="tech-pill">Regex</span>
                    <span className="tech-pill">Menu-driven UI</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Configuration & Tooling</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">YAML</span>
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
                    <span className="tech-pill">Visual Studio 2022</span>
                </div>
                </div>

            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Self-reflection</h3>
            <p className="proj-text">
                This was my first project using C# and the .NET framework, and it significantly
                strengthened my confidence working with strongly typed languages and file-system APIs.
                I built it alongside my university C# module to reinforce what I was learning in practice.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                A particularly valuable part of the project was designing rule sets using YAML outside
                of CI/CD contexts, which pushed me to think more carefully about configuration-driven
                behaviour. Overall, it helped me become more comfortable working with real files and
                implementing safe, structured automation.
            </p>
            </motion.div>

        </motion.div>
        </section>
    </div>
  );
}
