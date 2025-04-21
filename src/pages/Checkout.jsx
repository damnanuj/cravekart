import React from "react";

import { Modal } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    setShowSuccessModal(true);
  };

  return (
    <div className="w-full min-h-screen p-5 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto flex flex-col gap-5">
        <h2 className="text-xl font-medium">Checkout</h2>

        {/* Cart Items */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg mb-4">Order Summary</h3>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 mb-4 p-2 border-b"
            >
              <img
                src={item.itemImages[0]}
                alt={item.item_name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.item_name}</h4>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="text-sm">₹{item.price * item.quantity}</p>
            </div>
          ))}
          <div className="flex justify-between mt-4 font-medium">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* Address Form */}
        {!showAddressForm ? (
          <button
            onClick={() => setShowAddressForm(true)}
            className="bg-[var(--yellow)] text-white py-2 px-4 rounded"
          >
            Fill Address Details
          </button>
        ) : (
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg mb-4">Delivery Address</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={address.mobile}
                onChange={(e) =>
                  setAddress({ ...address, mobile: e.target.value })
                }
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Delivery Address"
                value={address.address}
                onChange={(e) =>
                  setAddress({ ...address, address: e.target.value })
                }
                className="border p-2 rounded"
                rows={3}
              />
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="bg-[var(--yellow)] text-white py-2 px-4 rounded"
              >
                Place Order
              </button>
            </form>
          </div>
        )}

        {/* Success Modal */}
        <Modal
          title="Order Placed Successfully! 🎉"
          open={showSuccessModal}
          onOk={() => setShowSuccessModal(false)}
          onCancel={() => setShowSuccessModal(false)}
        >
          <p>
            Your order has been placed successfully! 🍔 Thank you for shopping
            with us! 🙏
          </p>
        </Modal>
      </div>
    </div>
  );
}

export default Checkout;
