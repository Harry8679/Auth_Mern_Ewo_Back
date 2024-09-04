const asyncHandler = require('express-async-handler');

const getAllUsers = asyncHandler(async(req, res) => {
    res.send('Get All Users');
});

const register = asyncHandler(async(req, res) => {
    res.send('Register');
});

module.exports = { getAllUsers, register };