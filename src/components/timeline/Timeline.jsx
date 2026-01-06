import React from 'react';

export const TimelineItem = ({ time, title, content, right }) => (
  <div className="row g-3 align-items-start timeline-item">
    <div className="col-12 col-md-3 text-md-end text-muted small">
      {time}
    </div>
    <div className="col-12 col-md-9">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h6 className="mb-0">{title}</h6>
            {right}
          </div>
          {content}
        </div>
      </div>
    </div>
  </div>
);

const Timeline = ({ items }) => (
  <div className="vstack gap-3">
    {items.map((it, idx) => (
      <TimelineItem key={idx} {...it} />
    ))}
  </div>
);

export default Timeline;
