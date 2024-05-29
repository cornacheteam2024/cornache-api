const express = require('express');
const { registerController, loginController, onLoginController, updateProfilController, editProfilController } = require('../src/controller/RegisterController');
const { verifyToken } = require('../src/middleware/authToken');
const bucketUpload = require('../src/utils/uploadToBucket');

const multer = require('../src/middleware/uploadImage');

const router = express.Router();

// User

router.post('/register', multer.none(), registerController);
router.post('/login', multer.none(), loginController);
router.get('/auth', verifyToken, onLoginController);
router.get('/profile/:id', editProfilController);
router.put('/profile/:id', multer.single('avatar_image'), bucketUpload.uploadToBucket, updateProfilController);


module.exports = router




