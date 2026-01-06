import React from 'react';
import DataTable from '../components/table/DataTable.jsx';
import { mockPatients } from '../services/mockData.js';

const PatientsList = () => {
  const columns = [
    { key: 'id', label: 'IPD No.' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'gender', label: 'Gender' },
    { key: 'ward', label: 'Ward' },
    { key: 'bed', label: 'Bed' },
    { key: 'status', label: 'Status', render: (v) => <span className={`badge ${v === 'Admitted' ? 'bg-success' : 'bg-secondary'}`}>{v}</span> },
  ];

  return (
    <div className="container-fluid">
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">Patients</h5>
        <a href="/patients/register" className="btn btn-primary btn-sm w-100 w-sm-auto">Register Patient</a>
      </div>
      <DataTable
        columns={columns}
        data={mockPatients}
        searchableKeys={["id", "name", "ward"]}
        filterKey="status"
        filters={[{ value: 'Admitted', label: 'Admitted' }, { value: 'Discharged', label: 'Discharged' }]}
      />
    </div>
  );
};

export default PatientsList;
