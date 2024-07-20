import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import tiger from '../../tiger.json';
import './SigninPage.css';

function SigninPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully!');
    navigate('/login');
  };

  return (
    <div className="background-container">
      <div className="background-overlay"></div>
      <div className="content-container">
        <div className="card">
          <div className="row">
            <div className="col-12 col-lg-4">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="col-12 col-lg-8">
              <div className="form-card">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
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
                    <label className="form-check-label" htmlFor="exampleCheck1">If you already have an account click here <a href="#" onClick={() => navigate('/login')}>Login</a></label>
                  </div>
                  <button type="submit" className="btn btn-dark mb-3">Sign Up</button>
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
