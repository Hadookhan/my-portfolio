import '../css/timelineitem.css';
import { Link } from 'react-router-dom';

function TimelineItem({ data }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.colour }}>
          {data.category.tag} 
        </span>
        <time>{data.created}</time>
        <p>{data.name}</p>

        {data.links?.source && (
          <p>
            <Link
              to={data.links.source.url}
              className="source-link"
            >
              {data.links.source.text}
            </Link>
          </p>
        )}

        {data.links?.access && (
          <p>
            <a
              href={data.links.access.url}
              target="_blank"
              rel="noopener noreferrer"
              className='access-link'
            >
              {data.links.access.text}
            </a>
          </p>
        )}

        <span className="circle" />
      </div>
    </div>
  );
}

export default TimelineItem;
