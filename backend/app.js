import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import dbConnection from "./database/db.js";

const app = express();

app.use(cors());

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