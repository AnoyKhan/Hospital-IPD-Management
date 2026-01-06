import React, { useMemo, useState } from 'react';

const IPDAdmissionReport = () => {
  const [filters, setFilters] = useState({ month: 'all', ward: 'all' });

  const admissions = useMemo(() => [
    { admissionId: 'IPD-2025-0001', patientName: 'Ramesh Kumar', age: 45, bed: 'A-10', admitDate: '2025-12-01', diagnosis: 'Hypertension', status: 'Discharged', days: 5 },
    { admissionId: 'IPD-2025-0012', patientName: 'Jane Smith', age: 38, bed: 'A-15', admitDate: '2025-12-15', diagnosis: 'Appendicitis', status: 'Discharged', days: 10 },
    { admissionId: 'IPD-2025-0018', patientName: 'Priya Singh', age: 52, bed: 'B-05', admitDate: '2025-12-18', diagnosis: 'Diabetes Control', status: 'Active', days: 7 },
    { admissionId: 'IPD-2025-0022', patientName: 'Ahmed Khan', age: 60, bed: 'C-12', admitDate: '2025-12-20', diagnosis: 'Post-op Care', status: 'Active', days: 5 },
    { admissionId: 'IPD-2025-0025', patientName: 'Maria Gonzalez', age: 35, bed: 'A-08', admitDate: '2025-12-22', diagnosis: 'Respiratory Infection', status: 'Active', days: 3 },
  ], []);

  const stats = useMemo(() => {
    const total = admissions.length;
    const active = admissions.filter((a) => a.status === 'Active').length;
    const discharged = admissions.filter((a) => a.status === 'Discharged').length;
    const avgStay = (admissions.reduce((sum, a) => sum + a.days, 0) / total).toFixed(1);
    return { total, active, discharged, avgStay };
  }, [admissions]);

  return (
    <div className="container-fluid">
      <div className="row g-2 g-md-3 mb-3 mb-md-4">
        <div className="col-12">
          <h5 className="mb-2 mb-md-3">IPD Admission Report</h5>
          <div className="row g-2 g-md-3">
            <div className="col-6 col-sm-6 col-md-3">
              <div className="card shadow-sm border-left border-primary">
                <div className="card-body">
                  <div className="text-muted small">Total Admissions</div>
                  <div className="fs-5 fw-bold">{stats.total}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-success">
                <div className="card-body">
                  <div className="text-muted small">Active</div>
                  <div className="fs-5 fw-bold">{stats.active}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-info">
                <div className="card-body">
                  <div className="text-muted small">Discharged</div>
                  <div className="fs-5 fw-bold">{stats.discharged}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-warning">
                <div className="card-body">
                  <div className="text-muted small">Avg Stay (days)</div>
                  <div className="fs-5 fw-bold">{stats.avgStay}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <div className="row g-2 align-items-center">
                <div className="col-auto">
                  <h6 className="mb-0">Filter</h6>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select form-select-sm"
                    value={filters.month}
                    onChange={(e) => setFilters({ ...filters, month: e.target.value })}
                  >
                    <option value="all">All Months</option>
                    <option value="dec">December 2025</option>
                    <option value="nov">November 2025</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select form-select-sm"
                    value={filters.ward}
                    onChange={(e) => setFilters({ ...filters, ward: e.target.value })}
                  >
                    <option value="all">All Wards</option>
                    <option value="A">Ward A</option>
                    <option value="B">Ward B</option>
                    <option value="C">Ward C</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-sm table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Admission ID</th>
                    <th>Patient</th>
                    <th>Age</th>
                    <th>Bed</th>
                    <th>Admission Date</th>
                    <th>Diagnosis</th>
                    <th>Days</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {admissions.map((a) => (
                    <tr key={a.admissionId}>
                      <td className="fw-semibold">{a.admissionId}</td>
                      <td>{a.patientName}</td>
                      <td>{a.age}</td>
                      <td>{a.bed}</td>
                      <td>{a.admitDate}</td>
                      <td>{a.diagnosis}</td>
                      <td>{a.days}</td>
                      <td>
                        <span className={`badge ${a.status === 'Active' ? 'text-bg-success' : 'text-bg-secondary'}`}>
                          {a.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPDAdmissionReport;
