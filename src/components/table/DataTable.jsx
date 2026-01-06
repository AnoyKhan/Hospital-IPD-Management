import React, { useMemo, useState } from 'react';

const DataTable = ({ columns, data, searchableKeys = [], filterKey, filters = [] }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  const filtered = useMemo(() => {
    let rows = data || [];
    if (query) {
      const q = query.toLowerCase();
      rows = rows.filter((row) =>
        searchableKeys.some((k) => String(row[k] ?? '').toLowerCase().includes(q))
      );
    }
    if (filterKey && filter) {
      rows = rows.filter((row) => String(row[filterKey]) === String(filter));
    }
    return rows;
  }, [data, query, filter, searchableKeys, filterKey]);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="row g-2 mb-3">
          <div className="col-12 col-sm-8 col-md-7 col-lg-6">
            <input
              className="form-control"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {filterKey && (
            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
              <select className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">All</option>
                {filters.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="text-muted small text-uppercase">{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr key={idx}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={columns.length} className="text-center text-muted">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
