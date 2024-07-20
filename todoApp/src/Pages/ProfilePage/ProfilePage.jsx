import React from 'react'
import Navbar from '../../Components/Navbar';
import Tab from '../../Components/Tab/Tab';
import Footer from '../../Components/Footer';
import Profile from '../../Components/Profile';
// import './Listoftodopage.css'

function ProfilePage() {
    return (
        <div >
          <Navbar />
          <div className="container mt-1 mb-1">
            <div className="row">
              <div className="col-lg-3 col-12 order-lg-1 order-1">
                <Tab />
              </div>
              <div className='col-lg-9 col-12 order-lg-2 order-2' >
              <div className="card" style={{
                backgroundImage: 'url(https://img.freepik.com/free-vector/sunset-nature-landscape_1308-25611.jpg?size=626&ext=jpg&ga=GA1.1.438524074.1691181102&semt=ais_user)',
                backgroundSize: 'cover', // Make sure the background image covers the entire div
                backgroundPosition: 'center', // Center the background image
                backgroundRepeat: 'no-repeat', // Prevent background image from repeating
                opacity: 0.9
                }}>
                <Profile></Profile>
              </div>

              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      );
}

export default ProfilePage
