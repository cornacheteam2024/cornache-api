const express = require("express");
const {
  registerController,
  loginController,
  onLoginController,
  updateProfilController,
  editProfilController,
} = require("../controller/RegisterController");
const { verifyToken } = require("../middleware/authToken");
const bucketUpload = require("../utils/uploadToBucket");

const multer = require("../middleware/uploadImage");

const router = express.Router();

// User

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/auth", verifyToken, onLoginController);
router.get("/profile/:id", editProfilController);
router.put(
  "/profile/:id",
  multer.single("avatar_image"),
  bucketUpload.uploadToBucket,
  updateProfilController
);

module.exports = router;
