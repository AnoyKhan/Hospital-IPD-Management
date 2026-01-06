import React, { useState } from 'react';
import useForm from '../hooks/useForm.js';
import StatusBadge from '../components/common/StatusBadge.jsx';

const validate = (v) => {
  const e = {};
  if (!v.patientId) e.patientId = 'Patient ID required';
  if (!v.test) e.test = 'Test name required';
  return e;
};

const TestRequest = () => {
  const [requests, setRequests] = useState([
    { id: 'REQ-001', patientId: 'IPD-001', test: 'CBC', priority: 'Routine', status: 'Pending' },
    { id: 'REQ-002', patientId: 'IPD-001', test: 'LFT', priority: 'Routine', status: 'Requested' },
  ]);

  const { values, errors, handleChange, handleSubmit, reset } = useForm({ patientId: '', test: '', priority: 'Routine', notes: '' }, validate);

  const submit = () => {
    const id = `REQ-${String(requests.length + 1).padStart(3, '0')}`;
    setRequests((r) => [{ id, patientId: values.patientId, test: values.test, priority: values.priority, status: 'Requested' }, ...r]);
    reset();
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">Test Request</h5>
        <span className="text-muted small">IPD-001</span>
      </div>
      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body">
          <h6 className="card-title">New Request</h6>
          <form className="vstack gap-2 gap-md-3" onSubmit={handleSubmit(submit)} noValidate>
            <div className="row g-2 g-md-3">
              <div className="col-12 col-md-3">
                <label className="form-label">Patient ID</label>
                <input name="patientId" className={`form-control ${errors.patientId ? 'is-invalid' : ''}`} value={values.patientId} onChange={handleChange} placeholder="IPD-001" />
                {errors.patientId && <div className="invalid-feedback">{errors.patientId}</div>}
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label">Test</label>
                <input name="test" className={`form-control ${errors.test ? 'is-invalid' : ''}`} value={values.test} onChange={handleChange} placeholder="e.g., CBC, LFT" />
                {errors.test && <div className="invalid-feedback">{errors.test}</div>}
              </div>
              <div className="col-12 col-md-3">
                <label className="form-label">Priority</label>
                <select name="priority" className="form-select" value={values.priority} onChange={handleChange}>
                  <option>Routine</option>
                  <option>Urgent</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">Notes</label>
                <textarea name="notes" className="form-control" rows={2} value={values.notes} onChange={handleChange} />
              </div>
            </div>
            <div>
              <button className="btn btn-primary w-100 w-sm-auto" type="submit">Request Test</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="card-title">Requests</h6>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th className="text-muted small text-uppercase">Req ID</th>
                  <th className="text-muted small text-uppercase">Patient</th>
                  <th className="text-muted small text-uppercase">Test</th>
                  <th className="text-muted small text-uppercase">Priority</th>
                  <th className="text-muted small text-uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.patientId}</td>
                    <td>{r.test}</td>
                    <td><span className={`badge ${r.priority === 'Urgent' ? 'bg-danger' : 'bg-secondary'}`}>{r.priority}</span></td>
                    <td><StatusBadge status={r.status} /></td>
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

export default TestRequest;
