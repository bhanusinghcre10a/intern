const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"]
  },
  country: {
    type: String,
    required: [true, "please input country"]
  }
});
const startup = new mongoose.model("startup", userschema);

module.exports = startup;
