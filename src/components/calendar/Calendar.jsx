import React, { useMemo, useState } from 'react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function monthMatrix(year, month) {
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay());
  const weeks = [];
  for (let w = 0; w < 6; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(start);
      date.setDate(start.getDate() + w * 7 + d);
      days.push(date);
    }
    weeks.push(days);
  }
  return weeks;
}

const Calendar = ({ events = [], onSelectDate }) => {
  const [cursor, setCursor] = useState(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const matrix = useMemo(() => monthMatrix(year, month), [year, month]);

  const prev = () => setCursor(new Date(year, month - 1, 1));
  const next = () => setCursor(new Date(year, month + 1, 1));

  const key = (d) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const byDay = useMemo(() => {
    const map = {};
    for (const ev of events) {
      const k = ev.date;
      (map[k] = map[k] || []).push(ev);
    }
    return map;
  }, [events]);

  const monthName = cursor.toLocaleString(undefined, { month: 'long', year: 'numeric' });

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary btn-sm" onClick={prev}>‹</button>
            <button className="btn btn-outline-secondary btn-sm" onClick={next}>›</button>
            <h6 className="mb-0">{monthName}</h6>
          </div>
          <div className="small text-muted">Select a date to book/view</div>
        </div>
        <div className="d-grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
          {DAYS.map((d) => (
            <div key={d} className="text-muted small text-uppercase">{d}</div>
          ))}
          {matrix.map((week, wi) => (
            <React.Fragment key={wi}>
              {week.map((d) => {
                const inMonth = d.getMonth() === month;
                const k = key(d);
                const list = byDay[k] || [];
                return (
                  <button
                    key={k}
                    type="button"
                    className={`btn border text-start ${inMonth ? '' : 'bg-light'}`}
                    onClick={() => onSelectDate && onSelectDate(k)}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fw-semibold">{d.getDate()}</span>
                      {list.length > 0 && <span className="badge bg-primary">{list.length}</span>}
                    </div>
                    <div className="mt-1 vstack gap-1">
                      {list.slice(0,3).map((ev, idx) => (
                        <span key={idx} className={`badge ${ev.status === 'Booked' ? 'bg-success' : ev.status === 'Pending' ? 'bg-warning' : 'bg-secondary'}`}>{ev.title}</span>
                      ))}
                      {list.length > 3 && <span className="small text-muted">+{list.length - 3} more</span>}
                    </div>
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
