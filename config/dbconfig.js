const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/Documents', {
	useNewUrlParser: true,
	useUnifiedTopology: true,   
}).then(() => console.log("Connected Successfully to DataBase")).catch((err) => console.log(`Connection failed ! Error : ${err}`));

