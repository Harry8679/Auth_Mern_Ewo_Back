const asyncHandler = require('express-async-handler');

const getAllUsers = asyncHandler(async(req, res) => {
    res.send('Get All Users');
});

module.exports = { getAllUsers };