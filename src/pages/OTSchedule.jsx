import React, { useState } from 'react';
import Calendar from '../components/calendar/Calendar.jsx';

const OTSchedule = () => {
  const [events, setEvents] = useState([
    { date: new Date().toISOString().slice(0,10), title: 'Appendectomy (IPD-002)', status: 'Booked' },
    { date: new Date().toISOString().slice(0,10), title: 'Knee Arthroscopy (IPD-003)', status: 'Pending' },
    { date: new Date(Date.now()+86400000).toISOString().slice(0,10), title: 'Cholecystectomy (IPD-004)', status: 'Booked' },
  ]);

  const onSelectDate = (date) => {
    // eslint-disable-next-line no-alert
    alert(`Selected date: ${date}`);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 mb-3">
        <h5 className="text-primary mb-0">OT Schedule</h5>
        <span className="text-muted small">IPD Operations</span>
      </div>
      <Calendar events={events} onSelectDate={onSelectDate} />
    </div>
  );
};

export default OTSchedule;
