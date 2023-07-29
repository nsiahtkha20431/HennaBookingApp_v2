import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../custom-calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

// const events = [
//   {
//     title: 'Henna Appointment',
//     start: new Date(2023, 7, 28, 10, 0), 
//     end: new Date(2023, 7, 28, 11, 0),
//   },
// ];

const Home = () => {

  const [events, setEvents] = useState([
    {
      title: 'Henna Appointment',
      start: new Date(2023, 7, 28, 10, 0),
      end: new Date(2023, 7, 28, 11, 0),
    },
  ]);

  // const handleSlotSelection = (slotInfo) => {
  //   const { start, end } = slotInfo;
  //   console.log('Selected slot from', start, 'to', end);
  // };

  const handleSlotSelection = (slotInfo) => {
    const { start, end } = slotInfo;
    const newEvent = {
      title: 'Henna appointment for your_name',
      start: start,
      end: end,
    };
  
    setEvents([...events, newEvent]); // Add new event to the events array and update the state
  
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