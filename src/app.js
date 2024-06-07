// const bodyParser = require("body-parser");
// import { apiDocumentation } from './docs/apiDoc';

const express = require("express");

const cors = require("cors");
const ChatRoute = require("./routes/ChatRouter");
const UserRoute = require("./routes/UserRoute");
const HistoryRoute = require("./routes/HistoryRoute");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");
const { apiDocumentation } = require("./docs/apiDoc");
// const {swaggerSpec,swaggerUi} = require('./utils/swagger')
// const formidableMiddleware = require('express-formidable');
// const multer = require('./middleware/uploadImage')

const roomRoutes = require("./routes/roomRoute");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
// app.use(formidableMiddleware())
app.use(express.json());

app.use(
  cors({
    method: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  })
);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation, { explorer: true }));
app.use('/', UserRoute);
app.use("/room", roomRoutes);
app.use('/chat', ChatRoute);
app.use('/history', HistoryRoute);

app.use((error, req, res, next) => {
  if (error) {
    console.log(error);
    next(error)
    return
  }
  res.status(400).json({
    message: error.message,
  });
});
// app.get('/', (req, res) => {
//     res.send('<h1>hello wold</h1>');
// })
app.listen(port, () => {
  console.log(`Listening on http://0.0.0.0:${port}`);
});
