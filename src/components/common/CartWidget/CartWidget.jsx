import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <div style={{ position: "relative" }}>
      <BsFillCartFill color="white" size="35px"></BsFillCartFill>
      <div
        style={{
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          background: "black",
          color: "white",
          textAlign: "center",
          position: "absolute",
          top: "70%",
          left: "15%",
        }}
      >
        {total}
      </div>
    </div>
  );
};
