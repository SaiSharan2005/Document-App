const mongoose = require("mongoose")

const documentSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    creater:String,
    createdAt: {
        type: Date,
        default: Date.now // Set the default value to the current date/time when a document is created
    },
    totalData:[{
        data:String,
        dataType:String
    }]
})


const Document = new mongoose.model("document", documentSchema);
module.exports = Document;


