import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Tab from '../../Components/Tab/Tab';
import Footer from '../../Components/Footer';
import Todolist from '../../Components/Todolist';
import './CalendarPage.css';
import moment from "moment"

function CalendarPage() {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setSelectedDate(queryParams.get('date'));
    console.log(selectedDate)
  }, [location]);

  return (
    <div>
      <Navbar />
      {selectedDate ?
      <div>
      <div className="row" style={{ width: '100%', height: '100%' }}>
        <div className="col-lg-3 col-12 order-lg-1 order-1">
          <Tab />
        </div>
        <div className="col-lg-9 col-12 order-lg-2 order-2">
          <div className='card' style={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/sunset-nature-landscape_1308-25611.jpg?size=626&ext=jpg&ga=GA1.1.438524074.1691181102&semt=ais_user)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
            width: '100%',
            height: '500px'
          }}>
            <h3 style={{
              margin: '40px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              color: 'white',
              textAlign: 'center'
            }}>
              LIST OF TODAY'S TO DO
            </h3>
            <Todolist initialDate={selectedDate || moment().format('YYYY-MM-DD')} />
          </div>
        </div>
      </div>
    </div>:null }
      
      <Footer />
    </div>
  );
}

export default CalendarPage