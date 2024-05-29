const express = require('express');
const { createController, getChatController } = require('../src/controller/ChatController');
const multer = require('../src/middleware/uploadImage');
const { verifyToken } = require('../src/middleware/authToken');

const router = express.Router();




router.post('/', multer.none(), createController);
router.get('/:id', multer.none(),  getChatController);

module.exports = router;