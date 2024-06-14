const { Firestore } = require("@google-cloud/firestore");

// const key = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const db = new Firestore();

async function getUserDetail(userId) {
  if (!userId) {
    // throw new Error("user_id diperlukan");
    return false;
  }
  try {
    const userRef = db.collection("users");
    const userSnapshot = await userRef.where("user_id", "==", userId).get();

    const userData = [];
    userSnapshot.forEach((user) => userData.push(user.data()));

    if (userSnapshot.empty) {
      console.log("Data user tidak ditemukan");
      return null;
    }

    return userData;
  } catch (error) {
    throw new Error("eror bank");
  }
}

async function getAllRoom() {
  const roomCollection = db.collection("rooms");
  const roomSnapshot = await roomCollection.get();

  if (roomSnapshot.empty) {
    console.log("No matching documents.");
    return [];
  }

  const allRooms = [];
  roomSnapshot.forEach((room) => allRooms.push(room.data()));

  return [allRooms];
}

async function getRoomById(roomId) {
  const roomCollection = db.collection("rooms");
  const getRoom = await roomCollection.get();

  let roomData = [];
  getRoom.forEach((room) => {
    const data = room.data();
    if (data.detail_room.room_id === roomId) {
      roomData.push(room.data());
    }
  });

  if (roomData.length === 0) {
    throw new Error("Tidak ada Ruangan Diskusi yang cocok.");
    // return null;
  }

  return roomData;
}

async function createRoom(roomId, roomData) {
  const roomCollection = db.collection("rooms");
  return await roomCollection.doc(roomId).set(roomData);
}

async function updateRoom(roomId, newRoomData) {
  const roomCollection = db.collection("rooms").doc(roomId);

  await roomCollection.update(newRoomData);
}

async function deleteRoom(roomId) {
  const roomCollection = db.collection("rooms").doc(roomId);
  const getRoom = await roomCollection.get();

  if (!getRoom.exists) {
    return false;
  }

  await roomCollection.delete();

  return true;
}

module.exports = {
  getUserDetail,
  getAllRoom,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
