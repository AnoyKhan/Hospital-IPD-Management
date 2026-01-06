import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Breadcrumbs from '../components/common/Breadcrumbs.jsx';
import { useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';

const MainLayout = ({ children }) => {
  const { sidebarCollapsed } = useApp();
  const location = useLocation();
  const hideChrome = location.pathname === '/login';

  // Handle responsive sidebar margin
  // On mobile (<768px), no margin needed (offcanvas)
  // On desktop (>=768px), apply margin when sidebar is expanded
  const getMainClasses = () => {
    if (hideChrome) return 'ms-0';
    // Mobile-first: no margin by default (offcanvas)
    // Desktop: add margin only when sidebar not collapsed
    return !sidebarCollapsed ? 'ms-0 ms-md-sidebar' : 'ms-0';
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-body">
      {!hideChrome && <Navbar />}
      <div className="d-flex flex-grow-1 position-relative">
        {!hideChrome && <Sidebar />}
        <main 
          className={`flex-grow-1 ${getMainClasses()}`}
          style={{
            padding: 'clamp(0.75rem, 2vw, 1.5rem)',
            minHeight: 'calc(100vh - var(--navbar-height))',
            overflowX: 'hidden',
            // Responsive width management
            minWidth: 0, // Allow flex child to shrink below content size
            width: '100%',
          }}
        >
          {!hideChrome && <Breadcrumbs />}
          {/* Main content wrapper with responsive max-width */}
          <div className="container-lg px-2 px-md-0 mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
