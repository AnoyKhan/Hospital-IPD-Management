import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const roles = ['Admin', 'Doctor', 'Nurse', 'Pharmacist', 'Accounts'];

const Login = () => {
  const [username, setUsername] = useState('staff');
  const [role, setRole] = useState('Admin');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, role });
    navigate(from, { replace: true });
  };

  return (
    <div className="container py-4 py-md-5" style={{ maxWidth: 480 }}>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary mb-3">Sign in to IPD</h5>
          <form onSubmit={handleSubmit} className="vstack gap-3">
            <div>
              <label className="form-label">Username</label>
              <input
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g., jd.smith"
              />
            </div>
            <div>
              <label className="form-label">Role</label>
              <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
