const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
    require: true,
  },

  src:{
    type:String
  },

  des: {
    type: String,
    require: true,
  },

  subDes: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  discountPrice: {
    type: Number,
    require: true,
  },

  size: {
    type: Number,
    require: true,
  },

  qty: {
    type: Number,
    require: true,
  },

});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
