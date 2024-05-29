const { timeStamp } = require("console");
const { createChat, getChats } = require("../model/ChatModel");
const { getUserById } = require("../model/userModel");
const crypto = require('crypto');



const createController = async (req, res) => {
    const { user_id, room_id, content } = req.body;
    const chat_id = crypto.randomUUID();

    try {
        const user = await getUserById(user_id);
        const chat = {
            chat_id,
            room_id,
            content,
            timestamp: new Date().getTime(),
            profile: {
                user_id,
                username: user.username,
                avatar: user.avatar_img,
            }
        }
        await createChat(chat_id, chat)

        res.status(200).json({
            error: false,
            status: 'success',
        })
    } catch (error) {
        res.status(404).json({
            error: true,
            message: error.message
        })
    }

}

const getChatController = async (req, res) => {
    const room_id = req.params.id

    const token = req.headers.authorization;
    // console.log(token);
    if (token === undefined) {
        return res.status(403).json({
            error: true,
            message: 'akses ditolak, harap login!'
        })
    }

    try {
        const chats = await getChats(room_id);
        
        res.status(200).json({
            error: false,
            message: `All chats on room ${room_id}`,
            chats

        })
    } catch (error) {
        res.status(404).json({
            error: false,
            message: error.message,

        })
    }
}
module.exports = { createController, getChatController }