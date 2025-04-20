const BASE_URL = "https://cravekart.onrender.com/api";

const endpoints = {
  // Order APIs
  createOrder: `${BASE_URL}/order`,
  getPastOrders: (mobNumber) => `${BASE_URL}/orders/${mobNumber}`,

  // User APIs
  addUser: `${BASE_URL}/add-user`,
  getUsers: `${BASE_URL}/users`,

  // Menu APIs
  getMenu: `${BASE_URL}/menu`,
  getMenuItemById: (itemId) => `${BASE_URL}/menu/${itemId}`,
};

export default endpoints;
