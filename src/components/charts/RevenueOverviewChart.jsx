import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueOverviewChart = ({ data }) => {
  const series =
    data || [
      { date: 'Mon', revenue: 1200 },
      { date: 'Tue', revenue: 1800 },
      { date: 'Wed', revenue: 1500 },
      { date: 'Thu', revenue: 2200 },
      { date: 'Fri', revenue: 3000 },
      { date: 'Sat', revenue: 2600 },
      { date: 'Sun', revenue: 2000 }
    ];

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <h6 className="card-title mb-2">Revenue Overview</h6>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <AreaChart data={series} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0d6efd" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0d6efd" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#0d6efd" fillOpacity={1} fill="url(#colorRev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueOverviewChart;
