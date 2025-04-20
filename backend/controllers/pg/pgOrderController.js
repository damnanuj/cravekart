//>>============ Fetch orders by phone number=============>>
export const getOrdersByPhone = async (Order, req, res) => {
  const { phone } = req.params; // Get phone number from URL parameter
  try {
    const orders = await Order.findAll({
      where: {
        phone,
      },
    });

    if (orders.length === 0) {
      return res
        .status(404)
        .json({ error: "No orders found for this phone number." });
    }
    // TODO:PAgination (if extra time left)
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      source: "PostgreSQL",
      totalOrders: orders.length,

      orders,
    });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({
      success: false,
      error: "Error fetching orders",
    });
  }
};

//>>============ Create a new order =============>>
export const createOrder = async (Order, req, res) => {
  const { name, phone, cart, category, item_name } = req.body;

  // Validation
  if (!name || !phone || !cart || !category || !item_name) {
    return res.status(400).json({
      success: false,
      error:
        "All fields are required (name, phone, cart, category, item_name).",
    });
  }

  try {
    const newOrder = await Order.create({
      name,
      phone,
      cart,
      category,
      item_name,
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      timestamp: new Date().toISOString(),
      orderId: newOrder.id,
      totalItems: item_name.length,
      order: newOrder,
    });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({
      success: false,
      error: "Error creating order",
    });
  }
};
