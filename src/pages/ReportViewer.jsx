import React from 'react';
import { useLocation } from 'react-router-dom';
import ReportLayout from '../components/reports/ReportLayout.jsx';
import StatusBadge from '../components/common/StatusBadge.jsx';

const ReportViewer = () => {
  const { state } = useLocation();
  const report = state?.report || {
    id: 'REQ-001',
    patientId: 'IPD-001',
    test: 'CBC',
    status: 'Completed',
    results: [
      { name: 'Hemoglobin', value: '13.5 g/dL', ref: '13.2 - 16.6' },
      { name: 'WBC', value: '6,200 /µL', ref: '4,000 - 11,000' },
      { name: 'Platelets', value: '180,000 /µL', ref: '150,000 - 450,000' },
    ],
  };

  return (
    <div className="container py-4" style={{ maxWidth: 800 }}>
      <ReportLayout
        title={`Lab Report: ${report.test}`}
        header={
          <div className="row g-2">
            <div className="col-md-3"><strong>Req ID:</strong> {report.id}</div>
            <div className="col-md-3"><strong>Patient:</strong> {report.patientId}</div>
            <div className="col-md-3"><strong>Test:</strong> {report.test}</div>
            <div className="col-md-3"><StatusBadge status={report.status} /></div>
          </div>
        }
      >
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-muted small text-uppercase">Parameter</th>
                <th className="text-muted small text-uppercase">Result</th>
                <th className="text-muted small text-uppercase">Reference Range</th>
              </tr>
            </thead>
            <tbody>
              {report.results.map((r) => (
                <tr key={r.name}>
                  <td>{r.name}</td>
                  <td>{r.value}</td>
                  <td>{r.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="small text-muted">Generated: {new Date().toLocaleString()}</div>
      </ReportLayout>
    </div>
  );
};

export default ReportViewer;
