import React, { useState } from 'react';
import Timeline from '../components/timeline/Timeline.jsx';
import NoteEditor from '../components/forms/NoteEditor.jsx';

const DoctorVisitNotes = () => {
  const [notes, setNotes] = useState([
    { time: '2025-12-25 09:30', title: 'Morning Round', text: 'Patient stable. Continue IV fluids. Order CBC.' },
    { time: '2025-12-25 14:15', title: 'Afternoon Review', text: 'Fever subsiding. Start oral antibiotics from tomorrow.' },
  ]);

  const addNote = (text) => {
    const item = { time: new Date().toLocaleString(), title: 'Doctor Note', text };
    setNotes((n) => [item, ...n]);
  };

  const items = notes.map((n) => ({
    time: n.time,
    title: n.title,
    content: <p className="mb-0">{n.text}</p>,
  }));

  return (
    <div className="container-fluid" style={{ maxWidth: 900 }}>
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">Doctor Visit Notes</h5>
        <span className="text-muted small">IPD-001</span>
      </div>
      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body">
          <h6 className="card-title">Add Note</h6>
          <NoteEditor onSave={addNote} placeholder="Assessment, plan, orders..." />
        </div>
      </div>
      <Timeline items={items} />
    </div>
  );
};

export default DoctorVisitNotes;
