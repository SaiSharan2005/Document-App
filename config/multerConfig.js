const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'static/public/images'); // Destination folder for uploaded files
	},
	filename: function (req, file, cb) {
	  cb(null, file.originalname); // Use original file name for storing
	},
  });
const upload = multer({ storage: storage });
 

module.exports = upload;