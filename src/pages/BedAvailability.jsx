import React, { useState } from 'react';
import BedGrid from '../components/bed/BedGrid.jsx';
import { mockWards, getBedsByWard } from '../services/mockData.js';

const BedAvailability = () => {
  const [wards] = useState(mockWards.map(ward => ({
    name: ward.name,
    beds: getBedsByWard(ward.name),
  })));

  const onSelect = (bed) => {
    // In real app, open bed details or allocate
    // eslint-disable-next-line no-alert
    alert(`Selected ${bed.code} (${bed.status})${bed.patientId ? ` - Patient: ${bed.patientId}` : ''}`);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="text-primary mb-0">Bed Availability</h5>
        <span className="text-muted small">Centralized mock data</span>
      </div>
      <div className="row g-3">
        {wards.map((w) => (
          <div key={w.name} className="col-12 col-xl-6">
            <BedGrid wardName={w.name} beds={w.beds} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedAvailability;
