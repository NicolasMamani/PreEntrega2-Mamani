import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartContainer = () => {
  //consumo el contexto cart de CartContext
  const { cart, deleteCart, deleteElement } = useContext(CartContext);
  return (
    <div className="p-2">
      <button onClick={deleteCart} className="btn btn-danger mb-2">
        Limpiar carrito
      </button>
      {/* renderizo los productos de cart */}
      {cart.map((product) => (
        <div key={product.id} className="border rounded mb-2 p-2 row">
          <div className="col">
            <h2>Modelo : {product.title}</h2>
            <h3>Precio : ${product.price}</h3>
            <h3>Cantidad : {product.quatity}</h3>
            <button
              className="btn btn-warning"
              onClick={() => deleteElement(product.id)}
            >
              Eliminar producto
            </button>
          </div>
          <div className="col text-center">
            <img
              src={product.img}
              alt={product.title}
              style={{ width: "200px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContainer;
