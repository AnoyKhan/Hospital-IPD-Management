import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { sidebarCollapsed, toggleSidebar, sidebarOpen, setSidebarOpen } = useApp();
  const { user, role, token, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleMenuToggle = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    } else {
      toggleSidebar();
    }
  };

  return (
    <header className="navbar navbar-expand sticky-top d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center px-2 px-md-3">
        {/* Hamburger/Menu toggle button */}
        <button
          className="btn btn-light btn-sm me-2 me-md-3"
          onClick={handleMenuToggle}
          aria-label={isMobile ? 'Toggle menu' : (sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar')}
          title={isMobile ? 'Toggle menu' : (sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar')}
          style={{ 
            width: '40px', 
            height: '40px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
        </button>
        
        {/* Brand name - responsive text */}
        <span className="navbar-brand fw-bold mb-0" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.25rem)' }}>
          <span className="d-none d-sm-inline">🏥 Hospital IPD Management</span>
          <span className="d-inline d-sm-none">🏥 Hospital IPD</span>
        </span>
        
        {/* User info and actions */}
        <div className="ms-auto d-flex align-items-center gap-2 gap-md-3">
          {token ? (
            <>
              <div className="d-flex align-items-center gap-2">
                {/* User avatar */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    flexShrink: 0
                  }}
                >
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                {/* User details - hidden on very small screens */}
                <div className="d-none d-md-flex flex-column">
                  <span className="navbar-text small" style={{ lineHeight: 1.2 }}>{user?.name}</span>
                  <span className="navbar-text small" style={{ fontSize: '0.75rem', opacity: 0.8, lineHeight: 1 }}>
                    {role}
                  </span>
                </div>
              </div>
              {/* Logout button - icon only on mobile, text on larger screens */}
              <button
                className="btn btn-light btn-sm"
                onClick={handleLogout}
                style={{ 
                  fontSize: '0.875rem', 
                  padding: 'clamp(0.375rem, 1.5vw, 0.5rem) clamp(0.5rem, 2vw, 1rem)',
                  flexShrink: 0
                }}
                title="Logout"
              >
                <span className="d-none d-sm-inline">Logout</span>
                <span className="d-inline d-sm-none">⎋</span>
              </button>
            </>
          ) : (
            <button
              className="btn btn-light btn-sm"
              onClick={() => navigate('/login')}
              style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
