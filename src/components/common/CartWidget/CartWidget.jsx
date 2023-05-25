import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {
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
        0
      </div>
    </div>
  );
};
