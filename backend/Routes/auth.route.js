const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
require('dotenv').config();

const usersFilePath = path.join(__dirname, 'users.json');
const JWT_SECRET = process.env.JWT_SECRET;

// Helper function to read users from the JSON file
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Helper function to write users to the JSON file
const writeUsersToFile = (users) => {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error(err);
  }
};

// SignIn Route
router.post('/signin', (req, res) => {
  const { email, password } = req.body;
  console.log(email,password)
  const users = readUsersFromFile();
  const user = users.find(u => u.email ===email && u.password === password);

  if (user) {
    // Generate a JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '3h' });
    res.status(200).json({ message: 'SignIn Successful', token });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});

// SignUp Route
router.post('/signup', (req, res) => {
  const { username, password, email } = req.body;
  const users = readUsersFromFile();
  const newUser = { id: users.length + 1, username, password, email };

  // Check if the username or email already exists
  const existingUser = users.find(u => u.username === username || u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Username or Email already exists' });
  }

  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json({ message: 'User Registered', newUser });
});

router.get('/profile',authMiddleware, (req, res) => {
  console.log("fgd")
  const users = readUsersFromFile();
  console.log(users)
  const existingUser = users.find(u => u.username === req.user.username || u.email === req.user.email);
  if (existingUser) {
    console.log(existingUser)
    return res.json({ user: existingUser });
  }

  res.status(404).json({ message: 'User Not Found' });
});

module.exports = router;