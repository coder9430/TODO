const express = require('express');
const router = express.Router();
const fs = require('fs-extra');
const path = require('path');
const authMiddleware = require('../middleware/authMiddleware');
require('dotenv').config();

const todosFilePath = path.join(__dirname, '../data/todos.json');

// Create Todo
router.post('/', authMiddleware, async (req, res) => {
  const { date, tasks } = req.body;
  try {
    const todos = await fs.readJson(todosFilePath);
    const newTodo = {
      userId: req.user.email, // Using email as userId for simplicity
      date,
      tasks,
    };
    todos.push(newTodo);
    await fs.writeJson(todosFilePath, todos);
    res.json(newTodo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get Todos by Date
router.get('/:date', authMiddleware, async (req, res) => {
  try {
    const todos = await fs.readJson(todosFilePath);
    const userTodos = todos.filter(todo => todo.userId === req.user.email && todo.date === req.params.date);
    res.json(userTodos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update Todo
router.put('/:todoId', authMiddleware, async (req, res) => {
  try {
    const todos = await fs.readJson(todosFilePath);
    const todoIndex = todos.findIndex(todo => todo._id === req.params.todoId);
    if (todoIndex === -1) return res.status(404).json({ msg: 'Todo not found' });

    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    await fs.writeJson(todosFilePath, todos);
    res.json(todos[todoIndex]);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete Todo
router.delete('/:todoId', authMiddleware, async (req, res) => {
  try {
    const todos = await fs.readJson(todosFilePath);
    const newTodos = todos.filter(todo => todo._id !== req.params.todoId);
    if (todos.length === newTodos.length) return res.status(404).json({ msg: 'Todo not found' });

    await fs.writeJson(todosFilePath, newTodos);
    res.json({ msg: 'Todo removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
