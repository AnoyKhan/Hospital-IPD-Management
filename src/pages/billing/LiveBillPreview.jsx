import React, { useMemo } from 'react';
import ChargeBreakdownTable from '../../components/billing/ChargeBreakdownTable.jsx';
import TotalSummary from '../../components/billing/TotalSummary.jsx';
import PaymentHistoryTimeline from '../../components/billing/PaymentHistoryTimeline.jsx';

const LiveBillPreview = () => {
  const charges = useMemo(() => ([
    { description: 'Bed Charges - General Ward', category: 'Bed', qty: 3, rate: 1500, date: '2025-12-20' },
    { description: 'Doctor Consultation', category: 'Professional', qty: 2, rate: 750, date: '2025-12-21' },
    { description: 'Nursing Care', category: 'Service', qty: 3, rate: 300, date: '2025-12-21' },
    { description: 'CBC Test', category: 'Lab', qty: 1, rate: 500, date: '2025-12-22' },
    { description: 'X-Ray Chest', category: 'Radiology', qty: 1, rate: 900, date: '2025-12-22' },
  ]), []);

  const payments = useMemo(() => ([
    { amount: 3000, method: 'Cash', reference: 'ADV-1001', date: '2025-12-21' },
    { amount: 1500, method: 'UPI', reference: 'UPI-AX123', date: '2025-12-23' },
  ]), []);

  return (
    <div className="container-fluid">
      <div className="row g-2 g-md-3">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                <div>
                  <div className="fw-bold">IPD Bill · Admission #IPD-2025-0012</div>
                  <div className="text-muted small">Patient: John Doe · Age 42 · M · Bed G-12</div>
                </div>
                <div className="text-start text-md-end">
                  <div className="small text-muted">Updated: 25 Dec 2025</div>
                  <span className="badge text-bg-info">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <ChargeBreakdownTable charges={charges} />
        </div>
        <div className="col-12 col-lg-5">
          <TotalSummary charges={charges} payments={payments} discount={500} taxRate={0.05} dueAdjustment={0} />
          <div className="mt-2 mt-md-3">
            <PaymentHistoryTimeline payments={payments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBillPreview;
