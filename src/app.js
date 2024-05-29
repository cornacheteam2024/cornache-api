const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const roomRoutes = require("./routes/roomRoute");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    method: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  })
);

app.use("/", roomRoutes);
app.use((error, req, res, next) => {
  res.status(400).json({
    message: error.message,
  });
});
// app.get('/', (req, res) => {
//     res.send('<h1>hello wold</h1>');
// })
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
