
CraveKart API Endpoints
=======================

This project provides a centralized configuration for API endpoints used in the CraveKart application. The API is hosted on Render and serves different routes for managing orders, users, and menu items.

Base URL:
---------
https://cravekart.onrender.com/api

Endpoints:
----------

Order APIs:
- Create a New Order:
  POST /order
  Usage: endpoints.createOrder

## 🧾 Sample Order Payload (JSON)

```json

{
  "name": "Anuj Kumar",
  "phone": "7979746435",
  "cart": {
    "Pizza": [
      { "name": "Peppy Paneer", "quantity": 1, "price": 240 }
    ],
    "Snacks": [
      { "name": "Nachos", "quantity": 1, "price": 100 }
    ],
    "Drinks": [
      { "name": "Iced Tea", "quantity": 1, "price": 70 }
    ]
  },
  "category": ["Pizza", "Snacks", "Drinks"],
  "item_name": ["Peppy Paneer", "Nachos", "Iced Tea"]
}




- Get Past Orders by Mobile Number:
  GET /orders/:mobNumber
  Usage: endpoints.getPastOrders(mobNumber)


User APIs:
- Add a New User:
  POST /add-user
  Usage: endpoints.addUser

## 🧾 Sample Order Payload (JSON)

```json

  {
    "name": "Anuj Gupta",
    "email": "anuj@example.com",
    "mob_num": "7979746435"
  }

- Get All Users:
  GET /users
  Usage: endpoints.getUsers


Menu APIs:
- Get Full Menu:
  GET /menu
  Usage: endpoints.getMenu

- Get Menu Item by ID:
  GET /menu/:itemId
  Usage: endpoints.getMenuItemById(itemId)


Usage Example:
--------------
import endpoints from './endpoints';

# Example: Fetch menu
fetch(endpoints.getMenu)
  .then(res => res.json())
  .then(data => console.log(data));

# Example: Create an order
fetch(endpoints.createOrder, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(orderData)
});

File Location:
--------------
Ensure this file is saved as `endpoints.js` and imported wherever API routes are required in your project.

Contact:
--------
For issues or suggestions, feel free to open an issue or contact the maintainer.
