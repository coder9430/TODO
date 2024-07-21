import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from '../../Components/Navbar';
import Tab from '../../Components/Tab/Tab';
import DashboardHome from '../../Components/DashboardHome/DashboardHome';
import Footer from '../../Components/Footer';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate(); // Use navigate for navigation

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // If no token, redirect to login page
      navigate('/login');
    }
  }, [navigate]); // Empty dependency array means this runs once on component mount

  return (
    <div>
      <Navbar />
      <div>
        <div className="row" style={{ width: '100%', height: '100%' }}>
          <div className="col-lg-3 col-12 order-lg-1 order-1">
            <Tab />
          </div>
          <div className="col-lg-9 col-12 order-lg-2 order-2">
            <DashboardHome />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
