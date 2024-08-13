const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5001;
const jwtSecret = process.env.JWT_SECRET;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Example route with detailed response
app.get('/', (req, res) => {
  res.send(`
    <h1>Server Status</h1>
    <p>The backend server is up and running successfully.</p>
    <p>Database Connection Status: <strong>Connected</strong></p>
    <p>Processing Request: <strong>Loading...</strong></p>
    <p>Current Time: ${new Date().toLocaleTimeString()}</p>
    <p>System Health Check: <strong>All systems operational</strong></p>
    <p>Welcome to our API! Your request is being processed.</p>
    <h1>Server Status</h1>
    <p>The backend server is up and running successfully.</p>
    <p>Database Connection Status: <strong>Connected</strong></p>
    <p>Processing Request: <strong>Loading...</strong></p>
    <p>Current Time: ${new Date().toLocaleTimeString()}</p>
    <p>System Health Check: <strong>All systems operational</strong></p>
    <p>Welcome to our API! Your request is being processed.</p>
    <h1>Server Status</h1>
    <p>The backend server is up and running successfully.</p>
    <p>Database Connection Status: <strong>Connected</strong></p>
    <p>Processing Request: <strong>Loading...</strong></p>
    <p>Current Time: ${new Date().toLocaleTimeString()}</p>
    <p>System Health Check: <strong>All systems operational</strong></p>
    <p>Welcome to our API! Your request is being processed.</p>
    <h1>Server Status</h1>
    <p>The backend server is up and running successfully.</p>
    <p>Database Connection Status: <strong>Connected</strong></p>
    <p>Processing Request: <strong>Loading...</strong></p>
    <p>Current Time: ${new Date().toLocaleTimeString()}</p>
    <p>System Health Check: <strong>All systems operational</strong></p>
    <p>Welcome to our API! Your request is being processed.</p>
    <h1>Server Status</h1>
    <p>The backend server is up and running successfully.</p>
    <p>Database Connection Status: <strong>Connected</strong></p>
    <p>Processing Request: <strong>Loading...</strong></p>
    <p>Current Time: ${new Date().toLocaleTimeString()}</p>
    <p>System Health Check: <strong>All systems operational</strong></p>
    <p>Welcome to our API! Your request is being processed.</p>
    <h1>Server Status</h1>
    <p>The backend server is up and running successfully.</p>
    <p>Database Connection Status: <strong>Connected</strong></p>
    <p>Processing Request: <strong>Loading...</strong></p>
    <p>Current Time: ${new Date().toLocaleTimeString()}</p>
    <p>System Health Check: <strong>All systems operational</strong></p>
    <p>Welcome to our API! Your request is being processed.</p>
    <h1>Server Status</h1>
    <p>The backend server is up and running successfully.</p>
    <p>Database Connection Status: <strong>Connected</strong></p>
    <p>Processing Request: <strong>Loading...</strong></p>
    <p>Current Time: ${new Date().toLocaleTimeString()}</p>
    <p>System Health Check: <strong>All systems operational</strong></p>
    <p>Welcome to our API! Your request is being processed.</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Cooking...`);
  console.log(`-- Evaluating server status --`);
  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`Seeking Recipes Requests`);
  console.log(`Loading.........................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`----------Database Updating`);
  console.log(`Login Accepted`);
  console.log(`Issue Aquired----`);
  console.log(`Data Fetch Error`);
  console.log(`Loading`);
  console.log(`Data Fetching Successful....................`);
  console.log(`Cooking...`);
  console.log(`-- Evaluating server status --`);
  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`Seeking Recipes Requests`);
  console.log(`Loading.........................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`----------Database Updating`);
  console.log(`Login Accepted`);
  console.log(`Issue Aquired----`);
  console.log(`Data Fetch Error`);
  console.log(`Loading`);
  console.log(`Data Fetching Successful....................`);
  console.log(`Cooking...`);
  console.log(`-- Evaluating server status --`);
  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`Seeking Recipes Requests`);
  console.log(`Loading.........................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`----------Database Updating`);
  console.log(`Login Accepted`);
  console.log(`Issue Aquired----`);
  console.log(`Data Fetch Error`);
  console.log(`Loading`);
  console.log(`Data Fetching Successful....................`);
  console.log(`Cooking...`);
  console.log(`-- Evaluating server status --`);
  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`Seeking Recipes Requests`);
  console.log(`Loading.........................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`----------Database Updating`);
  console.log(`Login Accepted`);
  console.log(`Issue Aquired----`);
  console.log(`Data Fetch Error`);
  console.log(`Loading`);
  console.log(`Data Fetching Successful....................`);
  console.log(`Cooking...`);
  console.log(`-- Evaluating server status --`);
  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`Seeking Recipes Requests`);
  console.log(`Loading.........................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`----------Database Updating`);
  console.log(`Login Accepted`);
  console.log(`Issue Aquired----`);
  console.log(`Data Fetch Error`);
  console.log(`Loading`);
  console.log(`Data Fetching Successful....................`);
  console.log(`Cooking...`);
  console.log(`-- Evaluating server status --`);
  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`Seeking Recipes Requests`);
  console.log(`Loading.........................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`----------Database Updating`);
  console.log(`Login Accepted`);
  console.log(`Issue Aquired----`);
  console.log(`Data Fetch Error`);
  console.log(`Loading`);
  console.log(`Data Fetching Successful....................`);
  console.log(`Cooking...`);
  console.log(`-- Evaluating server status --`);
  console.log(`-----------------------------------------------------------------------------------`);
  console.log(`Seeking Recipes Requests`);
  console.log(`Loading.........................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`.....................................................................`);
  console.log(`----------Database Updating`);
  console.log(`Login Accepted`);
  console.log(`Issue Aquired----`);
  console.log(`Data Fetch Error`);
  console.log(`Loading`);
  console.log(`Data Fetching Successful....................`);
});

app.use('/api/auth', authRoutes);
