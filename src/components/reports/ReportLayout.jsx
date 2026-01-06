import React from 'react';

const ReportLayout = ({ title, header, children, onPrint }) => {
  const print = () => (onPrint ? onPrint() : window.print());
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 mb-3">
          <h5 className="mb-0 text-primary">{title}</h5>
          <button className="btn btn-outline-secondary w-100 w-sm-auto" onClick={print}>Print</button>
        </div>
        <div className="mb-3">
          {header}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ReportLayout;
