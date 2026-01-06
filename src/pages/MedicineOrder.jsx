import React, { useState } from 'react';
import useForm from '../hooks/useForm.js';
import StockBadge from '../components/common/StockBadge.jsx';
import StatusBadge from '../components/common/StatusBadge.jsx';

const validate = (v) => {
  const e = {};
  if (!v.patientId) e.patientId = 'Patient ID required';
  if (!v.medicine) e.medicine = 'Medicine name required';
  if (!v.dose) e.dose = 'Dose required';
  if (!v.frequency) e.frequency = 'Frequency required';
  if (!v.days || Number.isNaN(Number(v.days))) e.days = 'Valid days required';
  return e;
};

const initialStock = {
  Paracetamol: 'InStock',
  "Ceftriaxone": 'LowStock',
  "Omeprazole": 'InStock',
  "Insulin": 'OutOfStock',
};

const MedicineOrder = () => {
  const [orders, setOrders] = useState([
    { id: 'MED-001', patientId: 'IPD-001', medicine: 'Paracetamol', dose: '650 mg', frequency: 'TID', days: 3, status: 'Requested' },
  ]);
  const { values, errors, handleChange, handleSubmit, reset } = useForm({ patientId: '', medicine: '', dose: '', frequency: 'BID', days: 1, notes: '' }, validate);

  const submit = () => {
    const id = `MED-${String(orders.length + 1).padStart(3, '0')}`;
    setOrders((o) => [{ id, ...values, status: 'Requested' }, ...o]);
    reset();
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">Medicine Order</h5>
        <span className="text-muted small">IPD-001</span>
      </div>

      <div className="alert alert-info border">Orders are demo-only and not persisted.</div>

      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body">
          <h6 className="card-title">New Order</h6>
          <form className="vstack gap-2 gap-md-3" onSubmit={handleSubmit(submit)} noValidate>
            <div className="row g-2 g-md-3">
              <div className="col-12 col-sm-6 col-md-3">
                <label className="form-label">Patient ID</label>
                <input name="patientId" className={`form-control ${errors.patientId ? 'is-invalid' : ''}`} value={values.patientId} onChange={handleChange} placeholder="IPD-001" />
                {errors.patientId && <div className="invalid-feedback">{errors.patientId}</div>}
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <label className="form-label">Medicine</label>
                <input name="medicine" className={`form-control ${errors.medicine ? 'is-invalid' : ''}`} value={values.medicine} onChange={handleChange} placeholder="e.g., Paracetamol" />
                {errors.medicine && <div className="invalid-feedback">{errors.medicine}</div>}
              </div>
              <div className="col-6 col-sm-6 col-md-2">
                <label className="form-label">Dose</label>
                <input name="dose" className={`form-control ${errors.dose ? 'is-invalid' : ''}`} value={values.dose} onChange={handleChange} placeholder="e.g., 650 mg" />
                {errors.dose && <div className="invalid-feedback">{errors.dose}</div>}
              </div>
              <div className="col-6 col-sm-6 col-md-2">
                <label className="form-label">Frequency</label>
                <select name="frequency" className={`form-select ${errors.frequency ? 'is-invalid' : ''}`} value={values.frequency} onChange={handleChange}>
                  <option>BID</option>
                  <option>TID</option>
                  <option>QID</option>
                </select>
              </div>
              <div className="col-6 col-sm-6 col-md-1">
                <label className="form-label">Days</label>
                <input name="days" type="number" className={`form-control ${errors.days ? 'is-invalid' : ''}`} value={values.days} onChange={handleChange} />
                {errors.days && <div className="invalid-feedback">{errors.days}</div>}
              </div>
            </div>
            <div className="row g-2 g-md-3">
              <div className="col-12">
                <label className="form-label">Notes</label>
                <textarea name="notes" className="form-control" rows={2} value={values.notes} onChange={handleChange} />
              </div>
            </div>
            <div>
              <button className="btn btn-primary w-100 w-sm-auto" type="submit">Place Order</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="card-title">Orders</h6>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th className="text-muted small text-uppercase">Order ID</th>
                  <th className="text-muted small text-uppercase">Patient</th>
                  <th className="text-muted small text-uppercase">Medicine</th>
                  <th className="text-muted small text-uppercase">Dose</th>
                  <th className="text-muted small text-uppercase">Freq</th>
                  <th className="text-muted small text-uppercase">Days</th>
                  <th className="text-muted small text-uppercase">Stock</th>
                  <th className="text-muted small text-uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.patientId}</td>
                    <td>{o.medicine}</td>
                    <td>{o.dose}</td>
                    <td>{o.frequency}</td>
                    <td>{o.days}</td>
                    <td><StockBadge status={initialStock[o.medicine] || 'LowStock'} /></td>
                    <td><StatusBadge status={o.status} /></td>
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

export default MedicineOrder;
