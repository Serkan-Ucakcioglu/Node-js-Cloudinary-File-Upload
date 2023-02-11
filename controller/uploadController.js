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

    //If we want to add an img to a user in mongo
    /*  await User.findByIdAndUpdate(id,{image: response.url}) */
    res.status(200).json({ url: response.url });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = uploader;
