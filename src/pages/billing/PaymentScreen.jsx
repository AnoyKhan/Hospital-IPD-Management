import React, { useMemo, useState } from 'react';
import ChargeBreakdownTable from '../../components/billing/ChargeBreakdownTable.jsx';
import TotalSummary from '../../components/billing/TotalSummary.jsx';
import PaymentHistoryTimeline from '../../components/billing/PaymentHistoryTimeline.jsx';

const PaymentScreen = () => {
  const charges = useMemo(() => ([
    { description: 'Bed Charges - General Ward', category: 'Bed', qty: 4, rate: 1500, date: '2025-12-20' },
    { description: 'Doctor Consultation', category: 'Professional', qty: 3, rate: 750, date: '2025-12-21' },
    { description: 'Nursing Care', category: 'Service', qty: 4, rate: 300, date: '2025-12-21' },
    { description: 'MRI Scan', category: 'Radiology', qty: 1, rate: 5400, date: '2025-12-22' },
  ]), []);

  const [payments, setPayments] = useState([
    { amount: 5000, method: 'Cash', reference: 'ADV-1007', date: '2025-12-22' },
  ]);
  const [form, setForm] = useState({ amount: '', method: 'Cash', reference: '', date: new Date().toISOString().slice(0,10) });
  const [discount, setDiscount] = useState(0);
  const [taxRate, setTaxRate] = useState(0.05);

  const submitPayment = (e) => {
    e.preventDefault();
    const amt = Number(form.amount);
    if (!amt || amt <= 0) return;
    setPayments((prev) => [{ amount: amt, method: form.method, reference: form.reference, date: form.date }, ...prev]);
    setForm({ amount: '', method: form.method, reference: '', date: new Date().toISOString().slice(0,10) });
  };

  return (
    <div className="container-fluid">
      <div className="row g-2 g-md-3">
        <div className="col-12 col-lg-7">
          <ChargeBreakdownTable charges={charges} />
        </div>
        <div className="col-12 col-lg-5">
          <TotalSummary charges={charges} payments={payments} discount={discount} taxRate={taxRate} dueAdjustment={0} />
          <div className="card shadow-sm mt-2 mt-md-3">
            <div className="card-header bg-white">
              <h6 className="mb-0">Record Payment</h6>
            </div>
            <div className="card-body">
              <form onSubmit={submitPayment} className="row g-2 g-md-3">
                <div className="col-12 col-sm-6">
                  <label className="form-label">Amount</label>
                  <input type="number" className="form-control" value={form.amount} onChange={(e)=>setForm({...form, amount:e.target.value})} min="1" required />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Method</label>
                  <select className="form-select" value={form.method} onChange={(e)=>setForm({...form, method:e.target.value})}>
                    <option>Cash</option>
                    <option>Card</option>
                    <option>UPI</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Reference</label>
                  <input type="text" className="form-control" value={form.reference} onChange={(e)=>setForm({...form, reference:e.target.value})} placeholder="Txn/Cheque/Ref" />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Date</label>
                  <input type="date" className="form-control" value={form.date} onChange={(e)=>setForm({...form, date:e.target.value})} />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Discount</label>
                  <input type="number" className="form-control" value={discount} onChange={(e)=>setDiscount(Number(e.target.value)||0)} min="0" />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Tax Rate (%)</label>
                  <input type="number" className="form-control" value={Math.round(taxRate*100)} onChange={(e)=>setTaxRate((Number(e.target.value)||0)/100)} min="0" max="100" />
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button className="btn btn-primary w-100 w-sm-auto" type="submit">Add Payment</button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-2 mt-md-3">
            <PaymentHistoryTimeline payments={payments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
