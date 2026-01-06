import React from 'react';

const ChargeBreakdownTable = ({ charges = [] }) => {
  const formatCurrency = (v) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'INR', minimumFractionDigits: 2 }).format(v || 0);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Charge Breakdown</h6>
          <span className="text-muted small">Items: {charges.length}</span>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-sm table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th style={{width:'28%'}}>Description</th>
              <th>Category</th>
              <th className="text-end">Qty</th>
              <th className="text-end">Rate</th>
              <th className="text-end">Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {charges.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">No charges added</td>
              </tr>
            )}
            {charges.map((c, idx) => (
              <tr key={idx}>
                <td>{c.description}</td>
                <td><span className="badge text-bg-secondary">{c.category}</span></td>
                <td className="text-end">{c.qty}</td>
                <td className="text-end">{formatCurrency(c.rate)}</td>
                <td className="text-end fw-semibold">{formatCurrency((c.qty || 0) * (c.rate || 0))}</td>
                <td>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargeBreakdownTable;
