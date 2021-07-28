const mongoose = require("mongoose")



const subCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    src: {
        type: String,
    },

    dsc: {
        type: String,
    },

    createdDate: {
        type: Date,
        default: Date.now

    },

    status: {
        type: String,
        require: true
    },
  
})

const SubCategory = mongoose.model("SubCategory",subCategorySchema)
module.exports= SubCategory