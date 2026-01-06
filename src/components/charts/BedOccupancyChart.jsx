import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0d6efd', '#6c757d'];

const BedOccupancyChart = ({ occupied = 42, total = 60 }) => {
  const data = [
    { name: 'Occupied', value: occupied },
    { name: 'Available', value: Math.max(total - occupied, 0) }
  ];
  const percent = total > 0 ? Math.round((occupied / total) * 100) : 0;

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="card-title mb-0">Bed Occupancy</h6>
          <span className="badge bg-primary">{percent}%</span>
        </div>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={24} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BedOccupancyChart;
