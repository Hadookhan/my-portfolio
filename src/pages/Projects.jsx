import '../css/default.css';
import '../css/projects.css';
import TimeLine from '../helpers/TimeLine.jsx';
import { motion } from "framer-motion";

function Projects() {

  const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

  return (
    <div>
      <h1 className="title">Projects</h1>
        <div className="page-content">
          <h2 className="proj-timeline-title">Project Timeline</h2>
          <TimeLine />

          <h2 className="proj-timeline-title">Top Projects</h2>
          <ul className="project-grid">
            {/* project cards will come here */}
          </ul>
        </div>
    </div>
  );
}

export default Projects;
