import React, { useState } from 'react';
import useForm from '../hooks/useForm.js';
import { mockWards as initialWards } from '../services/mockData.js';
import ConfirmationModal from '../components/common/ConfirmationModal.jsx';

const validate = (v) => {
  const e = {};
  if (!v.name) e.name = 'Ward name is required';
  if (!v.type) e.type = 'Ward type is required';
  return e;
};

const WardSetup = () => {
  const [wards, setWards] = useState(initialWards);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const { values, errors, handleChange, handleSubmit, reset } = useForm({ name: '', type: '', beds: '' }, validate);

  const addWard = () => {
    const beds = Number(values.beds) || 0;
    setWards((w) => [...w, { name: values.name, type: values.type, beds, occupied: 0, available: beds }]);
    reset();
  };

  const confirmDelete = (idx) => {
    setDeleteIndex(idx);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    setWards((w) => w.filter((_, i) => i !== deleteIndex));
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  return (
    <div className="container-fluid" style={{ maxWidth: 1100 }}>
      <h5 className="text-primary mb-3">Ward Setup</h5>
      {/* Mobile: stack cards, Desktop: side-by-side */}
      <div className="row g-2 g-md-3">
        <div className="col-12 col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Add Ward</h6>
              <form className="vstack gap-3" onSubmit={handleSubmit(addWard)} noValidate>
                <div>
                  <label className="form-label">Ward Name</label>
                  <input name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} value={values.name} onChange={handleChange} />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div>
                  <label className="form-label">Ward Type</label>
                  <select name="type" className={`form-select ${errors.type ? 'is-invalid' : ''}`} value={values.type} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="General">General</option>
                    <option value="Private">Private</option>
                    <option value="ICU">ICU</option>
                  </select>
                  {errors.type && <div className="invalid-feedback">{errors.type}</div>}
                </div>
                <div>
                  <label className="form-label">Total Beds</label>
                  <input name="beds" type="number" className="form-control" value={values.beds} onChange={handleChange} />
                </div>
                <div>
                  <button className="btn btn-primary" type="submit">Add Ward</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Configured Wards</h6>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th className="text-muted small text-uppercase">Name</th>
                      <th className="text-muted small text-uppercase">Type</th>
                      <th className="text-muted small text-uppercase">Beds</th>
                      <th className="text-muted small text-uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wards.map((w, idx) => (
                      <tr key={idx}>
                        <td>{w.name}</td>
                        <td><span className="badge bg-secondary">{w.type}</span></td>
                        <td>{w.beds}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-danger" 
                            onClick={() => confirmDelete(idx)}
                            title="Delete ward"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        show={showDeleteModal}
        title="Delete Ward"
        message={`Are you sure you want to delete ${wards[deleteIndex]?.name} ward? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
        onConfirm={handleDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default WardSetup;
