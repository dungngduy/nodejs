const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

// Luôn phải để detail or tiếp nối /news hoặc /search ở trên như vậy
router.post('/signin', userController.login)
router.get('/login', userController.loginForm)
router.post('/signup', userController.register)
router.get('/register', userController.registerForm)

module.exports = router;