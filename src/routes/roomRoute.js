const express = require("express");
const {
  createRoomController,
  getAllRoomController,
  getAllRoomByIdController,
} = require("../controller/roomController");
const bucketUpload = require("../utils/uploadToBucket");
const multer = require("../middleware/uploadImage");
const { verifyToken } = require("../middleware/authToken");

const router = express.Router();

router.get("/room", verifyToken, getAllRoomController);
router.get("/room/:room_id", verifyToken, getAllRoomByIdController);
router.post("/room", multer.none(), createRoomController);

module.exports = router;
