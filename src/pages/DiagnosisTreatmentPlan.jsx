import React, { useState } from 'react';
import Timeline from '../components/timeline/Timeline.jsx';
import NoteEditor from '../components/forms/NoteEditor.jsx';

const DiagnosisTreatmentPlan = () => {
  const [items, setItems] = useState([
    { time: '2025-12-25 08:00', title: 'Initial Diagnosis', text: 'Dengue suspected. Monitor platelets.' },
    { time: '2025-12-25 10:00', title: 'Treatment Plan', text: 'IV fluids, antipyretics, avoid NSAIDs.' },
  ]);

  const add = (text) => setItems((i) => [{ time: new Date().toLocaleString(), title: 'Update', text }, ...i]);

  return (
    <div className="container-fluid" style={{ maxWidth: 900 }}>
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">Diagnosis & Treatment Plan</h5>
        <span className="text-muted small">IPD-001</span>
      </div>
      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body">
          <h6 className="card-title">Add Entry</h6>
          <NoteEditor onSave={add} placeholder="Diagnosis updates or treatment plan changes..." />
        </div>
      </div>
      <Timeline items={items.map((n) => ({ time: n.time, title: n.title, content: <p className="mb-0">{n.text}</p> }))} />
    </div>
  );
};

export default DiagnosisTreatmentPlan;
