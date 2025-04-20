import express from "express";
import dotenv from "dotenv";
import connectDatabases from "./db/dbConnect.js";
import mongoRoutes from "./routes/mongoRoutes.js";
import pgRoutes, { initPgUser } from "./routes/pgRoutes.js";
import orderRoutes , {initOrders} from "./routes/orderRoutes.js"


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  const { sequelize } = await connectDatabases();
  await initPgUser(sequelize);
  await initOrders(sequelize);

  app.use("/api", mongoRoutes);
  app.use("/api", pgRoutes);
  app.use("/api", orderRoutes);

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
};

startServer();
