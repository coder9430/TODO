const express = require('express');
const router = express.Router();
const fs = require('fs-extra');
const path = require('path');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication
require('dotenv').config();

const todosFilePath = path.join(__dirname, '../db/todos.json');

// Helper function to read todos from the JSON file
const readTodosFromFile = () => {
  try {
    const data = fs.readFileSync(todosFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading todos file:', err);
    return [];
  }
};

// Helper function to write todos to the JSON file
const writeTodosToFile = (todos) => {
  try {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
  } catch (err) {
    console.error('Error writing to todos file:', err);
  }
};

// Create Todo
router.post('/', authMiddleware, async (req, res) => {
  const { date, title, description } = req.body;
  try {
    const todos = readTodosFromFile(); // Use the helper function
    const newTodo = {
      _id: new Date().toISOString(), // Generate a unique ID based on timestamp
      userId: req.user.email, // Using email as userId for simplicity
      date,
      title,
      description,
      status: 'Not Done' // Default status
    };
    todos.push(newTodo);
    writeTodosToFile(todos); // Use the helper function
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Get Todos by User and Date
router.get('/:date', authMiddleware, async (req, res) => {
  console.log("gh")
  console.log(req.params.date)
  try {
    const todos = readTodosFromFile(); // Use the helper function
    const userTodos = todos.filter(todo => todo.userId === req.user.email && todo.date === req.params.date);
    res.json(userTodos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Update Todo
router.put('/:todoId', authMiddleware, async (req, res) => {
  try {
    const todos = readTodosFromFile(); // Use the helper function
    const todoIndex = todos.findIndex(todo => todo._id === req.params.todoId);
    if (todoIndex === -1) return res.status(404).json({ message: 'Todo not found' });

    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    writeTodosToFile(todos); // Use the helper function
    res.json(todos[todoIndex]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Delete Todo
router.delete('/:todoId', authMiddleware, async (req, res) => {
  try {
    const todos = readTodosFromFile(); // Use the helper function
    const newTodos = todos.filter(todo => todo._id !== req.params.todoId);
    if (todos.length === newTodos.length) return res.status(404).json({ message: 'Todo not found' });

    writeTodosToFile(newTodos); // Use the helper function
    res.json({ message: 'Todo removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
