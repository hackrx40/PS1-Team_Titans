const Query = require("../models/Query");
const { v4: uuid } = require("uuid");


exports.chat = async (req, res) => {
  try {
    const tempId = uuid();
    
    let oldConvo = getChatWithID(req.queryId)
    oldConvo.push(message);
    res.send({
      message: data.choices[0]?.text.trim(),
      _id: data.choices[0] ? tempId : undefined,
    });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};