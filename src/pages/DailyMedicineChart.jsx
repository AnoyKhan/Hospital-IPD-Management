import React, { useMemo, useState } from 'react';

const times = ['Morning', 'Noon', 'Evening', 'Night'];

const DailyMedicineChart = () => {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [rows, setRows] = useState([
    { medicine: 'Paracetamol 650 mg', schedule: { Morning: true, Noon: false, Evening: true, Night: false }, given: {} },
    { medicine: 'Omeprazole 20 mg', schedule: { Morning: true, Noon: false, Evening: false, Night: false }, given: {} },
    { medicine: 'Ceftriaxone 1 g', schedule: { Morning: false, Noon: true, Evening: false, Night: false }, given: {} },
  ]);

  const alertText = useMemo(() => `Chart for ${date} · ${rows.length} medicines`, [date, rows.length]);

  const toggleGiven = (idx, time) => {
    setRows((arr) => arr.map((r, i) => (i === idx ? { ...r, given: { ...r.given, [time]: !r.given[time] } } : r)));
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">Daily Medicine Chart</h5>
        <span className="text-muted small">IPD-001</span>
      </div>

      <div className="alert alert-info border d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2">
        <div>{alertText}</div>
        <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 w-100 w-md-auto">
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
          <button className="btn btn-outline-secondary btn-sm" onClick={() => window.print()}>Print Chart</button>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th className="text-muted small text-uppercase">Medicine</th>
                  {times.map((t) => (
                    <th key={t} className="text-muted small text-uppercase">{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr key={r.medicine}>
                    <td>{r.medicine}</td>
                    {times.map((t) => (
                      <td key={t}>
                        {r.schedule[t] ? (
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={`chk-${idx}-${t}`} checked={Boolean(r.given[t])} onChange={() => toggleGiven(idx, t)} />
                            <label className="form-check-label" htmlFor={`chk-${idx}-${t}`}>Given</label>
                          </div>
                        ) : (
                          <span className="text-muted small">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMedicineChart;
