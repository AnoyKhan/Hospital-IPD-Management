import React from "react";
import { Link } from "react-router-dom";

const ReportsDashboard = () => {
  const reports = [
    {
      id: "admission",
      title: "IPD Admission Report",
      description:
        "View admission statistics, patient details, and admission trends",
      icon: "📋",
      path: "/reports/admission",
      color: "primary",
    },
    {
      id: "occupancy",
      title: "Bed Occupancy Report",
      description: "Monitor bed occupancy rates across wards and facilities",
      icon: "🛏️",
      path: "/reports/occupancy",
      color: "success",
    },
    {
      id: "income",
      title: "Income Report",
      description: "Track revenue trends and financial performance",
      icon: "💰",
      path: "/reports/income",
      color: "info",
    },
    {
      id: "due",
      title: "Due Report",
      description: "Monitor outstanding dues and overdue payments",
      icon: "💳",
      path: "/reports/due",
      color: "warning",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row g-2 g-md-3">
        <div className="col-12">
          <h4 className="mb-2 mb-md-3">Reports & Analytics</h4>
          <p className="text-muted mb-3 mb-md-4">
            Select a report to view detailed analytics and insights
          </p>
        </div>

        {reports.map((report) => (
          <div key={report.id} className="col-12 col-sm-6 col-lg-6 col-xl-4">
            <Link to={report.path} className="text-decoration-none">
              <div
                className={`card shadow-sm border-top border-${report.color} h-100 cursor-pointer`}
                style={{ cursor: "pointer", transition: "transform 0.2s" }}
              >
                <div className="card-body">
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    {report.icon}
                  </div>
                  <h5 className="card-title">{report.title}</h5>
                  <p className="card-text text-muted small">
                    {report.description}
                  </p>
                </div>
                <div className="card-footer bg-white">
                  <span className={`badge text-bg-${report.color}`}>
                    View Report →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}

        {/* Quick Stats */}
        <div className="col-12 mt-3 mt-md-4">
          <div className="row g-2 g-md-3">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    👥
                  </div>
                  <div className="text-muted small">Active Patients</div>
                  <div className="fs-5 fw-bold">248</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    🛏️
                  </div>
                  <div className="text-muted small">Occupied Beds</div>
                  <div className="fs-5 fw-bold">27/35</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    💰
                  </div>
                  <div className="text-muted small">This Month Income</div>
                  <div className="fs-5 fw-bold">Tk7.39L</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    ⚠️
                  </div>
                  <div className="text-muted small">Outstanding Dues</div>
                  <div className="fs-5 fw-bold">Tk99K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsDashboard;
