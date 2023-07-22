const fs = require('fs');

const uploadToGoogleDrive = async (file, auth, google) => {
    console.log
    const fileMetadata = {
      name: file.originalname,
      parents: ["1OfKX2GRU3Z53Wjz7wEEG04BUJCks-d4r"],
    };
    const media = {
      mimeType: file.mimetype,
      body: fs.createReadStream(file.path),
    };
  
    const driveService = google.drive({ version: "v3", auth });
  
    const response = await driveService.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id",
    });
    console.log("Response", response.data.id);
    return response.data.id;
  };

const deleteFile = (filePath) => {
    fs.unlink(filePath, () => {
    //   console.log("file deleted");
    });
  };

module.exports = {
    uploadToGoogleDrive,
    deleteFile
}