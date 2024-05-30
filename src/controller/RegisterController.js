const { Firestore } = require("@google-cloud/firestore");
const { User, storeData, getUsers, getUserById, updateProfil } = require('../model/userModel');
const { uploadToBucket } = require('../utils/uploadToBucket')
const { generateAccessToken } = require('../middleware/authToken');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
// const { use } = require("../UserRoute");

require('dotenv').config()

const registerController = async (req, res) => {
    const { username, password, confirmPass } = req.body;
    const user_id = crypto.randomUUID();

    if (password !== confirmPass) {
        return res.status(400).json({
            error: true,
            message: 'Password tidak cocok!'
        });
    }
    console.log(confirmPass);
    console.log(password);


    let hashedPass = await bcrypt.hashSync(password, 10);
    const newUser = {
        "user_id": user_id,
        "username": username,
        "password": hashedPass,
        "avatar_img": null,
    }
    try {
        await storeData(user_id, newUser);


        return res.status(200).json({
            error: false,
            message: 'Berhasil, Silahkan login!',
            user: newUser
        })

    } catch (e) {
        return res.status(500).json({
            message: e.message,
        });

    }
}

const loginController = async (req, res) => {
    const { username, password } = req.body
    const db = new Firestore({

    });

    const userSnapshot = await getUsers(username);
    if (userSnapshot.empty) {
        res.status(400).json({
            error: true,
            message: 'User tidak ada, plese register!'
        })
        return false;
    }

    let userRef;
    userSnapshot.forEach(user => {
        userRef = user.data()
    })
    const isValid = bcrypt.compareSync(password, userRef.password);

    if (!isValid) {
        res.status(404).json({
            error: true,
            message: 'Password Salah!'
        })
    }

    userRef.token = generateAccessToken(username);

    res.status(200).json({
        error: false,
        message: 'Login Berhasil !',
        user: userRef
    })

}

const onLoginController = (req, res) => {
    const data = res.locals.jwt;

    // console.log(data);
    res.status(200).json({
        error: false,
        message: data
    });
}

const editProfilController = async (req, res) => {
    const id = req.params.id
    try {
        const user = await getUserById(id);

        const profile = {
            username: user.username,
            avatar_img: user.avatar_img
        }
        res.status(200).json({
            error: false,
            user: profile
        });
    } catch (error) {
        res.status(404).json({
            error: false,
            message: 'Gagal mengambil data'
        });
    }
    

}


const updateProfilController = async (req, res) => {
    const user_id = req.params.id
    const ava = req.file.cloudStoragePublicUrl
    // const ava = cloudStoragePublicUrl
    const { username } = req.body;

    // const freshAva = 
    try {
        const user = await getUserById(user_id);
        const data = {
            "user_id": user_id,
            "username": username,
            "password": user.password,
            "avatar_img": ava
        }

        await updateProfil(user_id, data)

        res.status(200).json({
            error: false,
            message: 'Data anda berhasil diubah',
            user: data
        });

    } catch (error) {
        res.status(404).json({
            error: true,
            message: error.message
        });
    }

}

module.exports = { registerController, loginController, onLoginController, editProfilController, updateProfilController } 