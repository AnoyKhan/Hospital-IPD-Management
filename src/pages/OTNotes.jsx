import React, { useState } from 'react';
import Timeline from '../components/timeline/Timeline.jsx';
import NoteEditor from '../components/forms/NoteEditor.jsx';

const OTNotes = () => {
  const [items, setItems] = useState([
    { time: '2025-12-25 10:00', title: 'Pre-op Check', text: 'Consent verified, fasting confirmed.' },
    { time: '2025-12-25 13:30', title: 'Post-op', text: 'Stable vitals, shifted to recovery.' },
  ]);

  const add = (text) => setItems((i) => [{ time: new Date().toLocaleString(), title: 'OT Note', text }, ...i]);

  return (
    <div className="container-fluid" style={{ maxWidth: 900 }}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="text-primary mb-0">OT Notes</h5>
        <span className="text-muted small">IPD-001</span>
      </div>
      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body">
          <h6 className="card-title">Add Note</h6>
          <NoteEditor onSave={add} placeholder="Pre-op, intra-op, post-op notes..." />
        </div>
      </div>
      <Timeline items={items.map((n) => ({ time: n.time, title: n.title, content: <p className="mb-0">{n.text}</p> }))} />
    </div>
  );
};

export default OTNotes;
