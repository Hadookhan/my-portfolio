import '../css/default.css';
import '../css/proj.css';
import { motion } from "framer-motion";

export default function NetworkIntelligence() {

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
            <h2 className="proj-title">Network Intelligence</h2>
            <p className="proj-subtitle">
                A research-oriented Python project that models computer networks as graphs and applies
                algorithmic analysis to evaluate routing efficiency, resilience, and node importance.
            </p>

            <div className="proj-cta-row">
                <a
                className="proj-btn primary"
                href="https://github.com/Hadookhan/Network-intelligence/releases/download/v1.3.2/main.exe"
                target="_blank"
                rel="noreferrer"
                >
                Download EXE
                </a>
                <a
                className="proj-btn primary"
                href="https://github.com/Hadookhan/Network-intelligence"
                target="_blank"
                rel="noreferrer"
                >
                View Source
                </a>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Description</h3>
            <p className="proj-text">
                Network Intelligence explores how real-world networks behave when represented as graphs.
                Routers, switches, and endpoints are modelled as nodes, while connections are edges with
                associated costs. Classical graph algorithms are then applied to extract insight about
                routing efficiency, centrality, and fault tolerance.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                The project includes implementations and analysis of shortest-path algorithms
                (such as Dijkstra's), breadth-first and depth-first traversal, and network-level
                metrics such as closeness and betweenness centrality. These metrics help identify
                critical nodes, bottlenecks, and potential single points of failure.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                While inspired by computer networking (e.g. OSPF routing behaviour),
                the approach is deliberately general and applicable to other domains such as
                social networks, infrastructure graphs, and communication systems.
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
                <p className="tech-label"><b>Algorithms & Graph Theory</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">Dijkstra's algorithm</span>
                    <span className="tech-pill">Breadth-First Search (BFS)</span>
                    <span className="tech-pill">Depth-First Search (DFS)</span>
                    <span className="tech-pill">Shortest paths</span>
                    <span className="tech-pill">Centrality metrics</span>
                    <span className="tech-pill">Betweenness (Brandes')</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Analysis & Tooling</b></p>
                <div className="tech-icons">
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                    alt="NumPy"
                    title="NumPy"
                    />
                    <img
                    src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/scikitlearn/scikitlearn-original.svg"
                    alt="SciPy"
                    title="SciPy"
                    />
                    <span className="tech-pill">Graph metrics</span>
                    <span className="tech-pill">Simulation</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Workflow</b></p>
                <div className="tech-icons">
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
                    <span className="tech-pill">Data-driven analysis</span>
                </div>
                </div>

            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Self-reflection</h3>
            <p className="proj-text">
                This project marked a shift from building applications to exploring systems analytically.
                It pushed me to think in terms of abstractions, representing networks as mathematical
                objects, and to reason about behaviour using algorithms rather than intuition alone.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                I found it particularly interesting how metrics like betweenness centrality expose
                hidden structural importance that isn't obvious from topology alone. This naturally
                connected my interests in algorithms, mathematics, and artificial intelligence,
                and motivated me to explore how learning-based methods could later augment
                classical graph analysis.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                Network Intelligence is intentionally open-ended: it serves as a foundation for
                more advanced work in network optimisation, resilience analysis, and intelligent
                routing, and is the project I'm most interested in evolving toward research-grade depth.
            </p>
            </motion.div>

        </motion.div>
        </section>
    </div>
  );
}
