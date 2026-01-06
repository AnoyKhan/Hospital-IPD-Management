import React, { useMemo, useState } from 'react';
import useForm from '../hooks/useForm.js';

const validate = (v) => {
  const e = {};
  if (!v.patientId) e.patientId = 'Patient ID is required';
  if (!v.fromWard || !v.fromBed) e.fromWard = 'Current ward/bed is required';
  if (!v.toWard || !v.toBed) e.toWard = 'Target ward/bed is required';
  return e;
};

const BedTransfer = () => {
  const wards = useMemo(() => ({
    General: Array.from({ length: 12 }, (_, i) => `G-${String(i + 1).padStart(2, '0')}`),
    Private: Array.from({ length: 8 }, (_, i) => `P-${String(i + 1).padStart(2, '0')}`),
    ICU: Array.from({ length: 6 }, (_, i) => `ICU-${String(i + 1).padStart(2, '0')}`),
  }), []);

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useForm(
    { patientId: '', fromWard: '', fromBed: '', toWard: '', toBed: '' },
    validate
  );
  const [success, setSuccess] = useState(false);

  const onSubmit = () => setSuccess(true);

  const fromBeds = values.fromWard ? wards[values.fromWard] : [];
  const toBeds = values.toWard ? wards[values.toWard] : [];

  return (
    <div className="container-fluid" style={{ maxWidth: 820 }}>
      <h5 className="text-primary mb-3">Bed Transfer</h5>
      <form className="vstack gap-2 gap-md-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row g-2 g-md-3">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label">Patient ID</label>
            <input name="patientId" className={`form-control ${errors.patientId ? 'is-invalid' : ''}`} value={values.patientId} onChange={handleChange} placeholder="IPD-001" />
            {errors.patientId && <div className="invalid-feedback">{errors.patientId}</div>}
          </div>
        </div>
        <div className="row g-2 g-md-3">
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="card-title">Current Bed</h6>
                <div className="row g-2 g-md-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label">Ward</label>
                    <select name="fromWard" className={`form-select ${errors.fromWard ? 'is-invalid' : ''}`} value={values.fromWard} onChange={(e) => { handleChange(e); setFieldValue('fromBed', ''); }}>
                      <option value="">Select</option>
                      <option value="General">General</option>
                      <option value="Private">Private</option>
                      <option value="ICU">ICU</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label">Bed</label>
                    <select name="fromBed" className={`form-select ${errors.fromWard ? 'is-invalid' : ''}`} value={values.fromBed} onChange={handleChange} disabled={!values.fromWard}>
                      <option value="">Select</option>
                      {fromBeds.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="card-title">Target Bed</h6>
                <div className="row g-2 g-md-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label">Ward</label>
                    <select name="toWard" className={`form-select ${errors.toWard ? 'is-invalid' : ''}`} value={values.toWard} onChange={(e) => { handleChange(e); setFieldValue('toBed', ''); }}>
                      <option value="">Select</option>
                      <option value="General">General</option>
                      <option value="Private">Private</option>
                      <option value="ICU">ICU</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label">Bed</label>
                    <select name="toBed" className={`form-select ${errors.toWard ? 'is-invalid' : ''}`} value={values.toBed} onChange={handleChange} disabled={!values.toWard}>
                      <option value="">Select</option>
                      {toBeds.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary w-100 w-sm-auto" type="submit">Transfer</button>
        </div>
      </form>

      {success && (
        <div className="alert alert-success border mt-3">
          <div className="fw-semibold">Bed transferred</div>
          <div className="small text-muted">{values.patientId}: {values.fromWard}/{values.fromBed} → {values.toWard}/{values.toBed}</div>
        </div>
      )}
    </div>
  );
};

export default BedTransfer;
