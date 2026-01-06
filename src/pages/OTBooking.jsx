import React, { useState } from 'react';
import useForm from '../hooks/useForm.js';
import TeamAssignmentForm from '../components/forms/TeamAssignmentForm.jsx';

const validate = (v) => {
  const e = {};
  if (!v.patientId) e.patientId = 'Patient ID required';
  if (!v.procedure) e.procedure = 'Procedure required';
  if (!v.date) e.date = 'Date required';
  if (!v.time) e.time = 'Time required';
  if (!v.ot) e.ot = 'OT room required';
  return e;
};

const OTBooking = () => {
  const { values, errors, handleChange, handleSubmit, setFieldValue, reset } = useForm({ patientId: '', procedure: '', date: '', time: '', ot: '', team: {} }, validate);
  const [message, setMessage] = useState('');

  const submit = () => {
    setMessage(`Booked ${values.procedure} for ${values.patientId} on ${values.date} ${values.time} in ${values.ot}`);
    reset();
  };

  return (
    <div className="container-fluid" style={{ maxWidth: 960 }}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="text-primary mb-0">OT Booking</h5>
        <span className="text-muted small">IPD Operations</span>
      </div>

      {message && <div className="alert alert-success border">{message}</div>}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="card-title">Schedule Procedure</h6>
          <form className="vstack gap-3" onSubmit={handleSubmit(submit)} noValidate>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Patient ID</label>
                <input name="patientId" className={`form-control ${errors.patientId ? 'is-invalid' : ''}`} value={values.patientId} onChange={handleChange} placeholder="IPD-001" />
                {errors.patientId && <div className="invalid-feedback">{errors.patientId}</div>}
              </div>
              <div className="col-md-5">
                <label className="form-label">Procedure</label>
                <input name="procedure" className={`form-control ${errors.procedure ? 'is-invalid' : ''}`} value={values.procedure} onChange={handleChange} placeholder="e.g., Appendectomy" />
                {errors.procedure && <div className="invalid-feedback">{errors.procedure}</div>}
              </div>
              <div className="col-md-2">
                <label className="form-label">Date</label>
                <input name="date" type="date" className={`form-control ${errors.date ? 'is-invalid' : ''}`} value={values.date} onChange={handleChange} />
                {errors.date && <div className="invalid-feedback">{errors.date}</div>}
              </div>
              <div className="col-md-2">
                <label className="form-label">Time</label>
                <input name="time" type="time" className={`form-control ${errors.time ? 'is-invalid' : ''}`} value={values.time} onChange={handleChange} />
                {errors.time && <div className="invalid-feedback">{errors.time}</div>}
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">OT Room</label>
                <select name="ot" className={`form-select ${errors.ot ? 'is-invalid' : ''}`} value={values.ot} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="OT-1">OT-1</option>
                  <option value="OT-2">OT-2</option>
                  <option value="OT-3">OT-3</option>
                </select>
                {errors.ot && <div className="invalid-feedback">{errors.ot}</div>}
              </div>
            </div>
            <div>
              <h6 className="text-muted">Team Assignment</h6>
              <TeamAssignmentForm values={values.team} onChange={(v) => setFieldValue('team', v)} />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">Book OT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTBooking;
