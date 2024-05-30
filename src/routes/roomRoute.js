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

router.get("/", verifyToken, getAllRoomController);
router.get("/:room_id", getRoomByIdController);
router.post(
  "/",
  multer.single("room_image"),
  bucketUpload.uploadToBucket,
  createRoomController
);
router.put(
  "/:room_id",
  multer.single("room_image"),
  bucketUpload.uploadToBucket,
  updateRoomController
);
router.delete("/:room_id", multer.none(), deleteRoomController);

module.exports = router;
