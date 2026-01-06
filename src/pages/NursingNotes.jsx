import React, { useState } from 'react';
import Timeline from '../components/timeline/Timeline.jsx';
import NoteEditor from '../components/forms/NoteEditor.jsx';

const NursingNotes = () => {
  const [notes, setNotes] = useState([
    { time: '2025-12-25 07:30', title: 'Routine Check', text: 'Patient temperature 98.7°F, pulse 78.' },
    { time: '2025-12-25 12:30', title: 'Medication', text: 'Paracetamol 650 mg administered.' },
  ]);

  const addNote = (text) => setNotes((n) => [{ time: new Date().toLocaleString(), title: 'Nursing Note', text }, ...n]);

  return (
    <div className="container-fluid" style={{ maxWidth: 900 }}>
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">Nursing Notes</h5>
        <span className="text-muted small">IPD-001</span>
      </div>
      <div className="card border-0 shadow-sm mb-3">
        <div className="card-body">
          <h6 className="card-title">Add Note</h6>
          <NoteEditor onSave={addNote} placeholder="Vitals, medication, observation..." />
        </div>
      </div>
      <Timeline items={notes.map((n) => ({ time: n.time, title: n.title, content: <p className="mb-0">{n.text}</p> }))} />
    </div>
  );
};

export default NursingNotes;
