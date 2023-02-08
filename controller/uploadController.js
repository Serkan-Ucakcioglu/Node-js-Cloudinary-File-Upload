const cloudinary = require("cloudinary").v2;

const uploader = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.img.tempFilePath,
      {
        use_filename: true,
        folder: "node_file",
      }
    );

    res.status(200).json({ url: response.url });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = uploader;
