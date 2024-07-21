require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./Routes/auth.route');
const todoRoutes = require('./Routes/Todo.route');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
app.use('/api/auth', authRoutes);
app.use("/api/todo",todoRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
