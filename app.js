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
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());

app.post("/upload", async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.img.tempFilePath,
      {
        public_id: "node_file",
        folder: "node_file",
      }
    );

    // Generate url
    const url = await cloudinary.url("node_file", {
      width: 400,
      height: 400,
      Crop: "fill",
    });

    res.status(200).json({ url });
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
