const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const hodRoutes = require('./routes/hodRoutes');
// const cors = require('cors');

// Load environment variables
dotenv.config();

// DB Connection
connectDB();

const app = express();

// Middleware
// app.use(cors());
app.use(cors({
  origin: "http://localhost:5173", // exact frontend origin, NOT '*'
  credentials: true, // allow cookies
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/hod', hodRoutes);
// Sample route
app.get('/', (req, res) => {
  res.send('Faculty Feedback System API is running...');
});

// TODO: Add routes here (e.g., app.use('/api/users', userRoutes))

module.exports = app;
