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
    <header className="navbar navbar-expand sticky-top d-flex align-items-center" style={{ backgroundColor: '#2d5a8c', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
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
            flexShrink: 0,
            transition: 'all 0.2s ease'
          }}
        >
          <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
        </button>
        
        {/* Brand name - responsive text */}
        <span className="navbar-brand fw-bold mb-0 text-white" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.25rem)' }}>
          <span className="d-none d-sm-inline">🏥 Hospital IPD Management</span>
          <span className="d-inline d-sm-none">🏥 Hospital IPD</span>
        </span>
        
        {/* User info and actions */}
        <div className="ms-auto d-flex align-items-center gap-2 gap-md-3">
          {token ? (
            <>
              {/* User Profile Card */}
              <div className="d-flex align-items-center gap-2" style={{ 
                padding: '8px 12px', 
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {/* User avatar - improved design */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
                    border: '2px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                
                {/* User details - hidden on mobile */}
                <div className="d-none d-lg-flex flex-column">
                  <span className="text-white fw-semibold" style={{ fontSize: '0.9rem', lineHeight: 1.2 }}>{user?.name}</span>
                  <span className="text-white" style={{ fontSize: '0.75rem', opacity: 0.85, lineHeight: 1 }}>
                    <i className="bi bi-shield-check" style={{ marginRight: '4px' }}></i>{role}
                  </span>
                </div>
              </div>

              {/* Logout button - redesigned */}
              <button
                className="btn btn-light btn-sm"
                onClick={handleLogout}
                style={{ 
                  fontSize: '0.875rem', 
                  padding: '8px 14px',
                  flexShrink: 0,
                  fontWeight: '500',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff5252';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 107, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff6b6b';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                title="Logout"
              >
                <i className="bi bi-box-arrow-right"></i>
                <span className="d-none d-sm-inline">Logout</span>
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
