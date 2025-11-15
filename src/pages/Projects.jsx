import '../css/default.css';
import '../css/projects.css';
import TimeLine from '../helpers/TimeLine.jsx';

function Projects() {
  return (
    <div>
      <h1 className="title">Projects</h1>
      <div className="page-content">
        <TimeLine />

        <ul className="project-grid">
          {/* project cards go here later */}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
