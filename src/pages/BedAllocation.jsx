import React, { useMemo, useState } from 'react';
import useForm from '../hooks/useForm.js';

const validate = (v) => {
  const e = {};
  if (!v.patientId) e.patientId = 'Patient ID is required';
  if (!v.ward) e.ward = 'Ward is required';
  if (!v.bedCode) e.bedCode = 'Bed code is required';
  return e;
};

const BedAllocation = () => {
  const wards = useMemo(() => ({
    General: Array.from({ length: 12 }, (_, i) => `G-${String(i + 1).padStart(2, '0')}`),
    Private: Array.from({ length: 8 }, (_, i) => `P-${String(i + 1).padStart(2, '0')}`),
    ICU: Array.from({ length: 6 }, (_, i) => `ICU-${String(i + 1).padStart(2, '0')}`),
  }), []);

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useForm({ patientId: '', ward: '', bedCode: '' }, validate);
  const [success, setSuccess] = useState(false);

  const onSubmit = () => setSuccess(true);

  const bedOptions = values.ward ? wards[values.ward] : [];

  return (
    <div className="container-fluid" style={{ maxWidth: 720 }}>
      <h5 className="text-primary mb-3">Bed Allocation</h5>
      <form className="vstack gap-2 gap-md-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row g-2 g-md-3">
          <div className="col-12 col-md-4">
            <label className="form-label">Patient ID</label>
            <input name="patientId" className={`form-control ${errors.patientId ? 'is-invalid' : ''}`} value={values.patientId} onChange={handleChange} placeholder="IPD-001" />
            {errors.patientId && <div className="invalid-feedback">{errors.patientId}</div>}
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label">Ward</label>
            <select name="ward" className={`form-select ${errors.ward ? 'is-invalid' : ''}`} value={values.ward} onChange={(e) => { handleChange(e); setFieldValue('bedCode', ''); }}>
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="Private">Private</option>
              <option value="ICU">ICU</option>
            </select>
            {errors.ward && <div className="invalid-feedback">{errors.ward}</div>}
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label">Bed</label>
            <select name="bedCode" className={`form-select ${errors.bedCode ? 'is-invalid' : ''}`} value={values.bedCode} onChange={handleChange} disabled={!values.ward}>
              <option value="">Select</option>
              {bedOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            {errors.bedCode && <div className="invalid-feedback">{errors.bedCode}</div>}
          </div>
        </div>
        <div>
          <button className="btn btn-primary w-100 w-sm-auto" type="submit">Allocate</button>
        </div>
      </form>

      {success && (
        <div className="alert alert-success border mt-3">
          <div className="fw-semibold">Bed allocated</div>
          <div className="small text-muted">{values.patientId} → {values.ward} / {values.bedCode}</div>
        </div>
      )}
    </div>
  );
};

export default BedAllocation;
