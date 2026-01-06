import React, { useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const IncomeReport = () => {
  const [period, setPeriod] = useState('month');

  const incomeData = useMemo(() => [
    { date: 'Week 1', bed: 45000, surgery: 120000, pharmacy: 15000, lab: 8000, total: 188000 },
    { date: 'Week 2', bed: 48000, surgery: 85000, pharmacy: 18000, lab: 9500, total: 160500 },
    { date: 'Week 3', bed: 50000, surgery: 150000, pharmacy: 16000, lab: 10000, total: 226000 },
    { date: 'Week 4', bed: 44000, surgery: 95000, pharmacy: 17000, lab: 8500, total: 164500 },
  ], []);

  const stats = useMemo(() => {
    const totalIncome = incomeData.reduce((sum, d) => sum + d.total, 0);
    const avgIncome = (totalIncome / incomeData.length).toFixed(0);
    return {
      totalIncome: totalIncome.toLocaleString(),
      avgIncome: avgIncome.toLocaleString(),
      highest: '226,000',
    };
  }, [incomeData]);

  const currency = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v || 0);

  return (
    <div className="container-fluid">
      <div className="row g-3 mb-4">
        <div className="col-12">
          <h5 className="mb-3">Income Report</h5>
          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-primary">
                <div className="card-body">
                  <div className="text-muted small">Total Income</div>
                  <div className="fs-6 fw-bold">{currency(739000)}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-success">
                <div className="card-body">
                  <div className="text-muted small">Avg Weekly</div>
                  <div className="fs-6 fw-bold">{currency(184750)}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-info">
                <div className="card-body">
                  <div className="text-muted small">Highest Week</div>
                  <div className="fs-6 fw-bold">{currency(226000)}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-warning">
                <div className="card-body">
                  <div className="text-muted small">Growth</div>
                  <div className="fs-6 fw-bold text-success">+12.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Weekly Income Trend</h6>
                <select
                  className="form-select form-select-sm"
                  style={{ width: '150px' }}
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="week">Weekly</option>
                  <option value="month">Monthly</option>
                </select>
              </div>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={incomeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(v) => currency(v)} />
                  <Legend />
                  <Line type="monotone" dataKey="total" stroke="#007bff" strokeWidth={2} name="Total Income" />
                  <Line type="monotone" dataKey="surgery" stroke="#28a745" strokeWidth={2} name="Surgery" />
                  <Line type="monotone" dataKey="bed" stroke="#ffc107" strokeWidth={2} name="Bed" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeReport;
