import File from "../models/file.js";

// server link :https://file-sharing-mern-webapp.vercel.app/
// http://localhost:5000

export const uploadImage= async(req,res) =>{
    const fileObj = {
        path:req.file.path,
        name:req.file.originalname
    }
    try{
       const file = await File.create(fileObj);
       console.log(file);
       res.status(200).json({path:`https://file-sharing-mern-webapp.vercel.app/files/${file._id}`})
    }
    catch(err){
        console.log("Error: 1",err.message);
        res.status(400).json({ error:err.message })
    }
}

