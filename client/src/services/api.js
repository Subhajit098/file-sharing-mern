import axios from "axios";

const URL = "http://localhost:5000";

export const uploadFile= async(data)=>{
    try{
        let response = await axios.post(`${URL}/upload`,data);

        return response.data;
    }
    catch(err){
        console.log("Error while making the api call ",err.message);
    }
}