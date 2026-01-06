import React, { useState } from 'react';

const NoteEditor = ({ initialValue = '', onSave, placeholder = 'Write notes...' }) => {
  const [text, setText] = useState(initialValue);

  return (
    <div className="vstack gap-2">
      <textarea className="form-control" rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder={placeholder} />
      <div className="d-flex gap-2">
        <button className="btn btn-primary btn-sm" onClick={() => onSave && onSave(text)}>Save</button>
        <button className="btn btn-outline-secondary btn-sm" onClick={() => setText(initialValue)}>Reset</button>
      </div>
    </div>
  );
};

export default NoteEditor;
