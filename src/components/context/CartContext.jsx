import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //usamos un useState para guardar los productos del carrito
  const [cart, setCart] = useState([]);

  //función para agregar al carrito
  const agregarAlCarrito = (productoNuevo) => {
    //verifico si el producto nuevo ya esta en cart
    let exist = isInCart(productoNuevo.id);
    console.log(cart);
    if (exist) {
      //creo un nuevo array donde se actualiza la cantidad
      let newArray = cart.map((product) => {
        if (product.id === productoNuevo.id) {
          return {
            ...product,
            quatity: product.quatity + productoNuevo.quatity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, productoNuevo]);
    }
  };

  //creo una función que me diga si un elemento esta en el array
  const isInCart = (id) => {
    let exist = cart.some((product) => {
      return product.id === id;
    });
    return exist;
  };

  //creo una función para borrar el carrito
  const deleteCart = () => {
    setCart([]);
  };

  //creo una función para borrar un elemento
  const deleteElement = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  let data = {
    cart: cart,
    agregarAlCarrito: agregarAlCarrito,
    deleteCart: deleteCart,
    deleteElement: deleteElement,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartContextProvider;
