const mongoose = require("mongoose");



const categorySchema = new mongoose.Schema({
  
  title: {
    type: String,
    require: true,
  },

  src: {
    type: String,
  },

  dsc: {
    type: String,
  },
  
  createdDate: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: Number,
    require: true,
  }
});


const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
