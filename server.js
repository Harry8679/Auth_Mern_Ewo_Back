const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const errorHandler = require('./middlewares/error.middleware');

const userRoutes = require('./routes/user.route');

const app = express();

// Middlewares
app.use('/api/v1/users', userRoutes);
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3010', 'https://auth-mern-ewo-front-v5hn.vercel.app/'],
    credentials: true
}));

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

connectDB();

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))