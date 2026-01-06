import React, { useMemo } from 'react';
import ChargeBreakdownTable from '../../components/billing/ChargeBreakdownTable.jsx';
import TotalSummary from '../../components/billing/TotalSummary.jsx';

const FinalBillReview = () => {
  const charges = useMemo(() => ([
    { description: 'Bed Charges (10 days)', category: 'Bed', qty: 10, rate: 2000, date: '2025-12-25' },
    { description: 'Doctor Consultation', category: 'Professional', qty: 4, rate: 800, date: '2025-12-25' },
    { description: 'Surgical Procedure', category: 'Surgery', qty: 1, rate: 15000, date: '2025-12-16' },
    { description: 'Anesthesia', category: 'Surgery', qty: 1, rate: 3000, date: '2025-12-16' },
    { description: 'ICU Care (Post-op)', category: 'ICU', qty: 1, rate: 4000, date: '2025-12-16' },
    { description: 'Lab Tests', category: 'Lab', qty: 1, rate: 2500, date: '2025-12-25' },
    { description: 'Medications', category: 'Pharmacy', qty: 1, rate: 4800, date: '2025-12-25' },
  ]), []);

  const payments = useMemo(() => ([
    { amount: 20000, method: 'Card', reference: 'CC-VISA-9827', date: '2025-12-16' },
    { amount: 15000, method: 'Bank Transfer', reference: 'NEFT-456789', date: '2025-12-20' },
  ]), []);

  return (
    <div className="container-fluid">
      <div className="row g-3">
        <div className="col-12">
          <div className="alert alert-info d-flex justify-content-between align-items-center">
            <div>
              <strong>Final Bill Review.</strong> Please review and approve for discharge clearance.
            </div>
            <button className="btn btn-sm btn-outline-primary" onClick={() => window.print()}>
              🖨 Print Bill
            </button>
          </div>
        </div>

        <div className="col-lg-7">
          <ChargeBreakdownTable charges={charges} />
        </div>

        <div className="col-lg-5">
          <TotalSummary charges={charges} payments={payments} discount={1000} taxRate={0.05} dueAdjustment={0} />
        </div>

        <div className="col-12">
          <div className="card shadow-sm bg-light">
            <div className="card-body">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="approveFinance" />
                <label className="form-check-label" htmlFor="approveFinance">
                  I approve the final bill and discharge clearance
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalBillReview;
