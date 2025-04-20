import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../api/enpoints";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const mobNumber = "7979746435";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(endpoints.getPastOrders(mobNumber));
        setOrders(res.data.orders || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    if (mobNumber) {
      fetchOrders();
    } else {
      console.warn("Mobile number not found.");
      setLoading(false);
    }
  }, [mobNumber]);

  const calculateTotal = (cart) => {
    let total = 0;
    Object.values(cart).forEach((items) => {
      items.forEach((item) => {
        total += item.price * item.quantity;
      });
    });
    return total;
  };

  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        Loading your tasty history... 🍕🍔🍟
      </div>
    );

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-xl font-bold mb-4">🍽️ Your Past Orders</h2>
      {orders.length === 0 ? (
        <div className="text-gray-600 w-full h-1/2 flex justify-center items-center">
          No orders found 🥲 Go grab a bite!
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-300 rounded-2xl p-4 shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-sm">Order ID: #{order.id}</p>
                <p className="text-xs text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
              <p className="text-sm mb-2">
                <span className="font-medium">Status:</span> {order.status} 🕐
              </p>

              <div className="flex flex-col gap-2 mb-2">
                {Object.entries(order.cart).map(([category, items], i) => (
                  <div key={i}>
                    <p className="font-medium text-[14px] mb-1">{category}:</p>
                    <ul className="pl-4 list-disc text-sm text-gray-700">
                      {items.map((item, j) => (
                        <li key={j}>
                          {item.name} × {item.quantity} — ₹{item.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-sm font-bold mt-2">
                Total: ₹{calculateTotal(order.cart)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
