import { DataTypes } from "sequelize";

const PgUserModel = (sequelize) => {
  return sequelize.define("PgUser", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    mob_num: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        is: /^[6-9]\d{9}$/,
      },
    },
  });
};

export default PgUserModel;
