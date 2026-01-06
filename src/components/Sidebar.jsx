import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const Sidebar = () => {
  const { sidebarCollapsed, toggleSidebar, sidebarOpen, setSidebarOpen } = useApp();
  const { role } = useAuth();
  const location = useLocation();

  // Auto-close sidebar on mobile when route changes
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname, setSidebarOpen]);

  // Close sidebar when clicking outside on mobile
  const handleBackdropClick = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const menuByRole = {
    Admin: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Patients', to: '/patients' },
      { label: 'Register Patient', to: '/patients/register' },
      { label: 'OPD → IPD', to: '/admissions/opd-to-ipd' },
      { label: 'IPD Admission', to: '/admissions/ipd' },
      { label: 'Admission Slip', to: '/admissions/slip' },
      { label: 'Ward Setup', to: '/wards/setup' },
      { label: 'Bed Categories', to: '/beds/categories' },
      { label: 'Bed Availability', to: '/beds/availability' },
      { label: 'Bed Allocation', to: '/beds/allocation' },
      { label: 'Bed Transfer', to: '/beds/transfer' },
      { label: 'Doctor Notes', to: '/clinical/doctor-notes' },
      { label: 'Diagnosis & Plan', to: '/clinical/diagnosis' },
      { label: 'Vital Signs', to: '/clinical/vitals' },
      { label: 'Nursing Notes', to: '/clinical/nursing-notes' },
      { label: 'Procedure Notes', to: '/clinical/procedure-notes' },
      { label: 'Test Request', to: '/investigations/request' },
      { label: 'Result Entry', to: '/investigations/results' },
      { label: 'Report Viewer', to: '/investigations/report' },
      { label: 'Medicine Order', to: '/pharmacy/order' },
      { label: 'Daily Medicine Chart', to: '/pharmacy/chart' },
      { label: 'Issue & Return', to: '/pharmacy/issue-return' },
      { label: 'OT Schedule', to: '/ot/schedule' },
      { label: 'OT Booking', to: '/ot/booking' },
      { label: 'OT Notes', to: '/ot/notes' },
      { label: 'Live Bill Preview', to: '/billing/live' },
      { label: 'Payment', to: '/billing/payment' },
      { label: 'Due & Discount', to: '/billing/due-discount' },
      { label: 'Discharge', to: '/discharge' },
      { label: 'Reports', to: '/reports' },
    ],
    Doctor: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Patients', to: '/patients' },
      { label: 'OPD → IPD', to: '/admissions/opd-to-ipd' },
      { label: 'Bed Availability', to: '/beds/availability' },
      { label: 'Doctor Notes', to: '/clinical/doctor-notes' },
      { label: 'Diagnosis & Plan', to: '/clinical/diagnosis' },
      { label: 'Vital Signs', to: '/clinical/vitals' },
      { label: 'Procedure Notes', to: '/clinical/procedure-notes' },
      { label: 'Test Request', to: '/investigations/request' },
      { label: 'Report Viewer', to: '/investigations/report' },
      { label: 'Medicine Order', to: '/pharmacy/order' },
      { label: 'OT Schedule', to: '/ot/schedule' },
      { label: 'OT Booking', to: '/ot/booking' },
      { label: 'OT Notes', to: '/ot/notes' },
      { label: 'Live Bill Preview', to: '/billing/live' },
      { label: 'Discharge', to: '/discharge' },
    ],
    Nurse: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Patients', to: '/patients' },
      { label: 'Register Patient', to: '/patients/register' },
      { label: 'IPD Admission', to: '/admissions/ipd' },
      { label: 'Admission Slip', to: '/admissions/slip' },
      { label: 'Bed Availability', to: '/beds/availability' },
      { label: 'Bed Allocation', to: '/beds/allocation' },
      { label: 'Bed Transfer', to: '/beds/transfer' },
      { label: 'Nursing Notes', to: '/clinical/nursing-notes' },
      { label: 'Vital Signs', to: '/clinical/vitals' },
      { label: 'Test Request', to: '/investigations/request' },
      { label: 'Result Entry', to: '/investigations/results' },
      { label: 'Report Viewer', to: '/investigations/report' },
      { label: 'Daily Medicine Chart', to: '/pharmacy/chart' },
      { label: 'Issue & Return', to: '/pharmacy/issue-return' },
      { label: 'OT Schedule', to: '/ot/schedule' },
      { label: 'OT Notes', to: '/ot/notes' },
      { label: 'Live Bill Preview', to: '/billing/live' },
      { label: 'Discharge', to: '/discharge' },
    ],
    Pharmacist: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Daily Medicine Chart', to: '/pharmacy/chart' },
      { label: 'Issue & Return', to: '/pharmacy/issue-return' },
    ],
    Accounts: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Admission Slip', to: '/admissions/slip' },
      { label: 'Bed Categories', to: '/beds/categories' },
      { label: 'Report Viewer', to: '/investigations/report' },
      { label: 'Live Bill Preview', to: '/billing/live' },
      { label: 'Payment', to: '/billing/payment' },
      { label: 'Due & Discount', to: '/billing/due-discount' },
      { label: 'Discharge', to: '/discharge' },
      { label: 'Reports', to: '/reports' },
    ]
  };

  const items = menuByRole[role] || [{ label: 'Login', to: '/login' }];

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: window.innerWidth < 768 ? 'block' : 'none',
          }}
        />
      )}
      
      {/* Sidebar - Offcanvas on mobile, fixed on desktop */}
      <aside 
        className={`hospital-sidebar bg-light border-end ${
          sidebarCollapsed ? 'collapsed' : ''
        } ${sidebarOpen ? 'show' : ''}`}
      >
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="text-muted small">IPD Navigation</div>
            {/* Close button for mobile */}
            <button
              className="btn btn-sm btn-light d-md-none"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
              style={{ width: '30px', height: '30px', padding: 0 }}
            >
              ✕
            </button>
          </div>
          <nav className="nav flex-column">
            {items.map((item) => (
              <NavLink key={item.label} to={item.to} className="nav-link">
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
