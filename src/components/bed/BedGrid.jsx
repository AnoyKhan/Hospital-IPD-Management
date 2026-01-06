import React from 'react';

const STATUS_MAP = {
  Available: { className: 'bg-success', label: 'Available' },
  Occupied: { className: 'bg-danger', label: 'Occupied' },
  Reserved: { className: 'bg-warning', label: 'Reserved' },
};

const BedCell = ({ bed, onSelect }) => {
  const status = STATUS_MAP[bed.status] || STATUS_MAP.Available;
  return (
    <button
      type="button"
      className={`btn btn-light border d-flex flex-column align-items-center justify-content-center p-2 bed-cell`}
      onClick={() => onSelect && onSelect(bed)}
      title={`${bed.code} • ${status.label}`}
      style={{ minHeight: 72 }}
    >
      <div className="fw-semibold">{bed.code}</div>
      <span className={`badge ${status.className} mt-1`}>{status.label}</span>
    </button>
  );
};

const BedLegend = () => (
  <div className="d-flex align-items-center gap-2 small text-muted">
    <span className="badge bg-success">Available</span>
    <span className="badge bg-danger">Occupied</span>
    <span className="badge bg-warning">Reserved</span>
  </div>
);

const BedGrid = ({ wardName, beds = [], onSelect }) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="card-title mb-0">{wardName}</h6>
          <BedLegend />
        </div>
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {beds.map((bed) => (
            <BedCell key={bed.code} bed={bed} onSelect={onSelect} />
          ))}
          {beds.length === 0 && (
            <div className="text-muted small">No beds configured</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BedGrid;
