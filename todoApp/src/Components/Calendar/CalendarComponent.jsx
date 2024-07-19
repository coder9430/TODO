import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar's styles
import './CalendarComponent.css'; // Create and import custom styles if needed

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
   
      <div className="calendar-container">
        <div className='row'>
          <div className='col'>
          
          </div>
          <div className='col'>
          <h3 className='heading'>SELECT THE DATE</h3>
            <Calendar
              onChange={handleDateChange}
              value={date}
            />

          </div>

        </div>
      
      <p>Selected Date: {date.toDateString()}</p>
    </div>
    
  );
}

export default CalendarComponent;
