import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const CartContainer = () => {
  //consumo el contexto cart de CartContext
  const { cart, deleteCart, deleteElement, getTotalPrice } =
    useContext(CartContext);

  //Llamada a función getTotalPrice
  let totalPrice = getTotalPrice();

  //creo una función que ejecute deleteCart, pero que lo hago junto a sweet alert 2
  const clearCart = () => {
    Swal.fire({
      title: "¿Quieres limpiar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, limpiar el carrito",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCart();
        Swal.fire("Carrito Vaciado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se vacio el carrito", "", "info");
      }
    });
  };

  return (
    <div className="p-2">
      <h2>Total Pedido : ${totalPrice}</h2>
      {/* Hago un renderizado condicional para el caso donde no haya items, los botones no se muestren */}
      {cart.length > 0 && (
        <>
          <button onClick={clearCart} className="btn btn-danger mb-2">
            Limpiar carrito
          </button>
          <Link to="/checkout">
            <button className="btn btn-success mb-2 ms-2">
              Finalizar compra
            </button>
          </Link>
        </>
      )}
      {/* renderizo los productos de cart */}
      {cart.map((product) => (
        <div key={product.id} className="border rounded mb-2 p-2 row">
          <div className="col">
            <h2>Modelo : {product.title}</h2>
            <h3>Precio Unitario: ${product.price}</h3>
            <h3>Precio total: ${product.price * product.quatity}</h3>
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
