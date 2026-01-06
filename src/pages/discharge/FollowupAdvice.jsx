import React, { useMemo } from 'react';

const FollowupAdvice = () => {
  const advice = useMemo(() => ({
    medications: [
      { name: 'Amoxicillin', dose: '500mg', frequency: 'TDS', duration: '5 days', instructions: 'Take with meals' },
      { name: 'Paracetamol', dose: '500mg', frequency: 'As needed (max 4/day)', duration: 'For 2 weeks', instructions: 'For pain relief' },
      { name: 'Iron Supplement', dose: '1 tablet daily', frequency: 'OD', duration: '1 month', instructions: 'Take in morning with juice' },
    ],
    restrictions: [
      'Avoid heavy lifting for 4 weeks',
      'No strenuous exercise for 2 weeks',
      'Avoid swimming until sutures site is fully healed',
      'No driving for 5 days',
    ],
    dietaryAdvice: [
      'Eat soft, easily digestible foods for the first week',
      'Increase protein intake for wound healing',
      'Drink plenty of water (at least 2-3 liters daily)',
      'Avoid spicy, oily, and fried foods',
    ],
    woundCare: [
      'Keep wound dry and covered until sutures are removed',
      'Clean with mild soap and water daily',
      'Change dressing if wet or soiled',
      'Watch for signs of infection: redness, swelling, discharge',
    ],
    followup: [
      { type: 'General Check-up', timing: '7 days', doctor: 'Dr. Sarah Johnson' },
      { type: 'Suture Removal', timing: '10-12 days', doctor: 'Dr. Sarah Johnson' },
      { type: 'Follow-up Review', timing: '4 weeks', doctor: 'Dr. Sarah Johnson' },
    ],
    warnings: [
      'Fever above 101°F',
      'Severe abdominal pain or bleeding',
      'Signs of infection at wound site',
      'Difficulty in breathing or chest pain',
    ],
  }), []);

  return (
    <div className="container-fluid">
      <div className="row g-3">
        {/* Header */}
        <div className="col-12">
          <div className="alert alert-success d-flex justify-content-between align-items-center">
            <div>
              <strong>Follow-up Instructions.</strong> Please follow these guidelines for optimal recovery.
            </div>
            <button className="btn btn-sm btn-outline-success" onClick={() => window.print()}>
              🖨 Print Advice
            </button>
          </div>
        </div>

        {/* Medications */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Medications to Take Home</h6>
            </div>
            <div className="table-responsive">
              <table className="table table-sm table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th style={{width:'30%'}}>Medicine</th>
                    <th style={{width:'20%'}}>Dose</th>
                    <th style={{width:'25%'}}>Frequency</th>
                    <th style={{width:'25%'}}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {advice.medications.map((m, i) => (
                    <tr key={i}>
                      <td><strong>{m.name}</strong><br/><span className="small text-muted">{m.instructions}</span></td>
                      <td>{m.dose}</td>
                      <td>{m.frequency}</td>
                      <td>{m.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Restrictions */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Activity Restrictions</h6>
            </div>
            <ul className="list-group list-group-flush">
              {advice.restrictions.map((r, i) => (
                <li key={i} className="list-group-item">
                  <span className="badge text-bg-warning me-2">⚠</span>{r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Diet */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Dietary Advice</h6>
            </div>
            <ul className="list-group list-group-flush">
              {advice.dietaryAdvice.map((d, i) => (
                <li key={i} className="list-group-item">
                  <span className="badge text-bg-info me-2">🥗</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wound Care */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Wound Care & Hygiene</h6>
            </div>
            <ul className="list-group list-group-flush">
              {advice.woundCare.map((w, i) => (
                <li key={i} className="list-group-item">
                  <span className="badge text-bg-secondary me-2">🩹</span>{w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow-ups */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h6 className="mb-0">Follow-up Appointments</h6>
            </div>
            <div className="table-responsive">
              <table className="table table-sm mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Type</th>
                    <th>Timing</th>
                    <th>With Doctor</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {advice.followup.map((f, i) => (
                    <tr key={i}>
                      <td><strong>{f.type}</strong></td>
                      <td>{f.timing}</td>
                      <td>{f.doctor}</td>
                      <td><button className="btn btn-sm btn-outline-primary">Schedule</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="col-12">
          <div className="alert alert-danger">
            <h6 className="mb-3">⚠️ Seek Immediate Medical Care If:</h6>
            <div className="row">
              {advice.warnings.map((w, i) => (
                <div key={i} className="col-md-6 small">• {w}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowupAdvice;
