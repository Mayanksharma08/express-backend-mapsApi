const express = require('express');
const userController = require('../controllers/users');
const router = express.Router();

router.post('/', userController.getUsers);

module.exports = router;