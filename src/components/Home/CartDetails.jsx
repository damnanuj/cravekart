import React from "react";
import burger from "../../assets/chickenburgur.png";

function CartDetails() {
  return (
    <div className="w-full gap-2 flex flex-col flex-1 bg-[var(--bg)] overflow-hidden p-5 rounded-3xl shadow-md">
      <div className="w-full  flex flex-col gap-1 flex-1 overflow-y-scroll scrollbar-hide  border-red-500">
        <CartItem />

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="flex justify-between items-center text-sm">
        <p>Total</p>
        <p>₹420</p>
      </div>



      <button className="p-1.5 cursor-pointer rounded-xl w-full  text-[12px] bg-[var(--yellow)] text-white">
        Checkout
      </button>
    </div>
  );
}

export default CartDetails;

const CartItem = () => {
  return (
    <div className=" w-full flex  items-center gap-1">
      <img src={burger} alt="item" width={40} />

      <div className="flex flex-col items-start">
        <p className="text-[10px] ">Chicken Burger</p>
        {/* ===quantity inc buttonss===== */}
        <div className="flex items-center gap-1 ">
          <div className="bg-[var(--yellow)] text-white  rounded-md px-1 cursor-pointer text-xs h-fit">
            -
          </div>
          <p>1</p>
          <div className="bg-[var(--yellow)] text-white  rounded-md cursor-pointer  px-1 text-xs h-fit">
            +
          </div>
        </div>
      </div>

      <div className="text-xs flex-1  flex justify-end  items-end">₹230 x 1</div>
    </div>
  );
};
