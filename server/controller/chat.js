const { chat } = require('../model');

exports.postInsert = async (req, res) => {
  console.log(req.body);
  res.send(true);
};
