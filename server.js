const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoute = require('./routes/api');
const cors = require('cors');
const app = express();
const multer = require("multer");
require("./config/dbconfig")

// Multer configuration
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'static/public/images'); // Destination folder for uploaded files
	},
	filename: function (req, file, cb) {
	  cb(null, file.originalname); // Use original file name for storing
	},
  });

  const upload = multer({ storage: storage });


app.use(cors()); 
app.set("views",path.join(__dirname,"views"));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());



app.use('/api',apiRoute)



app.listen(9999, () => {
	console.log('Server up at 9999');
})