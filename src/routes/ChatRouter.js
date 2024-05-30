const express = require('express');
const { createController, getChatController } = require('../controller/ChatController');
const multer = require('../middleware/uploadImage');
const { verifyToken } = require('../middleware/authToken');

const router = express.Router();




router.post('/', multer.none(), createController);
router.get('/:id', multer.none(), getChatController);



module.exports = router;