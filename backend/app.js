import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import dbConnection from "./database/db.js";

const app = express();

app.use(cors());
// cross origin resource sharing. This happens because our two servers for the frontend and backend is running on both diff ports and we are not allowed to share data b/w them. This package helps us to remove the conflict error.

app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

const PORT = 5000;

dbConnection();

app.use("/",router);

app.listen(PORT,()=>{
    console.log("Listening on Port ",PORT);
})