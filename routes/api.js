const express = require('express');
const router = express.Router();
const multer = require("multer");
const {addDocument,updateDocument,getAllDocuments,getSpecficData,deleteSpecficDocument} = require('../controllers/document-controller')


const upload = require('../config/multerConfig')
router.get('/',getAllDocuments);
router.post('/create',addDocument);
router.post('/update',updateDocument);
router.post('/specific',getSpecficData);
router.post("/delete",deleteSpecficDocument);

router.post("/uploadFile", upload.single("file"), (req, res) => {
    console.log("upload successfully");
    res.json(req.body);
    
});

router.get('/name',(req,res)=>{
    // res.send({damed:"shut up "})
    res.send("shut up ")
});
module.exports = router; 