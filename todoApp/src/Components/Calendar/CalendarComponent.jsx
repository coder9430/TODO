import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar's styles
import './CalendarComponent.css'; // Create and import custom styles if needed
import moment from "moment";

function CalendarComponent() {
  // Initialize state with the current date using Moment.js
  const now = moment().startOf('day'); // Use startOf('day') to avoid time component issues
  const [date, setDate] = useState(now.toDate()); // State should be a JavaScript Date object
  const navigate = useNavigate();

  // Handle date change and update state
  const handleDateChange = (newDate) => {
    const momentDate = moment(newDate).startOf('day'); // Ensure the date is at the start of the day
    
    console.log("Selected Moment.js Date:", momentDate.format('YYYY-MM-DD'));

    // Update state with new date
    setDate(momentDate.toDate());

    // Navigate to CalendarPage with the selected date formatted as YYYY-MM-DD
    navigate(`/calendar?date=${momentDate.format('YYYY-MM-DD')}`);
  };

  return (
    <div className="calendar-container">
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <h3 className='heading'>SELECT THE DATE</h3>
          <Calendar
            onChange={handleDateChange}
            value={date}
          />
        </div>
      </div>
      <p>Selected Date: {moment(date).format('YYYY-MM-DD')}</p>
    </div>
  );
}

export default CalendarComponent;
