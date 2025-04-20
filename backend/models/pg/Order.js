import { DataTypes } from "sequelize";

const Order = (sequelize) => {
  return sequelize.define("Order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cart: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    category: {
      type: DataTypes.ARRAY(DataTypes.STRING), // e.g., ["Pizza", "Burger"]
      allowNull: false,
    },
    item_name: {
      type: DataTypes.ARRAY(DataTypes.STRING), // e.g., ["Chicken Burger", "Margherita"]
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
    }
  });
};

export default Order;
