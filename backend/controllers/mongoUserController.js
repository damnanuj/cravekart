import MongoUser from "../models/mongoUser.js";

export const getMongoUsers = async (req, res) => {
  try {
    const users = await MongoUser.find();
    res.json({ source: "MongoDB", users });
  } catch (err) {
    res.status(500).json({ error: "MongoDB error" });
  }
};
