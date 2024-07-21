import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import "./Tab.css";

function Tab() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    console.log('User logged out');
    // Redirect to the login page after logout
    navigate('/login'); // Assuming you have a login route
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="card w-100 mt-2">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <table className="table table-hover">
                <tbody className="navbar-nav flex-column">
                  <tr className="nav-item">
                    <td className="nav-link d-flex align-items-center border-bottom">
                      <img src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="Profile Icon" className="nav-icon" />
                      <Link to="/" className="nav-link">HOME</Link>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td className="nav-link d-flex align-items-center border-bottom">
                      <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="Profile Icon" className="nav-icon" />
                      <Link to="/profile" className="nav-link">PROFILE</Link>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td className="nav-link d-flex align-items-center border-bottom">
                      <img src="https://cdn-icons-png.flaticon.com/128/5509/5509651.png" alt="Logout Icon" className="nav-icon" />
                      <span className="nav-link" onClick={handleLogout}>LOG OUT</span>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td className="nav-link d-flex align-items-center border-bottom">
                      <img src="https://cdn-icons-png.flaticon.com/128/1950/1950630.png" alt="List" className="nav-icon" />
                      <Link to="/list-of-todo" className="nav-link">LIST OF TO DO</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Tab;
