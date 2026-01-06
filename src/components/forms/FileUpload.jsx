import React, { useRef, useState } from 'react';

const FileUpload = ({ label = 'Upload File', accept, onSelect }) => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const pick = () => inputRef.current?.click();
  const handle = (e) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    onSelect && onSelect(f);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <input type="file" ref={inputRef} onChange={handle} accept={accept} hidden />
      <button type="button" className="btn btn-outline-secondary btn-sm" onClick={pick}>{label}</button>
      {file && <span className="text-muted small">{file.name}</span>}
    </div>
  );
};

export default FileUpload;
