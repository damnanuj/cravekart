import React from "react";
import burger from "../../assets/chickenburgur.png";
import fire from "../../assets/fire.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { Spin } from "antd";

function ItemDetails() {
  const item = useSelector((state) => state?.menu?.selectedItem);
  const isLoading = useSelector((state) => state?.menu?.loading);

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center min-h-[35%] bg-[var(--bg)] overflow-hidden p-5 rounded-3xl shadow-md">
        <Spin />
      </div>
    );
  }
  return (
    <div className="w-full bg-[var(--bg)] overflow-y-scroll p-5 rounded-3xl shadow-md">
      <div className="w-full flex justify-center items-center">
        <img src={item?.itemImages?.[0]} alt="item" className="max-w-[80px]" />
      </div>

      {/* ======details===== */}

      <div className="w-full flex mt-3 flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <p>{item?.item_name}</p>
          <p>₹{item?.price}</p>
        </div>
        <div className="text-[10px] text-gray-400">20Min | 2.5KM</div>

        <div className="text-[10px] flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={fire} alt="fire" width={15} />
            <p>{item?.rating}K</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={fire} alt="fire" width={15} />
            <p>20Min</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={fire} alt="fire" width={15} />
            <p>{item?.calories}Kcl</p>
          </div>
        </div>

        {/* ============decription======== */}
        <div className="text-[9px] text-gray-500">{item?.description}</div>

        <button
          onClick={() => dispatch(addToCart(item))}
          className="p-1.5 cursor-pointer rounded-xl w-full  text-[12px] bg-[var(--yellow)] text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;
