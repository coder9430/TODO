import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import './DashboardHome.css';
import hello from '../../hello.json';

function DashboardHome() {
  const [greeting, setGreeting] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning!!');
    } else if (hours < 18) {
      setGreeting('Good Afternoon!!');
    } else {
      setGreeting('Good Evening!!');
    }
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleAddTodo = () => {
    navigate('/add-todo');
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-vector/sunset-nature-landscape_1308-25611.jpg?size=626&ext=jpg&ga=GA1.1.438524074.1691181102&semt=ais_user)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9
      }}
    >
      <div className='row'>
        <div className='col'>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className='col'>
          <h1 className="greeting">{greeting}</h1>
        </div>
      </div >
      <button className="addButton" onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
}

export default DashboardHome;
