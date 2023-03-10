const express = require("express");
const app = express();

const cloudinary = require("cloudinary").v2;
const cors = require("cors");

const fileUpload = require("express-fileupload");
const uploadRoute = require("./router/uploadRoute");

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

// cloudinary connect
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());
app.use("/", uploadRoute);

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
