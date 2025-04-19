import express from "express";
import { getMongoUsers } from "../controllers/mongoUserController.js";

const router = express.Router();

router.get("/mongo-users", getMongoUsers);

export default router;
