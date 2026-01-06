import React, { useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const BedOccupancyReport = () => {
  const [dateRange, setDateRange] = useState('week');

  const occupancyData = useMemo(() => [
    { day: 'Mon', occupied: 25, vacant: 10 },
    { day: 'Tue', occupied: 28, vacant: 7 },
    { day: 'Wed', occupied: 26, vacant: 9 },
    { day: 'Thu', occupied: 30, vacant: 5 },
    { day: 'Fri', occupied: 29, vacant: 6 },
    { day: 'Sat', occupied: 27, vacant: 8 },
    { day: 'Sun', occupied: 24, vacant: 11 },
  ], []);

  const wardData = useMemo(() => [
    { name: 'Ward A', value: 15, fill: '#17a2b8' },
    { name: 'Ward B', value: 10, fill: '#28a745' },
    { name: 'Ward C', value: 8, fill: '#ffc107' },
  ], []);

  const stats = useMemo(() => ({
    totalBeds: 35,
    occupied: 27,
    vacant: 8,
    occupancyRate: '77%',
  }), []);

  return (
    <div className="container-fluid">
      <div className="row g-2 g-md-3 mb-3 mb-md-4">
        <div className="col-12">
          <h5 className="mb-2 mb-md-3">Bed Occupancy Report</h5>
          <div className="row g-2 g-md-3">
            <div className="col-6 col-sm-6 col-md-3">
              <div className="card shadow-sm border-left border-primary">
                <div className="card-body">
                  <div className="text-muted small">Total Beds</div>
                  <div className="fs-5 fw-bold">{stats.totalBeds}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-success">
                <div className="card-body">
                  <div className="text-muted small">Occupied</div>
                  <div className="fs-5 fw-bold">{stats.occupied}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-danger">
                <div className="card-body">
                  <div className="text-muted small">Vacant</div>
                  <div className="fs-5 fw-bold">{stats.vacant}</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card shadow-sm border-left border-warning">
                <div className="card-body">
                  <div className="text-muted small">Occupancy Rate</div>
                  <div className="fs-5 fw-bold">{stats.occupancyRate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Daily Occupancy Trend</h6>
                <select
                  className="form-select form-select-sm"
                  style={{ width: '150px' }}
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="occupied" stackId="a" fill="#28a745" />
                  <Bar dataKey="vacant" stackId="a" fill="#e3e6f0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h6 className="mb-0">Occupancy by Ward</h6>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={wardData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {wardData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedOccupancyReport;
