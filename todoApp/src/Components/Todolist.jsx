import React from 'react';

function Todolist() {
  return (
    <div className='card' style={{ background: '#ffffd4' }}>
      <table className="table" style={{ background: '#ffffd4', color: 'black' }}>
        <thead>
          <tr style={{ background: '#ffffd4', color: 'black' }}>
            <th scope="col">Sno</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: '#ffffd4', color: 'black' }}>
            <th scope="row">1</th>
            <td>title1</td>
            <td>i have to attend a meeting....</td>
            <td>
              <button className="btn btn-danger">
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
            <td>
              <button className="btn btn-primary">
                <i className="fas fa-edit"></i>
              </button>
            </td>
            <td>
              <button className="btn btn-success">
                <i className="fas fa-check"></i>
              </button>
            </td>
          </tr>
          <tr style={{ background: '#ffffd4', color: 'black' }}>
            <th scope="row">2</th>
            <td>title2</td>
            <td>i have to attend a meeting....</td>
            <td>
              <button className="btn btn-danger">
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
            <td>
              <button className="btn btn-primary">
                <i className="fas fa-edit"></i>
              </button>
            </td>
            <td>
              <button className="btn btn-success">
                <i className="fas fa-check"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;
