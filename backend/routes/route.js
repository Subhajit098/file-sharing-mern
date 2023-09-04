import express from "express";
import { uploadImage } from "../controllers/imageController.js";
import { downLoadContent } from "../controllers/linkSender.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/upload",upload.single("file"),uploadImage);
//  endpoint,middleware,callback function
router.get("/files/:Id",downLoadContent);

export default router;