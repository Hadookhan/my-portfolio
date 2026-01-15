import '../css/default.css';
import '../css/proj.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function PortfolioSite() {

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
            <h2 className="proj-title">Portfolio (This Website)</h2>
            <p className="proj-subtitle">
                A custom-built portfolio to showcase my projects, skills, and progress; designed, implemented,
                and deployed as an evolving engineering project.
            </p>

            <div className="proj-cta-row">
                <a
                className="proj-btn primary"
                href="https://github.com/Hadookhan/my-portfolio"
                target="_blank"
                rel="noreferrer"
                >
                View Source
                </a>
                <a className="proj-btn" href="https://yourdomain.com" target="_blank" rel="noreferrer">
                Live Site (this)
                </a>
                
            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Description</h3>
            <p className="proj-text">
                This portfolio is the central hub for my work. I built it from scratch instead of using a template
                builder because I wanted complete control over the design, content, and deployment pipeline, and
                to treat the site itself as a project that demonstrates real engineering practices.
            </p>
            </motion.div>

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
                <p className="tech-label"><b>DevOps & Workflow</b></p>
                <div className="tech-icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" title="Docker" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux / WSL" title="Linux / WSL" />
                    <span className="tech-pill">CI/CD</span>
                    <span className="tech-pill">Auto-deploy</span>
                    <span className="tech-pill">DNS</span>
                </div>
                </div>

            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Self-reflection</h3>

            <p className="proj-text">
                I built this portfolio as a place to present my work clearly and professionally, but I also wanted it
                to demonstrate my ability to build and ship software. After my{" "}
                <Link className="homeLinks" to="/projects/chess-game">Chess Game</Link> project, I was more confident with
                React and frontend structure, which made it easier to design this site cleanly.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                A key improvement here was integrating DevOps practices: I used Docker and a CI/CD pipeline so that every
                push can trigger automated checks and deployment. This makes iteration fast and reliable, whenever I add
                new projects or improvements, the site stays up-to-date without manual redeploys.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                Next improvements I would like to add include better performance optimisation (image/lazy loading),
                instant messaging features, and optional analytics to understand which sections visitors find most useful. 
                The analytics idea can tie in nicely with my ML path.
            </p>
            </motion.div>

        </motion.div>
        </section>
    </div>
  );
}
