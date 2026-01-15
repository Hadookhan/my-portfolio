import '../css/default.css';
import '../css/home.css';
import { Link } from 'react-router-dom';
import emailLogo from '../assets/emailLogo.png';
import githubLogo from '../assets/githubLogo.png';
import linkedInLogo from '../assets/linkedInLogo.png';
import headshot from '../assets/headshot.jpg';
import { motion } from "framer-motion";

export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>

      <div className="page-content">

        {/* HERO */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween" }}
          className="home-hero"
        >
          <div className="home-hero-left">
            <h2 className="home-hero-title">Hadi Khan</h2>
            <p className="home-hero-subtitle">
              Computer Science (BSc Hons) · Manchester Metropolitan University
            </p>
            <p className="home-hero-body">
              I build research-oriented software and intelligent systems — with a focus on
              AI, deep learning foundations, and scalable engineering.
            </p>

            <div className="home-hero-cta">
              <Link to="/projects" className="home-btn primary">View Projects</Link>
              <Link to="/about" className="home-btn">About Me</Link>
              <Link to="/contact" className="home-btn">Contact</Link>
            </div>
          </div>

          <div className="home-hero-right">
            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: "tween" }}
              src={headshot}
              alt="Hadi Khan headshot"
              className="home-headshot"
            />
          </div>
        </motion.section>

        {/* HIGHLIGHTS */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween", delay: 0.05 }}
          className="home-section"
        >
          <h3 className="home-section-title">What I work on</h3>

          <div className="home-grid">
            <div className="home-card">
              <h4 className="home-card-title">AI & Foundations</h4>
              <p className="home-card-text">
                Deep learning fundamentals, optimisation intuition, and building strong mathematical reasoning
                to support research-led engineering.
              </p>
            </div>

            <div className="home-card">
              <h4 className="home-card-title">Full-Stack Systems</h4>
              <p className="home-card-text">
                Building production-style apps with modern tooling — APIs, databases, deployment, and clean UX.
              </p>
            </div>

            <div className="home-card">
              <h4 className="home-card-title">Networks & Analysis</h4>
              <p className="home-card-text">
                Network design and graph-style analysis to evaluate performance, resilience, and routing behaviour.
              </p>
            </div>
          </div>
        </motion.section>

        {/* FEATURED LINKS / QUICK CONTACT */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween", delay: 0.1 }}
          className="home-section"
        >
          <h3 className="home-section-title">Quick links</h3>

          <div className="home-links">
            <a className="home-link" href="mailto:hadikhan05@hotmail.co.uk">
              <img src={emailLogo} alt="Email" className="home-link-icon" />
              <span>Email</span>
            </a>

            <a className="home-link" href="https://www.github.com/Hadookhan" target="_blank" rel="noreferrer">
              <img src={githubLogo} alt="GitHub" className="home-link-icon" />
              <span>GitHub</span>
            </a>

            <a className="home-link" href="https://www.linkedin.com/in/hadi-khan-ab922229a" target="_blank" rel="noreferrer">
              <img src={linkedInLogo} alt="LinkedIn" className="home-link-icon" />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="home-footnote">
            For collaboration, research opportunities, or project enquiries, email is the best way to reach me.
          </p>
        </motion.section>

      </div>
    </div>
  );
}
