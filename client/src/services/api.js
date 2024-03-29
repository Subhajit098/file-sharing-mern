import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();
// Replaced the server link with the vercel backend link
// "http://localhost:5000" |
const URL = "http://localhost:5000";


export const uploadFile= async(data)=>{
    try{
        let response = await axios.post(`${URL}/upload`,data);
        // returns an object consisting of headers,requestHeaders,data,etc
        console.log(response);
        return response.data;
    }
    catch(err){
        console.log("Error while making the api call ",err.message);
    }
}