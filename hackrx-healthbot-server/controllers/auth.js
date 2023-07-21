const { hashSync, compareSync } = require("bcrypt");
const Query = require("../models/Query");
const User = require("../models/User");
const { generateApiKey } = require("generate-api-key");
const { v4: uidgen } = require("uuid");

exports.signup = async (req, res) => {
    try {
      const newQuery = new Query({ texts: [] });
      const { _id } = await newQuery.save();
      const newUser = new User({
        uid: uidgen(),
        ...req.body,
        password: hashSync(req.body.password, 10),
        apiKey: generateApiKey({ method: "bytes" }),
        queries: _id,
      });
      const user = await newUser.save();
      user.password = undefined;
      res.status(201).send(user);
    } catch (err) {
      res.status(400).send({ success: false, message: err.message });
    }
  };