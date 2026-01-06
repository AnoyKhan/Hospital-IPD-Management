import React, { useState } from 'react';
import StockBadge from '../components/common/StockBadge.jsx';

const IssueReturn = () => {
  const [issued, setIssued] = useState([
    { id: 'ISS-001', patientId: 'IPD-001', medicine: 'Paracetamol', qty: 10, status: 'Issued' },
    { id: 'ISS-002', patientId: 'IPD-001', medicine: 'Ceftriaxone', qty: 2, status: 'Issued' },
  ]);
  const [message, setMessage] = useState('');

  const issue = (med, qty) => {
    const id = `ISS-${String(issued.length + 1).padStart(3, '0')}`;
    setIssued((arr) => [{ id, patientId: 'IPD-001', medicine: med, qty, status: 'Issued' }, ...arr]);
    setMessage(`Issued ${qty} of ${med} to IPD-001`);
  };

  const ret = (id, qty) => {
    setIssued((arr) => arr.map((x) => (x.id === id ? { ...x, status: `Returned ${qty}` } : x)));
    setMessage(`Returned ${qty} from ${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="text-primary mb-0">Issue & Return</h5>
        <span className="text-muted small">IPD-001</span>
      </div>

      {message && <div className="alert alert-success border">{message}</div>}

      <div className="row g-3">
        <div className="col-12 col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Issue</h6>
              <div className="vstack gap-2">
                <div className="input-group">
                  <span className="input-group-text">Medicine</span>
                  <input id="med" className="form-control" placeholder="e.g., Paracetamol" />
                </div>
                <div className="input-group">
                  <span className="input-group-text">Qty</span>
                  <input id="qty" type="number" className="form-control" defaultValue={1} />
                </div>
                <div>
                  <button className="btn btn-primary" onClick={() => issue(document.getElementById('med').value, Number(document.getElementById('qty').value) || 1)}>Issue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Issued Items</h6>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th className="text-muted small text-uppercase">Issue ID</th>
                      <th className="text-muted small text-uppercase">Medicine</th>
                      <th className="text-muted small text-uppercase">Qty</th>
                      <th className="text-muted small text-uppercase">Stock</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {issued.map((it) => (
                      <tr key={it.id}>
                        <td>{it.id}</td>
                        <td>{it.medicine}</td>
                        <td>{it.qty}</td>
                        <td><StockBadge status={it.medicine === 'Ceftriaxone' ? 'LowStock' : 'InStock'} /></td>
                        <td>
                          <div className="input-group" style={{ maxWidth: 200 }}>
                            <span className="input-group-text">Return</span>
                            <input type="number" className="form-control" defaultValue={0} id={`ret-${it.id}`} />
                            <button className="btn btn-outline-secondary" onClick={() => ret(it.id, Number(document.getElementById(`ret-${it.id}`).value) || 0)}>Submit</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueReturn;
