const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const fileUpload = require("express-fileupload");

require("dotenv").config();

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());

app.post("/upload", function (req, res) {
  console.log(req.files.img);
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
