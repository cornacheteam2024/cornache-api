const express = require("express");
const {
  createRoomController,
  getAllRoomController,
  getRoomByIdController,
  updateRoomController,
  deleteRoomController,
} = require("../controller/roomController");
const bucketUpload = require("../utils/uploadToBucket");
const multer = require("../middleware/uploadImage");
const { verifyToken } = require("../middleware/authToken");

const router = express.Router();

router.get("/room", verifyToken, getAllRoomController);
router.get("/room/:room_id", getRoomByIdController);
router.post(
  "/room",
  multer.single("room_image"),
  bucketUpload.uploadToBucket,
  createRoomController
);
router.patch(
  "/room/:room_id",
  multer.single("room_image"),
  bucketUpload.uploadToBucket,
  updateRoomController
);
router.delete("/room/:room_id", multer.none(), deleteRoomController);

module.exports = router;
