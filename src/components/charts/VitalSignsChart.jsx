import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VitalSignsChart = ({ data }) => {
  const series =
    data || [
      { time: '08:00', hr: 78, sys: 118, dia: 76, temp: 98.6 },
      { time: '10:00', hr: 80, sys: 120, dia: 78, temp: 98.9 },
      { time: '12:00', hr: 76, sys: 116, dia: 74, temp: 98.4 },
      { time: '14:00', hr: 82, sys: 124, dia: 80, temp: 99.1 },
      { time: '16:00', hr: 79, sys: 122, dia: 79, temp: 98.8 },
      { time: '18:00', hr: 77, sys: 117, dia: 75, temp: 98.7 },
    ];

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <h6 className="card-title mb-2">Vital Signs</h6>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={series} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hr" name="Heart Rate" stroke="#dc3545" dot={false} />
              <Line type="monotone" dataKey="sys" name="BP Systolic" stroke="#0d6efd" dot={false} />
              <Line type="monotone" dataKey="dia" name="BP Diastolic" stroke="#6c757d" dot={false} />
              <Line type="monotone" dataKey="temp" name="Temperature" stroke="#198754" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VitalSignsChart;
