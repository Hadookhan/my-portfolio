import '../css/default.css';
import '../css/home.css';
import '../css/cv.css';
import CV from '../assets/Hadi-Khan-Tech-CV.pdf';
import { motion } from "framer-motion";

export default function Cv() {
  return (
    <div>
      <div className="page-content">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween" }}
          className="cv-card"
        >
          <h2 className="cv-title">Hadi Khan — Tech CV</h2>
          <p className="cv-subtitle">
            View the embedded PDF below, or open it in a new tab for the best experience.
          </p>

          <div className="cv-actions">
            <a className="cv-btn primary" href={CV} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <a className="cv-btn" href={CV} download>
              Download PDF
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween", delay: 0.05 }}
          className="cv-viewer-wrap"
        >
          <iframe
            className="cv-iframe"
            src={CV}
            title="Hadi Khan CV PDF"
          />

          <p className="cv-fallback">
            If the PDF doesn't load here,{" "}
            <a className="homeLinks" href={CV} target="_blank" rel="noreferrer">
              open it in a new tab
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
