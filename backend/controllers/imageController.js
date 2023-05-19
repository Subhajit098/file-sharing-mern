import File from "../models/file.js";


export const uploadImage= async(req,res) =>{
    const fileObj = {
        path:req.file.path,
        name:req.file.originalname
    }
    try{
       const file = await File.create(fileObj);
       console.log(file);
       res.status(200).json({path:`http://localhost:5000/files/${file._id}`})
    }
    catch(err){
        console.log("Error: 1",err.message);
        res.status(400).json({ error:err.message })
    }
}

