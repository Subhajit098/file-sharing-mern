import File from "../models/file.js";

export const downLoadContent = async(req,res)=>{
    try{
        const file = await File.findById(req.params.Id);
        file.downloadCount ++;

        await file.save();
        res.download(file.path,file.name);
    }
    catch(err){
        console.log(err.message);
        console.log(err);
         res.send("Unable to generate the sharable file link");
    }
}