import mongoose from "mongoose";
const { Schema } = mongoose;

const fileSchema = new Schema({
    path:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    downloadCount:{
        type:Number,
        required:true,
        default:0
    }
})

const File =  mongoose.model("Files",fileSchema);

export default File;
