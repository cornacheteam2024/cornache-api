const express = require('express');
const multer = require('../middleware/uploadImage');
const { verifyToken } = require('../middleware/authToken');
const { getHistoriesController } = require('../controller/HIstoryController');

const router = express.Router();

router.get('/:id', verifyToken, getHistoriesController)

module.exports = router

