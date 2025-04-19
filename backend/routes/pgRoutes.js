import express from "express";
import { getPgUsers, addPgUser } from "../controllers/pgUserController.js";

const router = express.Router();

let PgUser = null;

export const initPgUser = async (sequelize) => {
  PgUser = (await import("../models/pgUser.js")).default(sequelize);
  await PgUser.sync();
};

router.get("/pg-users", (req, res) => getPgUsers(PgUser, req, res));
router.post("/pg-users", (req, res) => addPgUser(PgUser, req, res));

export default router;
