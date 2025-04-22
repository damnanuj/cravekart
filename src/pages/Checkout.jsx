import React from "react";

import { Modal, message } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
function Checkout() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!address.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!address.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(address.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!address.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      setShowSuccessModal(true);
      message.success("Order placed successfully!");
      dispatch(clearCart());
     
    }
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
                <p className="text-xs text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
             <div className="flex flex-col"> 
             <p className="text-[10px] text-gray-400">₹{item.price}x{item.quantity}</p>
              <p className="text-sm">₹{item.price * item.quantity}</p>
             </div>
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
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={address.name}
                  onChange={(e) =>
                    setAddress({ ...address, name: e.target.value })
                  }
                  className={`border p-2 rounded w-full ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={address.mobile}
                  onChange={(e) =>
                    setAddress({ ...address, mobile: e.target.value })
                  }
                  className={`border p-2 rounded w-full ${
                    errors.mobile ? "border-red-500" : ""
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Delivery Address"
                  value={address.address}
                  onChange={(e) =>
                    setAddress({ ...address, address: e.target.value })
                  }
                  className={`border p-2 rounded w-full ${
                    errors.address ? "border-red-500" : ""
                  }`}
                  rows={3}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

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
          onOk={() => {
            setShowSuccessModal(false);
            navigate("/");
          }}
          closeIcon={false}
          okText="Go Back to Home"
          cancelButtonProps={{ style: { display: 'none' } }}
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
