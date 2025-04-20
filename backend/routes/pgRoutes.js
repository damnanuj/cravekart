import express from "express";
import { getPgUsers, addPgUser } from "../controllers/pgUserController.js";

const router = express.Router();

let PgUser = null;

export const initPgUser = async (sequelize) => {
  PgUser = (await import("../models/pg/pgUser.js")).default(sequelize);
  await PgUser.sync();
};

router.get("/users", (req, res) => getPgUsers(PgUser, req, res));
router.post("/add-user", (req, res) => addPgUser(PgUser, req, res));

export default router;
