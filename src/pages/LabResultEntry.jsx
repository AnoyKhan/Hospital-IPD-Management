import React, { useState } from 'react';
import FileUpload from '../components/forms/FileUpload.jsx';
import StatusBadge from '../components/common/StatusBadge.jsx';

const LabResultEntry = () => {
  const [items, setItems] = useState([
    { id: 'REQ-001', patientId: 'IPD-001', test: 'CBC', status: 'Requested', result: '' },
    { id: 'REQ-002', patientId: 'IPD-001', test: 'LFT', status: 'Pending', result: '' },
  ]);

  const update = (id, patch) => setItems((arr) => arr.map((x) => (x.id === id ? { ...x, ...patch } : x)));

  const complete = (id) => update(id, { status: 'Completed' });

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="text-primary mb-0">Lab Result Entry</h5>
        <span className="text-muted small">IPD-001</span>
      </div>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th className="text-muted small text-uppercase">Req ID</th>
                  <th className="text-muted small text-uppercase">Patient</th>
                  <th className="text-muted small text-uppercase">Test</th>
                  <th className="text-muted small text-uppercase">Status</th>
                  <th className="text-muted small text-uppercase">Result</th>
                  <th className="text-muted small text-uppercase">Report File</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((it) => (
                  <tr key={it.id}>
                    <td>{it.id}</td>
                    <td>{it.patientId}</td>
                    <td>{it.test}</td>
                    <td><StatusBadge status={it.status} /></td>
                    <td style={{ minWidth: 220 }}>
                      <input className="form-control" value={it.result} onChange={(e) => update(it.id, { result: e.target.value })} placeholder="e.g., Platelets: 150k" />
                    </td>
                    <td><FileUpload label="Attach Report" accept="application/pdf,image/*" onSelect={(f) => update(it.id, { fileName: f?.name })} /></td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => complete(it.id)} disabled={!it.result}>Mark Complete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabResultEntry;
