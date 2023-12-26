const Document  = require("../models/documentSchema");

const addDocument =async(req,res)=>{
    try{
        // console.log(req.body)
        const data = {...req.body} ;
        console.log(data)
        const document = await Document(req.body);
        document.save();
        
        res.status(201).json(req.body)
    }catch (error) {
        throw error;
      }
}


const updateDocument = async(req,res)=>{
    const {_id} = req.body
    
    // req.body.title = "changed the title"
    const update = req.body 
    try{
        const document = await Document.findByIdAndUpdate(_id,update)
        console.log("req / update")
        res.send("successfully updated").status(200)

    }catch (error){
        throw error;
    }
};

const getAllDocuments = async(req,res)=>{
    try{
        const documents = await Document.find({})
        res.json(documents);
        console.log("req / allDocuments" )
    }catch(err){
        throw err;
    }
};

const getSpecficData = async(req,res)=>{
    try{
        const document = await Document.findOne(req.body);
        res.json(document);
    }catch(err){
        throw err;
    }
};

const deleteSpecficDocument = async(req,res)=>{
    try{
        await Document.deleteOne(req.body);
        res.status(200).json({"success":true})
    }
    catch(err){
        throw err;
    }
};


module.exports = {addDocument,updateDocument,getAllDocuments,getSpecficData,deleteSpecficDocument}