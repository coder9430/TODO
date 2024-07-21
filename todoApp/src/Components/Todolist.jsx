import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function Todolist({ initialDate }) {
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment(initialDate, 'YYYY-MM-DD').toDate());
  const token = localStorage.getItem('token');

  const fetchTodos = async (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    console.log("Formatted Date:", formattedDate);
    try {
      const response = await fetch(`http://localhost:3000/api/todo/${formattedDate}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos(selectedDate);
  }, [selectedDate]);

  const deleteTodo = async (todoId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todo/${todoId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
      setTodos(todos.filter(todo => todo._id !== todoId));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const editTodo = async (todoId) => {
    const todoToEdit = todos.find(todo => todo._id === todoId);
    const title = prompt('Enter new title:', todoToEdit.title);
    const description = prompt('Enter new description:', todoToEdit.description);

    if (title && description) {
      try {
        const response = await fetch(`http://localhost:3000/api/todo/${todoId}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description }),
        });
        if (!response.ok) {
          throw new Error('Failed to update todo');
        }
        const updatedTodo = await response.json();
        setTodos(todos.map(todo => (todo._id === todoId ? updatedTodo : todo)));
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    }
  };

  const toggleStatus = async (todoId) => {
    const todoToToggle = todos.find(todo => todo._id === todoId);
    const newStatus = todoToToggle.status === 'Not Done' ? 'Done' : 'Not Done';

    try {
      const response = await fetch(`http://localhost:3000/api/todo/${todoId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) {
        throw new Error('Failed to update todo status');
      }
      const updatedTodo = await response.json();
      setTodos(todos.map(todo => (todo._id === todoId ? updatedTodo : todo)));
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };

  return (
    <div className='card' style={{ background: '#ffffd4' }}>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      {todos.length > 0 ? (
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
            {todos.map((todo, index) => (
              <tr key={todo._id} style={{ background: '#ffffd4', color: 'black' }}>
                <th scope="row">{index + 1}</th>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                  <IconButton color="error" onClick={() => deleteTodo(todo._id)}>
                    <DeleteIcon />
                  </IconButton>
                </td>
                <td>
                  <IconButton color="primary" onClick={() => editTodo(todo._id)}>
                    <EditIcon />
                  </IconButton>
                </td>
                <td>
                  <IconButton
                    color={todo.status === 'Done' ? 'success' : 'error'}
                    onClick={() => toggleStatus(todo._id)}
                  >
                    {todo.status === 'Done' ? <CheckIcon /> : <CloseIcon />}
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ padding: '20px', textAlign: 'center', color: 'black' }}>
          <h5>NO TODOS FOR TODAY</h5>
        </div>
      )}
    </div>
  );
}

export default Todolist;
