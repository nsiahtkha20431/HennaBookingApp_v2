import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../custom-calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const Home = () => {

  const [events, setEvents] = useState([
    {
      title: 'Henna Appointment',
      start: new Date(2023, 7, 28, 10, 0),
      end: new Date(2023, 7, 28, 11, 0),
    },
  ]);

  const handleSlotSelection = (slotInfo) => {
    const { start, end } = slotInfo;
    const newEvent = {
      title: 'Henna appointment for your_name',
      start: start,
      end: end,
    };
  
    setEvents([...events, newEvent]); // Add new event to the events array and update the state
  };
  

    // Set the min and max times
    const minTime = new Date();
    minTime.setHours(10, 0, 0);
    const maxTime = new Date();
    maxTime.setHours(22, 0, 0);
  

  return (
    <div style={{ height: '800px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        selectable="true"
        step={30}
        onSelectSlot={handleSlotSelection}
        min={minTime} // 10AM
        max={maxTime} // 10PM
        timeslots={2} // 1-hour blocks
      />
    </div>
  );

};


export default Home;