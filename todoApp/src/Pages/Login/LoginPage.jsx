import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import Lottie from 'react-lottie';
import tiger from '../../tiger.json';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate(); // Use hook for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    const response = await fetch('http://localhost:3000/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      console.log(localStorage.getItem("token"))
      navigate('/'); // Navigate to a protected route after successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="background-container">
      <div className="background-overlay"></div>
      <div className="content-container">
        <div className="card" id='loginCard'>
          <div className="row">
            <div className="col-12 col-lg-4">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="col-12 col-lg-8">
              <div className="form-card">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="exampleInputEmail1" 
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="exampleInputPassword1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">If you don't have an account click here <a href="#" onClick={() => navigate('/signup')}>Sign Up</a></label>
                  </div>
                  <button type="submit" className="btn btn-dark mb-3">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 style={{ 
        margin: '10px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        color: 'black',
        textAlign: 'center'
      }}>"List your to do and make your day productive"</h4>
    </div>
  );
}

export default LoginPage;
