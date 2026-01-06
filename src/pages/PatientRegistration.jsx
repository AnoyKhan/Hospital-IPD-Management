import React, { useState } from 'react';
import useForm from '../hooks/useForm.js';
import Modal from '../components/common/Modal.jsx';

const validate = (v) => {
  const e = {};
  if (!v.name) e.name = 'Name is required';
  if (!v.gender) e.gender = 'Gender is required';
  if (!v.age || Number.isNaN(Number(v.age))) e.age = 'Valid age required';
  if (!v.phone) e.phone = 'Phone is required';
  if (!v.address) e.address = 'Address is required';
  return e;
};

const PatientRegistration = () => {
  const [showModal, setShowModal] = useState(false);
  const { values, errors, handleChange, handleSubmit, reset } = useForm(
    { name: '', gender: '', age: '', phone: '', address: '' },
    validate
  );

  const onSubmit = () => {
    setShowModal(true);
  };

  const close = () => {
    setShowModal(false);
    reset();
  };

  return (
    <div className="container-fluid" style={{ maxWidth: 860 }}>
      <h5 className="text-primary mb-3">Patient Registration</h5>
      <form className="vstack gap-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 - Mobile: stack, Desktop: 3 columns */}
        <div className="row g-2 g-md-3">
          <div className="col-12 col-md-6">
            <label className="form-label">Full Name</label>
            <input name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} value={values.name} onChange={handleChange} />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="col-6 col-md-3">
            <label className="form-label">Gender</label>
            <select name="gender" className={`form-select ${errors.gender ? 'is-invalid' : ''}`} value={values.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
            {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
          </div>
          <div className="col-6 col-md-3">
            <label className="form-label">Age</label>
            <input name="age" type="number" className={`form-control ${errors.age ? 'is-invalid' : ''}`} value={values.age} onChange={handleChange} />
            {errors.age && <div className="invalid-feedback">{errors.age}</div>}
          </div>
        </div>
        {/* Row 2 - Mobile: stack, Desktop: 2 columns */}
        <div className="row g-2 g-md-3">
          <div className="col-12 col-md-4">
            <label className="form-label">Phone</label>
            <input name="phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} value={values.phone} onChange={handleChange} />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="col-12 col-md-8">
            <label className="form-label">Address</label>
            <input name="address" className={`form-control ${errors.address ? 'is-invalid' : ''}`} value={values.address} onChange={handleChange} />
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>
        </div>
        {/* Action buttons - Mobile: full width, Desktop: auto width */}
        <div className="d-flex flex-column flex-sm-row gap-2">
          <button className="btn btn-primary" type="submit">Register</button>
          <button className="btn btn-outline-secondary" type="button" onClick={reset}>Reset</button>
        </div>
      </form>

      <Modal show={showModal} title="Registration Successful" onClose={close} footer={<button className="btn btn-primary" onClick={close}>Close</button>}>
        <p className="mb-1"><strong>Name:</strong> {values.name}</p>
        <p className="mb-1"><strong>Gender:</strong> {values.gender}</p>
        <p className="mb-1"><strong>Age:</strong> {values.age}</p>
        <p className="mb-1"><strong>Phone:</strong> {values.phone}</p>
        <p className="mb-0"><strong>Address:</strong> {values.address}</p>
      </Modal>
    </div>
  );
};

export default PatientRegistration;
