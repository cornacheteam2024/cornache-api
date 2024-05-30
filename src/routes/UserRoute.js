const express = require('express');
const { registerController, loginController, onLoginController, updateProfilController, editProfilController } = require('../controller/RegisterController');
const { verifyToken } = require('../middleware/authToken');
const bucketUpload = require('../utils/uploadToBucket');

const multer = require('../middleware/uploadImage');
const handleUploadError = require('../middleware/uploadError');

const router = express.Router();

// User

router.post('/register', multer.none(), registerController);
router.post('/login', multer.none(), loginController);
router.get('/auth', verifyToken, onLoginController);
router.get('/profile/:id', editProfilController);
router.put('/profile/:id', multer.single('avatar_image'), bucketUpload.uploadToBucket, updateProfilController);
// router.put('/profile/:id', multer.single('predicted_image'), bucketUpload.uploadToBucket, updateProfilController);

router.use(handleUploadError);
module.exports = router





