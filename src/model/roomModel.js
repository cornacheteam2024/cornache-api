const { Firestore } = require("@google-cloud/firestore");
// const path = require("path");

const key = process.env.GOOGLE_APPLICATION_CREDENTIALS;
// const key = path.resolve(__dirname, "../utils/cornache-key.json");
const db = new Firestore({ keyFilename: key });

async function getUserDetail(userId) {
  if (!userId) {
    throw new Error("userId diperlukan");
  }

  try {
    const userRef = await db.collection("users");
    const userSnapshot = await userRef.where("user_id", "==", userId).get();

    const userData = [];
    userSnapshot.forEach((user) => userData.push(user.data()));

    if (userSnapshot.empty) {
      console.log("No matching documents.");
      return null;
    }

    return userData;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
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
    console.log("No matching documents.");
    return null;
  }

  return roomData;
}

async function createRoom(roomId, roomData) {
  const roomCollection = db.collection("rooms");
  return await roomCollection.doc(roomId).set(roomData);
}

module.exports = { getUserDetail, getAllRoom, getRoomById, createRoom };
