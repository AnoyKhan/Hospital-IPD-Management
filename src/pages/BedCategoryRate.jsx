import React, { useState } from "react";

const BedCategoryRate = () => {
  const [categories, setCategories] = useState([
    { name: "General", rate: 1200 },
    { name: "Private", rate: 3000 },
    { name: "ICU", rate: 5500 },
  ]);

  const updateRate = (idx, value) => {
    const rate = Number(value) || 0;
    setCategories((c) =>
      c.map((cat, i) => (i === idx ? { ...cat, rate } : cat)),
    );
  };

  return (
    <div className="container-fluid" style={{ maxWidth: 700 }}>
      <h5 className="text-primary mb-3">Bed Category & Rate</h5>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th className="text-muted small text-uppercase">Category</th>
                  <th className="text-muted small text-uppercase">
                    Daily Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c, idx) => (
                  <tr key={c.name}>
                    <td>
                      <span className="badge bg-secondary">{c.name}</span>
                    </td>
                    <td style={{ maxWidth: 200 }}>
                      <div className="input-group">
                        <span className="input-group-text">Tk</span>
                        <input
                          type="number"
                          className="form-control"
                          value={c.rate}
                          onChange={(e) => updateRate(idx, e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-muted small">
            Rates are stored locally for demo.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedCategoryRate;
