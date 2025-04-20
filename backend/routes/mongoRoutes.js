import express from "express";
import { getAllMenuItems } from "../controllers/mongo/menuController.js";


const router = express.Router();


router.get("/menu", getAllMenuItems);

export default router;
