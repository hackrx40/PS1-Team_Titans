require("dotenv").config();

const { createCompletionChatGTP } = require("./chatGTP");
const express = require("express");
const cors = require("cors");
const authRouter = require("./routers/auth");
const chatRouter = require("./routers/chat");
const mongoose = require("mongoose");
const {google} = require("googleapis");
const {GoogleAuth} = require('google-auth-library');
const Multer = require("multer")
const googledrive = require("./controllers/googledrive")
const imageProcessor = require("./controllers/image")
const medicProcessor = require("./controllers/medicine")


const authenticateGoogle = () => {
  console.log("Google Auth configuring...")
  const auth = new GoogleAuth({
    keyFile: `${__dirname}/cred.json`,
    scopes: "https://www.googleapis.com/auth/drive",
  });
  console.log("Google Auth configured")
  return auth;
};

const multer = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `${__dirname}/stash`);
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());



app.post("/uploadimage", multer.single("file"), async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    const auth = authenticateGoogle();
    console.log("Uploading to drive");
    const id = await googledrive.uploadToGoogleDrive(req.file, auth, google);
    console.log("Upload successful")
    googledrive.deleteFile(req.file.path);
    console.log("Processing Image");
    const diagnosis = await imageProcessor.processImage(id, res);
    
    
  } catch (err) {
    console.log(err);
}});

app.post("/getMedicationData", async (req, res) => {
  try {
    if(!req){
      res.status(400).send("Something went wrong! Please try again")
      return;
    }
    console.log("Analysing drug...");
    console.log(req.body);

    const medicData = await medicProcessor.processDrug(req.body, res);
    
  } catch (err) {
    console.log(err);
}});


app.use("/auth", authRouter);
app.use("/chatgpt", chatRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log("Listening server on port : ", process.env.PORT || 8000);
});
