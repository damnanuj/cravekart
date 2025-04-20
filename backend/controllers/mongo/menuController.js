import MenuItem from "../../models/mongo/MenuItem.js";

// >>============ Get All Menu Items =============>>
export const getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();

    res.status(200).json({
      success: true,
      message: "Menu items fetched successfully",
      total: items.length,
      source: "MongoDB",
      data: items,
    });
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching menu items",
    });
  }
};
