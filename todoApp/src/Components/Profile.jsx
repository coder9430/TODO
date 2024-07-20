import React from 'react';

function Profile() {
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
        <h5 style={{ marginBottom: '10px',marginBottom: '20px',fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',color: 'white',textAlign: 'center' }}>SAPNA RANI</h5>
        <h6 style={{ marginBottom: '10px' }}>sapnarani14september@gmail.com</h6>
      </div>
    </div>
  )
}

export default Profile;
