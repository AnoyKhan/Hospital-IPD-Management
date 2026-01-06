import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => (
  <div className="container py-5" style={{ maxWidth: 640 }}>
    <div className="alert alert-warning border">
      <h5 className="alert-heading">Access Restricted</h5>
      <p className="mb-3">You don't have permission to view this page.</p>
      <div className="d-flex gap-2">
        <Link className="btn btn-outline-primary" to="/dashboard">Back to Dashboard</Link>
        <Link className="btn btn-outline-secondary" to="/login">Switch Role</Link>
      </div>
    </div>
  </div>
);

export default Unauthorized;
