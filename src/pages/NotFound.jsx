import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="text-center px-3">
        <div style={{ fontSize: 'clamp(3rem, 15vw, 5rem)', fontWeight: 'bold', color: '#e74c3c' }}>404</div>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted mb-4">The page you are looking for does not exist.</p>
        <button className="btn btn-primary w-100 w-sm-auto" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;
