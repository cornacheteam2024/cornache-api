const crypto = require("crypto");
const {
  getUserDetail,
  getAllRoom,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} = require("../model/roomModel");
const moment = require("moment");

async function getAllRoomController(req, res) {
  try {
    const [allRoom] = await getAllRoom();

    return res.status(200).json({
      error: false,
      message: "Berhasil mendapatkan semua Ruangan Diskusi",
      data: allRoom,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Gagal mendapatkan semua Ruangan Diskusi",
    });
  }
}

async function getRoomByIdController(req, res) {
  const { room_id } = req.params;

  try {
    const [getRoom] = await getRoomById(room_id);

    res.status(200).json({
      error: false,
      message: "Berhasil mendapatkan Ruangan Diskusi berdasarkan room_id",
      room: getRoom,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Gagal mendapatkan Ruangan Diskusi berdasarkan room_id",
    });
  }
}

async function createRoomController(req, res) {
  const { user_id, name, description } = req.body;
  const imageUrl = req.file.cloudStoragePublicUrl;

  const room_id = crypto.randomUUID();
  const today = Date.now();
  const createdAt = moment(today).format("YYYY-MM-DD");

  if (!user_id) {
    return res.status(404).json({
      error: true,
      message: "User tidak ditemukan",
    });
  }

  try {
    const [getUser] = await getUserDetail(user_id);

    const usernameUser = getUser.username;
    const data = {
      user_id: user_id,
      username: usernameUser,
      detail_room: {
        name: name,
        description: description,
        image: imageUrl,
        room_id: room_id,
        created_at: createdAt,
        update_at: null,
      },
    };

    await createRoom(room_id, data);

    return res.status(200).json({
      error: false,
      message: "Berhasil membuat Room Diskusi",
      room: data,
    });
  } catch (error) {
    console.error("Error creating room:", error);
    return res.status(500).json({
      error: true,
      message: "Gagal membuat Room Diskusi",
    });
  }
}

async function updateRoomController(req, res) {
  const { name, description } = req.body;
  const { room_id } = req.params;
  const imageUrl = req.file.cloudStoragePublicUrl;
  const today = Date.now();
  const updateAt = moment(today).format("YYYY-MM-DD");

  try {
    const [getRoom] = await getRoomById(room_id);

    const newDataRoom = {
      user_id: getRoom.user_id,
      username: getRoom.username,
      detail_room: {
        name: name,
        description: description,
        image: imageUrl,
        room_id: room_id,
        created_at: getRoom.detail_room.created_at,
        update_at: updateAt,
      },
    };

    await updateRoom(room_id, newDataRoom);

    return res.status(200).json({
      error: false,
      message: "Berhasil mengedit Room Diskusi",
      room: newDataRoom,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Gagal mengedit Room Diskusi",
    });
  }
}

async function deleteRoomController(req, res) {
  const { room_id } = req.params;

  try {
    const isDeletedRoom = await deleteRoom(room_id);

    if (!isDeletedRoom) {
      return res.status(404).json({
        error: true,
        message: "Ruangan Diskusi tidak ditemukan",
      });
    }

    res.status(200).json({
      error: false,
      message: "Berhasil menghapus Ruangan Diskusi",
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Gagal menghapus Ruangan Diskusi",
    });
  }
}

module.exports = {
  createRoomController,
  getAllRoomController,
  getRoomByIdController,
  updateRoomController,
  deleteRoomController,
};
