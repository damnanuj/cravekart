import React from "react";
import burger from "../../assets/chickenburgur.png";
import fire from "../../assets/fire.png";

function ItemDetails() {
  return (
    <div className="w-full bg-[var(--bg)] overflow-hidden p-5 rounded-3xl shadow-md">
      <div className="w-full flex justify-center items-center">
        <img src={burger} alt="item" width={"55%"} />
      </div>

      {/* ======details===== */}

      <div className="w-full flex mt-3 flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <p>Beef Burger</p>
          <p>₹230</p>
        </div>
        <div className="text-[10px] text-gray-400">20Min | 2.5KM</div>

        <div className="text-[10px] flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={fire} alt="fire" width={15} />
            <p>4.5K</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={fire} alt="fire" width={15} />
            <p>20Min</p>
          </div>
          <div className="flex items-center" gap-1>
            <img src={fire} alt="fire" width={15} />
            <p>30Kcl</p>
          </div>
        </div>

        {/* ============decription======== */}
        <div className="text-[9px] text-gray-500">
          Juicy grilled chicken patty layered with fresh lettuce, tomato,
          cheese, and a dash of mayo, all packed in a soft toasted bun
        </div>

        <button className="p-1.5 cursor-pointer rounded-xl w-full  text-[12px] bg-[var(--yellow)] text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;
