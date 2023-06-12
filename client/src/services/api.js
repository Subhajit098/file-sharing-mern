import axios from "axios";

// const URL = "http://localhost:5000";
const URL = "https://file-sharing-mern-gzab.onrender.com";

export const uploadFile= async(data)=>{
    try{
        let response = await axios.post(`${URL}/upload`,data);
        console.log(response);
        return response.data;
    }
    catch(err){
        console.log("Error while making the api call ",err.message);
    }
}