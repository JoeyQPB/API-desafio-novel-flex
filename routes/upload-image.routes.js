import express from "express";
import { uploadImg } from "../config/cloudinary.config.js";
import { uploadImageController } from "../controllers/image/upload.controller.js";

const uploadImgRouter = express.Router();

uploadImgRouter.post(
  "/",
  uploadImg.single("picture"),
  uploadImageController.upload
);
export { uploadImgRouter };
