const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('Home Page');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected !'))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))