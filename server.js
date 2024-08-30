const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const userRoutes = require('./routes/user.route');

const app = express();

// Middlewares
app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 5001;

connectDB();

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))