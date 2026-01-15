import '../css/default.css';
import '../css/proj.css';
import faceDetectionVideo from '../assets/face_detection_video.mp4';
import { motion } from "framer-motion";

export default function FaceDetector() {

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
    <section className="project">
      <h1 className="title">Project: Face Detector</h1>

      <motion.div
        className="page-content proj-page"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* Header */}
        <motion.div variants={fadeInUp} className="proj-card">
          <h2 className="proj-title">Face Detector</h2>
          <p className="proj-subtitle">
            A <b>PC-only</b> computer vision project that uses a device camera to detect and track faces in real time.
            Includes one-click setup scripts for Windows and Linux.
          </p>

          <div className="proj-cta-row">
            <a
              className="proj-btn primary"
              href="https://github.com/Hadookhan/face-detection-ai/releases/download/v1.0/faceDetection.zip"
              target="_blank"
              rel="noreferrer"
            >
              Download ZIP
            </a>

            <a
              className="proj-btn"
              href="https://github.com/Hadookhan/face-detection-ai"
              target="_blank"
              rel="noreferrer"
            >
              View Source
            </a>
          </div>

          {/* Status note */}
          <div className="proj-alert">
            <b>Status:</b> currently under maintenance — I'm fixing a runtime/setup issue and will update shortly.
          </div>
        </motion.div>

        {/* Video */}
        <motion.div variants={fadeInUp} className="proj-card">
          <h3 className="proj-section-title">Demo video</h3>

          <video className="proj-media" controls muted>
            <source src={faceDetectionVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeInUp} className="proj-card">
          <h3 className="proj-section-title">Description</h3>
          <p className="proj-text">
            This project interfaces with the system camera and performs face detection/tracking using OpenCV.
            I originally experimented with <i>face_recognition</i>, but dependency constraints (notably dlib) made
            setup and portability difficult, so I rebuilt the pipeline around OpenCV for a cleaner installation path.
          </p>
        </motion.div>

        {/* Tech Stack */}
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
              <p className="tech-label"><b>Computer Vision</b></p>
              <div className="tech-icons">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                  alt="OpenCV"
                  title="OpenCV"
                />
              </div>
            </div>

            <div className="tech-category">
              <p className="tech-label"><b>Environment & Tooling</b></p>
              <div className="tech-icons">
                <span className="tech-pill">pyenv</span>
                <span className="tech-pill">venv</span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  alt="Linux / WSL"
                  title="Linux / WSL"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  title="Git"
                />
              </div>
            </div>

            <div className="tech-category">
              <p className="tech-label"><b>Setup Scripts</b></p>
              <div className="tech-icons">
                <span className="tech-pill">PowerShell</span>
                <span className="tech-pill">Shell (bash)</span>
                <span className="tech-pill">One-click installer</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to install */}
        <motion.div variants={fadeInUp} className="proj-card">
          <h3 className="proj-section-title">Install & Use</h3>

          <div className="proj-alert subtle">
            <b>Requirement:</b> ensure a camera is enabled and accessible on the device before running.
          </div>

          <ol className="proj-steps">
            <li>
              Download the ZIP:{" "}
              <a
                className="homeLinks"
                href="https://github.com/Hadookhan/face-detection-ai/releases/download/v1.0/faceDetection.zip"
                target="_blank"
                rel="noreferrer"
              >
                faceDetection.zip
              </a>
            </li>
            <li>Extract the folder.</li>
            <li>
              Locate <i>dataset/persons</i>. If it doesn’t exist, create the directory.
            </li>
            <li>
              Add a clear, front-facing image of yourself into <i>dataset/persons</i>.
            </li>
            <li>
              (Optional) Rename the folder to match the person's name for clarity.
            </li>
            <li>
              <b>Windows:</b> run <i>setup_and_run.ps1</i>
            </li>
            <li>
              <b>Ubuntu/Linux:</b> run <i>setup_and_run.sh</i>
            </li>
          </ol>
        </motion.div>

        {/* Self-reflection */}
        <motion.div variants={fadeInUp} className="proj-card">
          <h3 className="proj-section-title">Self-reflection</h3>
          <p className="proj-text">
            This was my first complete computer vision project, and it taught me a lot about real-world dependency
            management. I learned why certain libraries can be painful to install across platforms, and how to design
            a more portable setup using scripts that bootstrap the environment automatically. I also used pyenv to pin
            Python versions for compatibility when required.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
