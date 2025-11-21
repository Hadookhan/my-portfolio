import timelineData from './TimeLineData.json';
import TimelineItem from './TimelineItem.jsx';
import '../css/timeline.css';
import { motion } from "framer-motion";

function TimeLine() {

  return (
    <div className="timeline-container">
      {timelineData.length > 0 &&
        timelineData.map((data, idx) => {
          const side = idx % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={idx}
              className={`timeline-row timeline-row-${side}`}
              initial={{ opacity:0, x: side === "left" ? -40 : 40 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, type: "tween" }}
            >
              <TimelineItem data={data} />
            </motion.div>
          );
        })}
    </div>
  );
}

export default TimeLine;