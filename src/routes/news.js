const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewController');

// Luôn phải để detail or tiếp nối /news hoặc /search ở trên như vậy
// router.use('/:slug', newController.show)
router.get('/', newController.index);

module.exports = router;