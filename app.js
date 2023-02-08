const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
