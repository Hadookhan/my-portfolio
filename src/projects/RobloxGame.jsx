import '../css/default.css';
import '../css/proj.css';
import robloxGame from '../assets/robloxGame.png';
import { motion } from "framer-motion";

export default function RobloxGame() {

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
        <h1 className="title">Project: Roblox Game</h1>
        <section className="project">

        <motion.div
            className="page-content proj-page"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            <motion.div variants={fadeInUp} className="proj-card">
            <h2 className="proj-title">Grow a Family</h2>
            <p className="proj-subtitle">
                A Roblox tycoon-style game prototype designed for a younger audience. Built to explore the Roblox
                engine, Luau scripting, and interactive game systems.
            </p>

            <div className="proj-cta-row">
                <a
                className="proj-btn primary"
                href="https://www.roblox.com/games/74812128527208/Grow-a-Family#!/about"
                target="_blank"
                rel="noreferrer"
                >
                View on Roblox
                </a>
            </div>

            <div className="proj-alert subtle">
                <b>Status:</b> prototype / paused. I didn't fully ship this project, but it was valuable for learning
                game-system design and pipeline work.
            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <img
                className="proj-img"
                src={robloxGame}
                alt="Screenshot of the Roblox game 'Grow a Family'"
                title="Grow a Family"
            />
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Description</h3>
            <p className="proj-text">
                “Grow a Family” is a tycoon-inspired Roblox experience where the player progresses by interacting with
                systems and upgrades. The project was built as an exploration of Roblox Studio development: scripting,
                UI/UX building, asset workflows, and creating a playable loop.
            </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Tech Stack</h3>

            <div className="tech-grid">

                <div className="tech-category">
                <p className="tech-label"><b>Platform</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">Roblox Studio</span>
                    <span className="tech-pill">Game Prototype</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Language</b></p>
                <div className="tech-icons">

                    <span className="tech-pill">Luau (Roblox Lua)</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Game Systems</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">Pub/Sub patterns</span>
                    <span className="tech-pill">Event-driven scripting</span>
                    <span className="tech-pill">UI Tween animations</span>
                </div>
                </div>

                <div className="tech-category">
                <p className="tech-label"><b>Creation Pipeline</b></p>
                <div className="tech-icons">
                    <span className="tech-pill">Asset creation</span>
                    <span className="tech-pill">Map building</span>
                    <span className="tech-pill">UI/UX</span>
                    <span className="tech-pill">Blender (3D)</span>
                </div>
                </div>

            </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="proj-card">
            <h3 className="proj-section-title">Self-reflection</h3>
            <p className="proj-text">
                This project was intentionally different from my usual software projects, as I wanted to understand how
                game development works in practice. I experimented with Luau and learned how Roblox projects quickly
                become multidisciplinary: programming, level design, UI, asset production, and playtesting.
            </p>

            <p className="proj-text" style={{ marginTop: "0.9rem" }}>
                Although I didn't fully finish and ship the game, it taught me valuable lessons about scope and production
                planning. If I revisit it, I'd focus on shipping a smaller “vertical slice” first, then expanding in
                iterations with clearer milestones.
            </p>
            </motion.div>

        </motion.div>
        </section>
    </div>
  );
}
