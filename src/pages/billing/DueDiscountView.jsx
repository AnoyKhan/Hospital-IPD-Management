import React, { useMemo, useState } from 'react';
import ChargeBreakdownTable from '../../components/billing/ChargeBreakdownTable.jsx';
import TotalSummary from '../../components/billing/TotalSummary.jsx';

const DueDiscountView = () => {
  const charges = useMemo(() => ([
    { description: 'Bed Charges - Private Room', category: 'Bed', qty: 5, rate: 3000, date: '2025-12-20' },
    { description: 'Physiotherapy Session', category: 'Service', qty: 2, rate: 1200, date: '2025-12-21' },
    { description: 'Biochemistry Panel', category: 'Lab', qty: 1, rate: 1800, date: '2025-12-22' },
  ]), []);

  const [discount, setDiscount] = useState(0);
  const [dueAdjustment, setDueAdjustment] = useState(0);
  const payments = useMemo(() => ([{ amount: 10000, method: 'Card', reference: 'POS-9827', date: '2025-12-21' }]), []);

  return (
    <div className="container-fluid">
      <div className="row g-2 g-md-3">
        <div className="col-12 col-lg-7">
          <ChargeBreakdownTable charges={charges} />
        </div>
        <div className="col-12 col-lg-5">
          <TotalSummary charges={charges} payments={payments} discount={discount} taxRate={0.05} dueAdjustment={dueAdjustment} />
          <div className="card shadow-sm mt-2 mt-md-3">
            <div className="card-header bg-white">
              <h6 className="mb-0">Due & Discount</h6>
            </div>
            <div className="card-body">
              <div className="row g-2 g-md-3">
                <div className="col-12 col-sm-6">
                  <label className="form-label">Discount Amount</label>
                  <input type="number" className="form-control" value={discount} onChange={(e)=>setDiscount(Number(e.target.value)||0)} min="0" />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Due Adjustment</label>
                  <input type="number" className="form-control" value={dueAdjustment} onChange={(e)=>setDueAdjustment(Number(e.target.value)||0)} min="0" />
                </div>
                <div className="col-12">
                  <div className="alert alert-info mb-0">
                    Adjust discount and dues as per policy. Changes reflect in the live bill and balance due.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DueDiscountView;
