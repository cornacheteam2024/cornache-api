const express = require("express");
const {
  createRoomController,
  getAllRoomController,
  getAllRoomByIdController,
} = require("../controller/roomController");
const bucketUpload = require("../utils/uploadToBucket");
const multer = require("../middleware/uploadImage");

const router = express.Router();

router.get("/room", getAllRoomController);
router.get("/room/:room_id", getAllRoomByIdController);
router.post("/room", multer.none(), createRoomController);

module.exports = router;
