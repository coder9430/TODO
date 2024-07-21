import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import tiger from '../../tiger.json';
import './SigninPage.css';

function SigninPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: tiger,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData)
    
    try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
  
        setUserData({
          username:'',
          email:'',
          password:''
        });
        alert("Signup completed successfully")
        navigate("/login")
      } catch (error) {
        console.error('Error submitting form:', error);
      }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="background-container">
      <div className="background-overlay"></div>
      <div className="content-container">
        <div className="card" id='signinCard'>
          <div className="row">
            <div className="col-12 col-lg-4">
              <Lottie options={defaultOptions} height={320} width={320} />
            </div>
            <div className="col-12 col-lg-8">
              <div className="form-card">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="username"
                      value={userData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                      type="email"
                      name="email"
                      className="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      value={userData.email}
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="password"
                      id="exampleInputPassword1"
                      value={userData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4 form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">If you already have an account click here <a href="#" onClick={() => navigate('/login')}>Login</a></label>
                  </div>
                  <button type="submit" className="btn btn-dark mb-3" onClick={handleSubmit}>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
