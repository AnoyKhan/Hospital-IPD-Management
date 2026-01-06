import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map route segments to readable labels
  const labelMap = {
    dashboard: 'Dashboard',
    patients: 'Patients',
    register: 'Register Patient',
    admissions: 'Admissions',
    'opd-to-ipd': 'OPD to IPD',
    ipd: 'IPD Admission',
    slip: 'Admission Slip',
    wards: 'Wards',
    setup: 'Ward Setup',
    beds: 'Beds',
    categories: 'Bed Categories',
    availability: 'Bed Availability',
    allocation: 'Bed Allocation',
    transfer: 'Bed Transfer',
    clinical: 'Clinical',
    'doctor-notes': 'Doctor Notes',
    diagnosis: 'Diagnosis & Treatment',
    vitals: 'Vital Signs',
    'nursing-notes': 'Nursing Notes',
    'procedure-notes': 'Procedure Notes',
    investigations: 'Investigations',
    request: 'Test Request',
    results: 'Lab Results',
    report: 'Report Viewer',
    pharmacy: 'Pharmacy',
    order: 'Medicine Order',
    chart: 'Medicine Chart',
    'issue-return': 'Issue & Return',
    ot: 'Operation Theatre',
    schedule: 'OT Schedule',
    booking: 'OT Booking',
    notes: 'OT Notes',
    billing: 'Billing',
    live: 'Live Bill',
    payment: 'Payment',
    'due-discount': 'Due & Discount',
    discharge: 'Discharge',
    reports: 'Reports',
    admission: 'IPD Admission Report',
    occupancy: 'Bed Occupancy Report',
    income: 'Income Report',
    due: 'Due Report',
  };

  const getLabel = (segment) => labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

  // Don't show breadcrumbs on login page
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>🏠 Home</Link>
        </li>

        {pathnames.map((segment, index) => {
          const path = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = getLabel(segment);

          return isLast ? (
            <li key={path} className="breadcrumb-item active" aria-current="page">
              {label}
            </li>
          ) : (
            <li key={path} className="breadcrumb-item">
              <Link to={path}>{label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
