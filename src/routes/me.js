const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// Luôn phải để detail or tiếp nối /news hoặc /search ở trên như vậy
router.get('/trash/courses', meController.trashCourses)
router.get('/stored/courses', meController.storedCourses)

module.exports = router;