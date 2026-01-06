import React from 'react';
import VitalSignsChart from '../components/charts/VitalSignsChart.jsx';

const VitalSigns = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">Vital Signs Chart</h5>
        <span className="text-muted small">IPD-001</span>
      </div>
      <div className="row g-2 g-md-3">
        <div className="col-12">
          <VitalSignsChart />
        </div>
      </div>
    </div>
  );
};

export default VitalSigns;
