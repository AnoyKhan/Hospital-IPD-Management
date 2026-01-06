import React from 'react';

const MAP = {
  Pending: 'bg-warning',
  Requested: 'bg-info',
  InProgress: 'bg-primary',
  Completed: 'bg-success',
  Rejected: 'bg-danger',
};

const StatusBadge = ({ status }) => (
  <span className={`badge ${MAP[status] || 'bg-secondary'}`}>{status}</span>
);

export default StatusBadge;
