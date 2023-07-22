const Query = require("../models/Query");
const { v4: uuid } = require("uuid");
const dotenv = require("dotenv")
dotenv.config()
const axios = require('axios')

exports.chat = async (req, res) => {
  try {
    const tempId = uuid();
    await Query.updateOne(
      { _id: req.queryId },
      { $push: { texts: { message: req.body.message, textBy: 1 } } }
    );
    // const { data } = await createChatGTP({
    //   message: req.body.message,
    // });

    const data = {
      prompt : req.body.message,
      algo : req.body.algo
    };
    console.log("Generating response to your message...", data);

    const response = await axios.post('http://127.0.0.1:8000/generate', data)
    console.log("Response Generated", response.data)
    await Query.updateOne(
      { _id: req.queryId },
      { $push: { texts: { message: response.data.response, textBy: 0 }, }, }
    );
    
    res.send({
      message: response.data.response,
      _id: response.data.response ? tempId : undefined,
    });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};

exports.getAllChats = async (req, res) => {
  try {
    const query = await Query.findOne({ _id: req.queryId });
    if (!query)
      return res
        .status(400)
        .send({ success: false, message: "Query doesn't exist" });
    res.send(query);
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};
