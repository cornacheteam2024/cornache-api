const { Firestore } = require("@google-cloud/firestore");
const crypto = require("crypto");
const {
  getUserDetail,
  getAllRoom,
  getRoomById,
  createRoom,
} = require("../model/roomModel");
const { error } = require("console");

async function createRoomController(req, res) {
  const { user_id, name, description, image } = req.body;

  if (!user_id) {
    return res.status(400).json({
      error: true,
      message: "user_id diperlukan",
    });
  }

  const room_id = crypto.randomUUID();
  const createdAt = Date.now();

  try {
    const [getUser] = await getUserDetail(user_id);

    // Periksa apakah data pengguna ditemukan
    if (!getUser) {
      return res.status(404).json({
        error: true,
        message: "User tidak ditemukan",
      });
    }

    const usernameUser = getUser.username;
    const data = {
      user_id: user_id,
      name: usernameUser,
      detail_room: {
        username: name,
        description: description,
        image: image,
        room_id: room_id,
        created_at: createdAt,
        update_at: null,
      },
    };

    await createRoom(room_id, data);

    // Operasi penyimpanan data ke Firestore atau basis data lainnya bisa ditambahkan di sini

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

async function getAllRoomController(req, res) {
  try {
    const [allRoom] = await getAllRoom();

    res.status(200).json({
      error: false,
      message: "Berhasil mendapatkan semua Ruangan Diskusi",
      data: allRoom,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Gagal mendapatkan semua Ruangan Diskusi",
    });
  }
}

async function getAllRoomByIdController(req, res) {
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

module.exports = {
  createRoomController,
  getAllRoomController,
  getAllRoomByIdController,
};
