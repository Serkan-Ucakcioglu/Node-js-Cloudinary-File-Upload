const express = require("express");
const uploader = require("../controller/uploadController");

const router = express.Router();

router.post("/upload", uploader);

module.exports = router;
