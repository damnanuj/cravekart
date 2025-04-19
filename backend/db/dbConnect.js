import mongoose from "mongoose";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const connectDatabases = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // ✅ Connect to PostgreSQL using Sequelize
    const sequelize = new Sequelize(process.env.POSTGRES_URI, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true, // Required for Neon DB or any remote PostgreSQL with SSL
          rejectUnauthorized: false,
        },
      },
      logging: false, // 🔇 Disable Sequelize SQL query logging
    });

    // Test PostgreSQL connection
    await sequelize.authenticate();
    console.log("✅ Connected to PostgreSQL");

    return { sequelize };
  } catch (error) {
    console.error("❌ Error connecting to databases:", error);
    process.exit(1);
  }
};

export default connectDatabases;
