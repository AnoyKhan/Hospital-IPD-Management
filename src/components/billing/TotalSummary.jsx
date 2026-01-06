import React from 'react';

const TotalSummary = ({ charges = [], payments = [], discount = 0, taxRate = 0.0, dueAdjustment = 0 }) => {
  const currency = (v) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'INR' }).format(v || 0);
  const subtotal = charges.reduce((sum, c) => sum + (c.qty || 0) * (c.rate || 0), 0);
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax - discount - dueAdjustment;
  const paid = payments.reduce((sum, p) => sum + (p.amount || 0), 0);
  const balance = Math.max(0, grandTotal - paid);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h6 className="mb-0">Total Summary</h6>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-6 col-md-4">
            <div className="border rounded p-2">
              <div className="text-muted small">Subtotal</div>
              <div className="fw-semibold">{currency(subtotal)}</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="border rounded p-2">
              <div className="text-muted small">Tax ({Math.round(taxRate * 100)}%)</div>
              <div>{currency(tax)}</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="border rounded p-2">
              <div className="text-muted small">Discount</div>
              <div className="text-success">- {currency(discount)}</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="border rounded p-2">
              <div className="text-muted small">Due Adjustment</div>
              <div className="text-success">- {currency(dueAdjustment)}</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="border rounded p-2">
              <div className="text-muted small">Grand Total</div>
              <div className="fw-bold">{currency(grandTotal)}</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="border rounded p-2">
              <div className="text-muted small">Paid</div>
              <div className="text-primary fw-semibold">{currency(paid)}</div>
            </div>
          </div>
          <div className="col-12">
            <div className="border rounded p-3 bg-light d-flex justify-content-between align-items-center">
              <div className="text-muted">Balance Due</div>
              <div className="fs-5 fw-bold">{currency(balance)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSummary;
