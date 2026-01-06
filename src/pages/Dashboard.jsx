import React from 'react';
import StatCard from '../components/widgets/StatCard.jsx';
import BedOccupancyChart from '../components/charts/BedOccupancyChart.jsx';
import RevenueOverviewChart from '../components/charts/RevenueOverviewChart.jsx';
import { getDashboardStats } from '../services/mockData.js';

const Dashboard = () => {
  // Get stats from centralized mock data
  const stats = getDashboardStats();

  const lastUpdate = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className="container-fluid">
      {/* Header - Responsive */}
      <div className="row g-2 g-md-3 mb-3 mb-md-4">
        <div className="col-12">
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2">
            <div>
              <h2 className="mb-1 fs-3 fs-md-2">📊 IPD Dashboard</h2>
              <p className="text-muted mb-0 small">Real-time hospital operations overview</p>
            </div>
            <div className="text-start text-sm-end">
              <small className="text-muted d-block">Last updated: {lastUpdate}</small>
              <div className="mt-1">
                <span className="badge text-bg-success">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Stat Cards - Mobile: 1 col, SM: 2 cols, LG: 3 cols, XL+: 4-5 cols */}
      <div className="row g-2 g-md-3 mb-3 mb-md-4">
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2">
          <StatCard
            title="Total IPD Patients"
            value={stats.totalPatients}
            subtitle="Currently admitted"
            icon="👥"
            variant="primary"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2">
          <StatCard
            title="Bed Occupancy"
            value={`${Math.round((stats.bedOccupancy.occupied / stats.bedOccupancy.total) * 100)}%`}
            subtitle={`${stats.bedOccupancy.occupied}/${stats.bedOccupancy.total} beds`}
            icon="🛏️"
            variant="info"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2">
          <StatCard
            title="Today's Admissions"
            value={stats.todaysAdmission}
            subtitle="Past 24 hours"
            icon="📋"
            variant="success"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2">
          <StatCard
            title="Today's Collection"
            value={`₹${(stats.todaysCollection / 1000).toFixed(1)}K`}
            subtitle="Revenue collected"
            icon="💰"
            variant="success"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2">
          <StatCard
            title="Pending Due"
            value={`₹${(stats.pendingDue / 1000).toFixed(0)}K`}
            subtitle="Outstanding amount"
            icon="⚠️"
            variant="warning"
          />
        </div>
      </div>

      {/* Charts Section - Mobile: stacked, Desktop: side-by-side */}
      <div className="row g-2 g-md-3 mb-3 mb-md-4">
        <div className="col-12 col-xl-6">
          <BedOccupancyChart occupied={stats.bedOccupancy.occupied} total={stats.bedOccupancy.total} />
        </div>
        <div className="col-12 col-xl-6">
          <RevenueOverviewChart />
        </div>
      </div>

      {/* Quick Actions - Responsive button layout */}
      <div className="row g-2 g-md-3">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Quick Actions</h6>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <div className="col-12 col-sm-auto">
                  <button className="btn btn-primary btn-sm w-100">+ New Admission</button>
                </div>
                <div className="col-12 col-sm-auto">
                  <button className="btn btn-success btn-sm w-100">View Reports</button>
                </div>
                <div className="col-12 col-sm-auto">
                  <button className="btn btn-info btn-sm w-100">Patient Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
