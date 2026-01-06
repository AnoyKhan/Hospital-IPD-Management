import React from 'react';

const MAP = {
  InStock: { cls: 'bg-success', label: 'In Stock' },
  LowStock: { cls: 'bg-warning', label: 'Low Stock' },
  OutOfStock: { cls: 'bg-danger', label: 'Out of Stock' },
};

const StockBadge = ({ status }) => {
  const s = MAP[status] || { cls: 'bg-secondary', label: String(status || 'Unknown') };
  return <span className={`badge ${s.cls}`}>{s.label}</span>;
};

export default StockBadge;
