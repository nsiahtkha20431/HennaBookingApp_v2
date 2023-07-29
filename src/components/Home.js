import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'Henna Appointment',
    start: new Date(2023, 7, 28, 10, 0), 
    end: new Date(2023, 7, 28, 11, 0),
  },
];

const Home = ({ events }) => {

  const handleSlotSelection = (slotInfo) => {
    const { start, end } = slotInfo;
    console.log('Selected slot from', start, 'to', end);
  };

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        selectable="true"
        step={60}
        onSelectSlot={handleSlotSelection}
      />
    </div>
  );

};


export default Home;