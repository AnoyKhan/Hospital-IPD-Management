import React from 'react';
import { useLocation } from 'react-router-dom';

const AdmissionSlip = () => {
  const { state } = useLocation();
  const admission = state?.admission || {
    patientName: 'John Doe',
    doctor: 'Dr. Smith',
    ward: 'General',
    bed: 'G-12',
    admissionDate: '2025-12-25',
    diagnosis: 'Fever, dehydration'
  };

  const print = () => window.print();

  return (
    <div className="container py-4" style={{ maxWidth: 720 }}>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0 text-primary">Admission Slip</h5>
            <button className="btn btn-outline-secondary" onClick={print}>Print</button>
          </div>
          <div className="row g-2">
            <div className="col-6"><strong>Patient:</strong> {admission.patientName}</div>
            <div className="col-6"><strong>Doctor:</strong> {admission.doctor}</div>
            <div className="col-6"><strong>Ward:</strong> {admission.ward}</div>
            <div className="col-6"><strong>Bed:</strong> {admission.bed}</div>
            <div className="col-6"><strong>Date:</strong> {admission.admissionDate}</div>
            <div className="col-12"><strong>Diagnosis:</strong> {admission.diagnosis}</div>
          </div>
          <hr />
          <div className="text-muted small">Hospital IPD Management System</div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSlip;
