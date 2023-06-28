import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //usamos un useState para guardar los productos del carrito
  const [cart, setCart] = useState([]);

  //función para agregar al carrito
  const addToCart = (productoNuevo) => {
    //verifico si el producto nuevo ya esta en cart
    let exist = isInCart(productoNuevo.id);
    console.log(cart);
    if (exist) {
      //creo un nuevo array donde se actualiza la cantidad
      let newArray = cart.map((product) => {
        if (product.id === productoNuevo.id) {
          return {
            ...product,
            quatity: productoNuevo.quatity,
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

  //creo una función para buscar la cantidad total de un elemento según su id
  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product?.quatity;
  };

  let data = {
    cart: cart,
    addToCart: addToCart,
    deleteCart: deleteCart,
    deleteElement: deleteElement,
    getQuantityById: getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartContextProvider;
