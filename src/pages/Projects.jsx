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

  return (
    <div>
      <h1 className="title">Projects</h1>
        <div className="page-content">
          <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: "tween" }}
              className='project-timeline-title'
          >
            <h2 className="proj-timeline-title">Project Timeline</h2>
          </motion.div>
          <TimeLine timelineData={timelineData} />

          <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: "tween" }}
              className='top-projects'
          >
            <h2 className="proj-timeline-title">Top Projects</h2>
            <ul className="project-grid">
              {/* project cards will come here */}
            </ul>
          </motion.div>
        </div>
    </div>
  );
}

export default Projects;
