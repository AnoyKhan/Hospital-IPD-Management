import React, { useMemo, useState } from 'react';

const DueReport = () => {
  const [sortBy, setSortBy] = useState('amount');

  const dueData = useMemo(() => [
    { admissionId: 'IPD-2025-0003', patientName: 'Vikram Patel', amount: 25000, dueDate: '2025-12-10', daysOverdue: 15, status: 'Overdue' },
    { admissionId: 'IPD-2025-0008', patientName: 'Anita Sharma', amount: 12500, dueDate: '2025-12-15', daysOverdue: 10, status: 'Overdue' },
    { admissionId: 'IPD-2025-0014', patientName: 'David Brown', amount: 18000, dueDate: '2025-12-20', daysOverdue: 5, status: 'Due Soon' },
    { admissionId: 'IPD-2025-0019', patientName: 'Lisa Wong', amount: 8500, dueDate: '2025-12-28', daysOverdue: 0, status: 'Due Soon' },
    { admissionId: 'IPD-2025-0024', patientName: 'Carlos Mendez', amount: 35000, dueDate: '2025-12-05', daysOverdue: 20, status: 'Overdue' },
  ], []);

  const stats = useMemo(() => {
    const totalDue = dueData.reduce((sum, d) => sum + d.amount, 0);
    const overdue = dueData.filter((d) => d.status === 'Overdue').reduce((sum, d) => sum + d.amount, 0);
    const dueSoon = dueData.filter((d) => d.status === 'Due Soon').reduce((sum, d) => sum + d.amount, 0);
    return { totalDue, overdue, dueSoon, overdueCount: dueData.filter((d) => d.status === 'Overdue').length };
  }, [dueData]);

  const currency = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v || 0);

  const sorted = [...dueData].sort((a, b) => {
    if (sortBy === 'amount') return b.amount - a.amount;
    if (sortBy === 'days') return b.daysOverdue - a.daysOverdue;
    return a.dueDate.localeCompare(b.dueDate);
  });

  return (
    <div className="container-fluid">
      <div className="row g-3 mb-4">
        <div className="col-12">
          <h5 className="mb-3">Due Report</h5>
          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-primary">
                <div className="card-body">
                  <div className="text-muted small">Total Due</div>
                  <div className="fs-6 fw-bold">{currency(stats.totalDue)}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-danger">
                <div className="card-body">
                  <div className="text-muted small">Overdue Amount</div>
                  <div className="fs-6 fw-bold">{currency(stats.overdue)}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-warning">
                <div className="card-body">
                  <div className="text-muted small">Overdue Cases</div>
                  <div className="fs-6 fw-bold">{stats.overdueCount}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-info">
                <div className="card-body">
                  <div className="text-muted small">Due Soon</div>
                  <div className="fs-6 fw-bold">{currency(stats.dueSoon)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Outstanding Dues</h6>
                <select
                  className="form-select form-select-sm"
                  style={{ width: '150px' }}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="amount">Sort by Amount</option>
                  <option value="days">Sort by Days Overdue</option>
                  <option value="date">Sort by Due Date</option>
                </select>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-sm table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Admission ID</th>
                    <th>Patient Name</th>
                    <th className="text-end">Due Amount</th>
                    <th>Due Date</th>
                    <th>Days Overdue</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((d) => (
                    <tr key={d.admissionId}>
                      <td className="fw-semibold">{d.admissionId}</td>
                      <td>{d.patientName}</td>
                      <td className="text-end fw-semibold">{currency(d.amount)}</td>
                      <td>{d.dueDate}</td>
                      <td>{d.daysOverdue}</td>
                      <td>
                        <span
                          className={`badge ${d.status === 'Overdue' ? 'text-bg-danger' : 'text-bg-warning'}`}
                        >
                          {d.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary">Send Notice</button>
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

export default DueReport;
