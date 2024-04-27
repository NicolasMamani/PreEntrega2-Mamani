import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <div>
      <BsFillCartFill color="white" size="35px"></BsFillCartFill>
      <div className="rounded-full bg-slate-100 p-1 text-center hover:text-3xl hover:p-2">
        {total}
      </div>
    </div>
  );
};
