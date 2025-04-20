import MenuItem from "../../models/mongo/MenuItem.js";
import mongoose from "mongoose";
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
// >>============ Get Single Menu Item by ID =============>>
export const getSingleMenuItem = async (req, res) => {
  const { id } = req.params;

  // Check for valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid item ID format",
    });
  }
  try {
    const item = await MenuItem.findById(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Menu item fetched successfully",
      source: "MongoDB",
      data: item,
    });
  } catch (error) {
    console.error("Error fetching single menu item:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching the menu item",
    });
  }
};
