import React from 'react';

function TodoForm() {
  return (
    <div>
      <h3 style={{ 
        marginBottom: '20px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        color: 'white',
        textAlign: 'center'
      }}>
        ADD TO DO
      </h3>
      <div 
        className='card' 
        style={{ 
          padding: '20px', 
          backgroundColor: '#ffffd4', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: '600px',
          margin: 'auto'
        }}
      >
        <form>
          <div className="row" style={{ marginBottom: '50px' }}>
            <div className="col" style={{ marginBottom: '10px' }}>
              <input 
                type="date" 
                className="form-control" 
                placeholder="Date" 
                aria-label="Date" 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #ccc' 
                }}
              />
            </div>
            <div className="col">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Title" 
                aria-label="Title" 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #ccc' 
                }}
              />
            </div>
          </div>
          <div className="row" style={{ marginBottom: '10px' }}>
            <div className="col">
              <textarea 
                className="form-control" 
                placeholder="Description" 
                aria-label="Description" 
                style={{ 
                  width: '100%', 
                  height: '100px', 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #ccc' 
                }}
              />
            </div>
          </div>
          <div className="row" style={{ justifyContent: 'center' }}>
            <button 
              type="submit" 
              className="btn" 
              style={{ 
                padding: '10px 20px', 
                borderRadius: '4px',
                backgroundColor: 'black', 
                border: 'none', 
                color: 'white', 
                cursor: 'pointer' ,
                margin:'20px'
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <h6 style={{ 
        margin: '10px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        color: 'black',
        textAlign: 'center'
      }}>"The secret of getting ahead is getting started.</h6>
    </div>
  );
}

export default TodoForm;
