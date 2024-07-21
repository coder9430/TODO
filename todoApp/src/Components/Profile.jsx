import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
     
      navigate('/signin');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          if (response.status === 404) {
            
            navigate('/login');
          } else {
            throw new Error('Failed to fetch user profile');
          }
        } else {
          const data = await response.json();
          console.log(data.user);
          setUser(data.user);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // navigate('/signup');
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3 style={{ 
        marginBottom: '20px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        color: 'white',
        textAlign: 'center'
      }}>
        PROFILE
      </h3>
      <div 
        className='card' 
        style={{ 
          padding: '20px', 
          backgroundColor: '#ffffd4', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: '600px',
          margin: 'auto',
          textAlign: 'center'
        }}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png" 
          alt="Profile" 
          style={{ 
            width: '128px', 
            height: '128px', 
            marginBottom: '20px' 
          }} 
        />
        <h5 style={{ 
          marginBottom: '20px', 
          fontWeight: 'bold', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          color: 'black', 
          textAlign: 'center' 
        }}>
          {user?.username?.toUpperCase()}
        </h5>
        <h6 style={{ marginBottom: '10px' }}>
          {user?.email}
        </h6>
      </div>
    </div>
  );
}

export default Profile;
