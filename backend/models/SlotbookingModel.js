const { model, Schema } = require("../Connection");

const myschema = new Schema({
  username: String,
  vehicle: String,
  entry: Date,
  exit: Date,
  userAddress: String,
  slot: Number
});

module.exports = model('slots', myschema);