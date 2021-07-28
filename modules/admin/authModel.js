var mongoose = require("mongoose");
const config = require("../../config");
require("dotenv").config();
mongoose
  .connect("mongodb://localhost:27017/test", {
    // console.log(process.env.MONGO_BASE_PATH);
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("data connected");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });

var db = mongoose.connection;
var authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },

  emailPass: {
    type: String,
    required: true,
  },

  mobileNo: {
    type: Number,
    require: true,
  },

  roll: {
    type: String,
    required: true,
  },

  createDate: {
    type: Date,
    required: true,
  },

  status: {
    type: Number,
    required: true,
  },
});

var authModel = mongoose.model("authDetails", authSchema);
module.exports = authModel;
