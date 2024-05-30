// const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const ChatRoute = require('../routes/ChatRouter')
const UserRoute = require('../routes/UserRoute')
const handleUploadError = require('./middleware/uploadError')
// const formidableMiddleware = require('express-formidable');
// const multer = require('./middleware/uploadImage')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
// app.use(formidableMiddleware())
app.use(express.json());

app.use(
    cors({
        method: ["GET", "POST", "PUT", "DELETE"],
        origin: "*",
    })
);

app.use('/', UserRoute);
app.use('/chat', ChatRoute);
app.use((error, req, res, next) => {
    res.status(400).json({
        message: error.message,
    });
});
// app.get('/', (req, res) => {
//     res.send('<h1>hello wold</h1>');
// })
app.listen(port, () => { console.log(`Listening on http://localhost:${port}`) });