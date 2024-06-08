const { Firestore } = require("@google-cloud/firestore");
const db = new Firestore();
const chatRef = db.collection('chat');

const createChat = (chat_id, data) => {
    return chatRef.doc(chat_id).set(data);
}

const getChats = async (room_id, page) => {
    const perPage = 5;

    try {

        const chatSnapshot = await chatRef.where('room_id', '==', room_id).get();
        let allChat = []

        chatSnapshot.forEach(chat => {
            const created = chat.createTime.seconds;
            const data = chat.data()
            data.created = created

            allChat.push(data)
        }
        );


        const sortedChat = allChat.sort((a, b) => b.created - a.created);
        const datas = sortedChat.map(data => ({
            room_id: data.room_id,
            chat_id: data.chat_id,
            content: data.content,
            timestamp: data.timestamp,
            profile: data.profile,
        }))


        const start = (page - 1) * perPage
        const end = start + perPage

        const appear = datas.slice(start, end);
        return appear;

    } catch (error) {
        throw new Error('gagal mendapatkan data')
    }
}



module.exports = { createChat, getChats }