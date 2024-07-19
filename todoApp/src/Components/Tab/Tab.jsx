import React from 'react';
import { Link } from 'react-router-dom';

import "./Tab.css"
function Tab() {
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
                      {/* <img src="https://cdn-icons-png.flaticon.com/128/15383/15383003.png" alt="Profile Icon" className="nav-icon" /> */}
                      <span>HOME</span>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td className="nav-link d-flex align-items-center border-bottom">
                      {/* <img src="https://cdn-icons-png.flaticon.com/128/15383/15383003.png" alt="Profile Icon" className="nav-icon" /> */}
                      <span>PROFILE</span>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td className="nav-link d-flex align-items-center border-bottom">
                      {/* <img src="https://cdn-icons-png.flaticon.com/128/9653/9653907.png" alt="Logout Icon" className="nav-icon" /> */}
                      <span>LOG OUT</span>
                    </td>
                  </tr>
                  <tr className="nav-item">
                    <td className="nav-link d-flex align-items-center border-bottom">
                      {/* <img src="https://cdn-icons-png.flaticon.com/128/9653/9653907.png" alt="Logout Icon" className="nav-icon" /> */}
                      <span>LIST OF TO DO</span>
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
