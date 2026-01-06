import React from 'react';

const TeamAssignmentForm = ({ values, onChange }) => {
  const handle = (e) => onChange && onChange({ ...values, [e.target.name]: e.target.value });
  return (
    <div className="row g-3">
      <div className="col-md-4">
        <label className="form-label">Surgeon</label>
        <input name="surgeon" className="form-control" value={values.surgeon || ''} onChange={handle} placeholder="Dr. Sharma" />
      </div>
      <div className="col-md-4">
        <label className="form-label">Anesthetist</label>
        <input name="anesthetist" className="form-control" value={values.anesthetist || ''} onChange={handle} placeholder="Dr. Rao" />
      </div>
      <div className="col-md-4">
        <label className="form-label">OT Nurse</label>
        <input name="nurse" className="form-control" value={values.nurse || ''} onChange={handle} placeholder="Nurse Anita" />
      </div>
      <div className="col-md-12">
        <label className="form-label">Assistants</label>
        <input name="assistants" className="form-control" value={values.assistants || ''} onChange={handle} placeholder="e.g., 2" />
      </div>
    </div>
  );
};

export default TeamAssignmentForm;
