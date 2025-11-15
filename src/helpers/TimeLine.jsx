import timelineData from './TimeLineData.json';
import TimelineItem from './TimelineItem.jsx';
import '../css/timeline.css';

function TimeLine() {
  return (
    <div className="timeline-container">
      {timelineData.length > 0 &&
        timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
    </div>
  );
}

export default TimeLine;
