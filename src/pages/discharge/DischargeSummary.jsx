import React, { useMemo } from 'react';

const DischargeSummary = () => {
  const discharge = useMemo(() => ({
    admissionId: 'IPD-2025-0045',
    patientName: 'Jane Smith',
    age: 38,
    gender: 'F',
    bedNumber: 'A-15',
    admissionDate: '2025-12-15',
    dischargeDate: '2025-12-25',
    totalStay: '10 days',
    primaryDiagnosis: 'Appendicitis (post-operative)',
    secondaryDiagnoses: ['Mild anemia', 'Hypertension (controlled)'],
    procedures: ['Appendectomy under general anesthesia'],
    dischargeSummary: 'Patient admitted with acute abdominal pain and confirmed appendicitis. Successful laparoscopic appendectomy performed on 2025-12-16. Postoperative recovery was uneventful.',
    clinicalNotes: [
      { date: '2025-12-21', note: 'Sutures removed; wound healing well' },
      { date: '2025-12-24', note: 'Patient mobilizing independently; appetite good' },
      { date: '2025-12-25', note: 'Discharged in stable condition' },
    ],
    vitalSigns: {
      temperature: '98.6°F',
      bloodPressure: '128/82 mmHg',
      heartRate: '78 bpm',
      respiratoryRate: '18 breaths/min',
    },
  }), []);

  return (
    <div className="container-fluid">
      <div className="row g-3">
        {/* Header */}
        <div className="col-12">
          <div className="card shadow-sm border-left border-primary">
            <div className="card-body">
              <h5 className="mb-3">Discharge Summary</h5>
              <div className="row g-2">
                <div className="col-md-6">
                  <div><strong>Admission ID:</strong> {discharge.admissionId}</div>
                  <div><strong>Patient:</strong> {discharge.patientName}, {discharge.age}y {discharge.gender}</div>
                  <div><strong>Bed:</strong> {discharge.bedNumber}</div>
                </div>
                <div className="col-md-6 text-md-end">
                  <div><strong>Admitted:</strong> {discharge.admissionDate}</div>
                  <div><strong>Discharged:</strong> {discharge.dischargeDate}</div>
                  <div><strong>Stay:</strong> {discharge.totalStay}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnosis & Procedures */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Diagnosis</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="small text-muted">Primary</div>
                <div className="fw-semibold">{discharge.primaryDiagnosis}</div>
              </div>
              {discharge.secondaryDiagnoses.length > 0 && (
                <div>
                  <div className="small text-muted">Secondary</div>
                  <ul className="small mb-0">
                    {discharge.secondaryDiagnoses.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Procedures Performed</h6>
            </div>
            <div className="card-body">
              {discharge.procedures.length === 0 ? (
                <div className="text-muted">None</div>
              ) : (
                <ul className="mb-0">
                  {discharge.procedures.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Clinical Summary */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Clinical Summary</h6>
            </div>
            <div className="card-body">
              <p className="mb-3">{discharge.dischargeSummary}</p>
              <h6 className="mb-2">Recent Clinical Notes</h6>
              {discharge.clinicalNotes.map((cn, i) => (
                <div key={i} className="mb-2 pb-2 border-bottom">
                  <div className="small text-muted">{cn.date}</div>
                  <div>{cn.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Vital Signs */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Final Vital Signs (Discharge)</h6>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <div className="col-6 col-md-3">
                  <div className="text-muted small">Temperature</div>
                  <div className="fw-semibold">{discharge.vitalSigns.temperature}</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="text-muted small">BP</div>
                  <div className="fw-semibold">{discharge.vitalSigns.bloodPressure}</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="text-muted small">HR</div>
                  <div className="fw-semibold">{discharge.vitalSigns.heartRate}</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="text-muted small">RR</div>
                  <div className="fw-semibold">{discharge.vitalSigns.respiratoryRate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DischargeSummary;
