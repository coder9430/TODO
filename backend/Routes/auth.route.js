const express = require('express');
const router = express.Router();
const fs = require('fs-extra');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const usersFilePath = path.join(__dirname, '../data/users.json');

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const users = await fs.readJson(usersFilePath);
    const userExists = users.find(user => user.email === email);
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword };
    users.push(newUser);
    await fs.writeJson(usersFilePath, users);

    const payload = { user: { email } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await fs.readJson(usersFilePath);
    const user = users.find(user => user.email === email);
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { email } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
