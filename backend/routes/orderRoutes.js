import express from "express";
import { createOrder, getOrdersByPhone } from "../controllers/pg/pgOrderController.js";

const router = express.Router();

let Order = null;

export const initOrders = async (sequelize) => {
  Order = (await import("../models/pg/Order.js")).default(sequelize);
  await Order.sync();
  //await Order.sync({ force: true });
  
};
// Route to fetch orders based on phone number
router.get("/orders/:phone", (req, res) => getOrdersByPhone(Order, req, res));
// Route to create a new order
router.post("/order", (req, res) => createOrder(Order, req, res));

export default router;
