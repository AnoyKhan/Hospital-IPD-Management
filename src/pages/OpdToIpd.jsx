import React, { useState } from 'react';
import useForm from '../hooks/useForm.js';
import Modal from '../components/common/Modal.jsx';

const validate = (v) => {
  const e = {};
  if (!v.opdNo) e.opdNo = 'OPD number is required';
  if (!v.patientName) e.patientName = 'Patient name is required';
  if (!v.doctor) e.doctor = 'Referring doctor is required';
  return e;
};

const OpdToIpd = () => {
  const [showModal, setShowModal] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useForm(
    { opdNo: '', patientName: '', doctor: '' },
    validate
  );

  const onSubmit = () => setShowModal(true);

  return (
    <div className="container-fluid" style={{ maxWidth: 720 }}>
      <h5 className="text-primary mb-3">Convert OPD to IPD</h5>
      <form className="vstack gap-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">OPD No.</label>
            <input name="opdNo" className={`form-control ${errors.opdNo ? 'is-invalid' : ''}`} value={values.opdNo} onChange={handleChange} />
            {errors.opdNo && <div className="invalid-feedback">{errors.opdNo}</div>}
          </div>
          <div className="col-md-4">
            <label className="form-label">Patient Name</label>
            <input name="patientName" className={`form-control ${errors.patientName ? 'is-invalid' : ''}`} value={values.patientName} onChange={handleChange} />
            {errors.patientName && <div className="invalid-feedback">{errors.patientName}</div>}
          </div>
          <div className="col-md-4">
            <label className="form-label">Referring Doctor</label>
            <input name="doctor" className={`form-control ${errors.doctor ? 'is-invalid' : ''}`} value={values.doctor} onChange={handleChange} />
            {errors.doctor && <div className="invalid-feedback">{errors.doctor}</div>}
          </div>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Convert</button>
        </div>
      </form>

      <Modal show={showModal} title="Confirm Conversion" onClose={() => setShowModal(false)} footer={<button className="btn btn-primary" onClick={() => setShowModal(false)}>Confirm</button>}>
        <p><strong>OPD No:</strong> {values.opdNo}</p>
        <p><strong>Patient:</strong> {values.patientName}</p>
        <p><strong>Doctor:</strong> {values.doctor}</p>
        <p className="mb-0 text-muted">This will create an IPD record with a new IPD number.</p>
      </Modal>
    </div>
  );
};

export default OpdToIpd;
