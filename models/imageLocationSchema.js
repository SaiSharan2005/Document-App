const mongoose = require("mongoose")

const imageLocationSchema = mongoose.Schema({
    imagePath :{
        type:String,
        require:true
    }
})


const User = new mongoose.model("image", imageLocationSchema);
module.exports = User;
