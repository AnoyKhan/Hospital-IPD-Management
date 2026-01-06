import React from 'react';

const PaymentHistoryTimeline = ({ payments = [] }) => {
  const currency = (v) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'INR' }).format(v || 0);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Payment History</h6>
        <span className="text-muted small">{payments.length} records</span>
      </div>
      <ul className="list-group list-group-flush">
        {payments.length === 0 && (
          <li className="list-group-item text-muted">No payments yet</li>
        )}
        {payments.map((p, idx) => (
          <li key={idx} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-semibold">{currency(p.amount)}</div>
                <div className="small text-muted">{p.method} · Ref: {p.reference || '—'}</div>
              </div>
              <div className="text-muted small">{p.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistoryTimeline;
