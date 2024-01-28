const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// Luôn phải để detail or tiếp nối /news hoặc /search ở trên như vậy
router.get('/create', courseController.create)
router.get('/:id/update', courseController.update)
router.put('/:id', courseController.edit)
router.post('/handle-form-actions', courseController.actions)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id/force', courseController.forceDelete)
router.delete('/:id', courseController.delete)
router.post('/store', courseController.store)
router.get('/:slug', courseController.show)

module.exports = router;