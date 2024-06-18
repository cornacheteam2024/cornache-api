const { timeStamp } = require("console");
const { createChat, getChats } = require("../model/ChatModel");
const { getUserById } = require("../model/userModel");
const crypto = require('crypto');
const moment = require("moment");



const createController = async (req, res) => {
    const { user_id, room_id, content } = req.body;
    const chat_id = crypto.randomUUID();

    if (!user_id) {
        return res.status(404).json({
            error: true,
            status: 'fails',
            message: 'User tidak ditemukan!'

        })
    }
    const time = new Date();
    const getHour = time.getHours();
    const getMinutes = time.getMinutes();

    const formattedH = getHour.toString().padStart(2, '0');
    const formattedM = getMinutes.toString().padStart(2, '0');
    const now = `${formattedH}:${formattedM}`
   
    try {
        const user = await getUserById(user_id);
        const chat = {
            chat_id,
            room_id,
            content,
            timestamp: now,
            profile: {
                user_id,
                username: user.username,
                avatar: user.avatar_img,
            }
        }
        await createChat(chat_id, chat)

        return res.status(200).json({
            error: false,
            status: 'success',
        })
    } catch (error) {
        return res.status(404).json({
            error: true,
            message: error.message
        })
    }

}

const getChatController = async (req, res) => {
    const room_id = req.params.id
    const page = parseInt(req.query.page) || 1;

    const token = req.headers.authorization;
    if (token === undefined) {
        return res.status(403).json({
            error: true,
            message: 'akses ditolak, harap login!'
        })
    }
    if (!room_id) {
        return res.status(404).json({
            error: true,
            message: 'Cannot replied'
        })
    }

    try {
        const chats = await getChats(room_id, page);

        if (chats.length < 1) {
            return res.status(200).json({
                error: false,
                message: 'Dah Habis!',

            })
        }

        return res.status(200).json({
            error: false,
            message: `All chats on room ${room_id}`,
            page,
            chats

        })
    } catch (error) {
        return res.status(404).json({
            error: false,
            message: error.message,

        })
    }
}
module.exports = { createController, getChatController }