import React from 'react'
import Navbar from '../../Components/Navbar';
import Tab from '../../Components/Tab/Tab';
import DashboardHome from '../../Components/DashboardHome/DashboardHome';
import Footer from '../../Components/Footer';
import './HomePage.css'

function HomePage() {
    return (
        <div >
          <Navbar />
          <div className="container mt-1 mb-1">
            <div className="row">
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

export default HomePage
