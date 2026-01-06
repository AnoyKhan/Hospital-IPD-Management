import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServerError = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="text-center">
        <div style={{ fontSize: '80px', fontWeight: 'bold', color: '#c0392b' }}>500</div>
        <h2 className="mb-3">Server Error</h2>
        <p className="text-muted mb-4">Something went wrong on the server. Please try again later.</p>
        <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ServerError;
