import React, { useState } from 'react';
import useForm from '../hooks/useForm.js';
import Modal from '../components/common/Modal.jsx';
import { useNavigate } from 'react-router-dom';

const validate = (v) => {
  const e = {};
  if (!v.patientName) e.patientName = 'Patient name is required';
  if (!v.ward) e.ward = 'Ward is required';
  if (!v.bed) e.bed = 'Bed is required';
  if (!v.doctor) e.doctor = 'Doctor is required';
  if (!v.admissionDate) e.admissionDate = 'Admission date is required';
  return e;
};

const IpdAdmissionForm = () => {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useForm(
    { patientName: '', doctor: '', ward: '', bed: '', diagnosis: '', admissionDate: '' },
    validate
  );

  const onSubmit = () => setShowPreview(true);

  const goToSlip = () => {
    setShowPreview(false);
    navigate('/admissions/slip', { state: { admission: values } });
  };

  return (
    <div className="container-fluid" style={{ maxWidth: 900 }}>
      <h5 className="text-primary mb-3">IPD Admission</h5>
      <form className="vstack gap-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Patient Name</label>
            <input name="patientName" className={`form-control ${errors.patientName ? 'is-invalid' : ''}`} value={values.patientName} onChange={handleChange} />
            {errors.patientName && <div className="invalid-feedback">{errors.patientName}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Consulting Doctor</label>
            <input name="doctor" className={`form-control ${errors.doctor ? 'is-invalid' : ''}`} value={values.doctor} onChange={handleChange} />
            {errors.doctor && <div className="invalid-feedback">{errors.doctor}</div>}
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Ward</label>
            <select name="ward" className={`form-select ${errors.ward ? 'is-invalid' : ''}`} value={values.ward} onChange={handleChange}>
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="Private">Private</option>
              <option value="ICU">ICU</option>
            </select>
            {errors.ward && <div className="invalid-feedback">{errors.ward}</div>}
          </div>
          <div className="col-md-4">
            <label className="form-label">Bed</label>
            <input name="bed" className={`form-control ${errors.bed ? 'is-invalid' : ''}`} value={values.bed} onChange={handleChange} placeholder="e.g., G-12" />
            {errors.bed && <div className="invalid-feedback">{errors.bed}</div>}
          </div>
          <div className="col-md-4">
            <label className="form-label">Admission Date</label>
            <input name="admissionDate" type="date" className={`form-control ${errors.admissionDate ? 'is-invalid' : ''}`} value={values.admissionDate} onChange={handleChange} />
            {errors.admissionDate && <div className="invalid-feedback">{errors.admissionDate}</div>}
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12">
            <label className="form-label">Diagnosis / Notes</label>
            <textarea name="diagnosis" className="form-control" rows={3} value={values.diagnosis} onChange={handleChange} />
          </div>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Preview Slip</button>
        </div>
      </form>

      <Modal
        show={showPreview}
        title="Admission Slip Preview"
        onClose={() => setShowPreview(false)}
        footer={
          <>
            <button className="btn btn-outline-secondary" onClick={() => setShowPreview(false)}>Close</button>
            <button className="btn btn-primary" onClick={goToSlip}>Open Full Slip</button>
          </>
        }
      >
        <div className="vstack gap-1">
          <div><strong>Patient:</strong> {values.patientName}</div>
          <div><strong>Doctor:</strong> {values.doctor}</div>
          <div><strong>Ward:</strong> {values.ward}</div>
          <div><strong>Bed:</strong> {values.bed}</div>
          <div><strong>Date:</strong> {values.admissionDate}</div>
          <div><strong>Notes:</strong> {values.diagnosis || '—'}</div>
        </div>
      </Modal>
    </div>
  );
};

export default IpdAdmissionForm;
