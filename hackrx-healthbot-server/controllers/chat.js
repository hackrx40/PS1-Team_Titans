const Query = require("../models/Query");
const { v4: uuid } = require("uuid");

const getChatWithID = async(id) => {
  try {
    const query = await Query.findOne({ _id: id });
    return query
  } catch (err) {
    return "Error"
  }
}

exports.chat = async (req, res) => {
  try {
    const tempId = uuid();
    
    let oldConvo = getChatWithID(req.queryId)
    oldConvo.push(message);
    
    const data = {
      prompt : req.body.message,
    };
    console.log("Generating response to your message...", data);

    const response = await axios.post('url/generate', data)
    console.log("Response Generated", response.data)

    res.send({
      message: data.choices[0]?.text.trim(),
      _id: data.choices[0] ? tempId : undefined,
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