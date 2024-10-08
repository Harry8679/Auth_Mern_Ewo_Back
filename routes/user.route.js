const express = require('express');
const { getAllUsers, register } = require('../controllers/user.controller');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/register', register);

module.exports = router;