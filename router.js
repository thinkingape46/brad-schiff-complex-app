const express = require('express');
const { Router } = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.get('/', userController.home);

module.exports = router;
