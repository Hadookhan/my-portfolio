import '../css/default.css';
import '../css/projects.css';
import timelineData from '../helpers/TimeLineData.json';
import TimeLine from '../helpers/TimeLine.jsx';
import { motion } from "framer-motion";

function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const topProjects = [
    {
      title: "Network Intelligence",
      subtitle: "Graph analytics for network routing, resilience, and insight",
      description:
        "A research-driven tool that models networks as graphs and computes metrics (e.g., centrality) to understand robustness and routing behaviour.",
      tags: ["Python", "Graphs", "Algorithms", "Analysis", "ML"],
      link: "https://github.com/Hadookhan/Network-intelligence",
    },
    {
      title: "Chatbot App",
      subtitle: "Full-stack chatbot system with modern infra",
      description:
        "A full-stack chatbot application built with an API + database architecture, designed to be deployed and extended as a production-style system.",
      tags: ["Flask", "PostgreSQL", "Redis", "C#", "Docker", "AWS"],
      link: "https://github.com/Hadookhan/chat-bot-app",
    },
    {
      title: "File Organizer",
      subtitle: "Rule-based file sorting with YAML-driven configuration",
      description:
        "A practical automation tool that organises files based on configurable rules—built for speed, reliability, and repeatable workflows.",
      tags: ["Python", "Automation", "YAML", "CLI"],
      link: "https://github.com/Hadookhan/file-organizer",
    },
  ];

  return (
    <div>
      <h1 className="title">Projects</h1>

      <div className="page-content">

        {/* TOP PROJECTS FIRST */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween" }}
          className="top-projects"
        >
          <h2 className="proj-section-title">Top Projects</h2>

          <ul className="project-grid">
            {topProjects.map((p) => (
              <li key={p.title} className="project-card">
                <div className="project-card-header">
                  <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-subtitle">{p.subtitle}</p>
                </div>

                <p className="project-card-description">{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* TIMELINE BELOW */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween" }}
          className="project-timeline-title"
        >
          <h2 className="proj-section-title">Project Timeline</h2>
        </motion.div>

        <TimeLine timelineData={timelineData} />
      </div>
    </div>
  );
}

export default Projects;
