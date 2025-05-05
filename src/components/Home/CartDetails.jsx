import React from "react";
import burger from "../../assets/chickenburgur.png";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function CartDetails() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="w-full h-full justify-center text-center items-center gap-2 text-xs flex flex-col flex-1 bg-[var(--bg)]  p-5 rounded-3xl shadow-md">
        🛒 Oops... Your cart is emptier than my fridge at midnight!
        <p className="text-[var(--yellow)] text-xs text-center ">
          {" "}
          Start adding some tasty treats 😋🍔🍟🍕
        </p>
      </div>
    );
  }

  function handleCheckout(){
    console.log(cartItems)
   navigate("/checkout")
  }

  return (
    <div className="w-full gap-2 flex flex-col h-full flex-1 bg-[var(--bg)] overflow-hidden p-5 rounded-3xl shadow-md">
      <div className="w-full  flex flex-col gap-1 flex-1 overflow-y-scroll scrollbar-hide  border-red-500">
        {cartItems.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>

      <div className="flex justify-between items-center text-sm">
        <p>Total</p>
        <p>₹{total}</p>
      </div>

      <button
        onClick={handleCheckout}
        className="p-1.5 cursor-pointer rounded-xl w-full  text-[12px] bg-[var(--yellow)] text-white"
      >
        Checkout
      </button>
    </div>
  );
}

export default CartDetails;



const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full p-2 shadow-md rounded-2xl flex items-center gap-1">
      <img src={item.itemImages[0]} alt="item" width={40} />

      <div className="flex flex-col items-start">
        <p className="text-[10px]">{item.item_name}</p>

        <div className="flex items-center gap-1">
          <div
            className="bg-[var(--yellow)] text-white rounded-md px-1 cursor-pointer text-xs h-fit"
            onClick={() => dispatch(decreaseQty(item._id))}
          >
            -
          </div>
          <p>{item.quantity}</p>
          <div
            className="bg-[var(--yellow)] text-white rounded-md cursor-pointer px-1 text-xs h-fit"
            onClick={() => dispatch(increaseQty(item._id))}
          >
            +
          </div>
        </div>
      </div>

      <div className="text-xs flex-1 flex justify-end items-end">
        ₹{item.price} x {item.quantity}
      </div>
    </div>
  );
};
