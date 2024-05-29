const { Firestore } = require("@google-cloud/firestore");
const db = new Firestore();
const chatRef = db.collection('chat');

const createChat = (chat_id, data) => {
    return chatRef.doc(chat_id).set(data);
}

const getChats = async (room_id) => {
    try {

        const chatSnapshot = await chatRef.where('room_id', '==', room_id).get();
        let allChat = []

        // console.log(chatSnapshot.docs[0]);
        chatSnapshot.forEach(chat => allChat.push(chat.data()));

        // console.log([allChat].timestamp);
        return allChat.sort((a, b) => b.timestamp - a.timestamp);

    } catch (error) {
        throw new Error('gagal mendapatkan data')
    }
}



module.exports = { createChat, getChats }