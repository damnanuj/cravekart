import express from "express";
import { getAllMenuItems, getSingleMenuItem } from "../controllers/mongo/menuController.js";


const router = express.Router();


router.get("/menu", getAllMenuItems);
router.get("/menu/:id", getSingleMenuItem);

export default router;
