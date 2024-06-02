const { Firestore } = require("@google-cloud/firestore");
const db = new Firestore();
const chatRef = db.collection('chat');

const createChat = (chat_id, data) => {
    return chatRef.doc(chat_id).set(data);
}

const getChats = async (room_id,page) => {
    const perPage = 3;

    try {

        const chatSnapshot = await chatRef.where('room_id', '==', room_id).get();
        let allChat = []

        chatSnapshot.forEach(chat => allChat.push(chat.data()));

        const sortedChat = allChat.sort((a, b) => b.timestamp - a.timestamp);

        const start = (page - 1) * perPage
        const end = start + perPage

        const appear = sortedChat.slice(start,end);

        return appear;

    } catch (error) {
        throw new Error('gagal mendapatkan data')
    }
}



module.exports = { createChat, getChats }