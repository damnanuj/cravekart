const BASE_URL = "https://cravekart.onrender.com/api";

const endpoints = {
  // Order APIs
  createOrder: `${BASE_URL}/order`,
  getOrderById: (orderId) => `${BASE_URL}/orders/${orderId}`,

  // User APIs
  addUser: `${BASE_URL}/add-user`,
  getUsers: `${BASE_URL}/users`,

  // Menu APIs
  getMenu: `${BASE_URL}/menu`,
  getMenuItemById: (itemId) => `${BASE_URL}/menu/${itemId}`,
};

export default endpoints;
