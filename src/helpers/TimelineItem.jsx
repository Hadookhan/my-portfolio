import '../css/timelineitem.css';

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
            <a
              href={window.location.href + data.links.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className='link'
            >
              {data.links.source.text}
            </a>
          </p>
        )}

        {data.links?.access && (
          <p>
            <a
              href={data.links.access.url}
              target="_blank"
              rel="noopener noreferrer"
              className='link'
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
