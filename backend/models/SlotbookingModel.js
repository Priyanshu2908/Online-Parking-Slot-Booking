const { model, Schema } = require("../Connection");

const myschema = new Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  avatar: String,
});

module.exports = model('slots', myschema);