import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema(
  {
    item_name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Pizza", "Burger", "Snacks", "Drinks", "Ice Cream"],
    },
    categoryImage: {
      type: String,
      default: null,
    },
    itemImages: [
      {
        type: String,
      },
    ],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
    calories: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

export default MenuItem;
