import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let { id } = useParams();

  //consumimos el contexto
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    const productFind = products.find((product) => {
      return product.id === Number(id);
    });
    const getProduct = new Promise((resolve, rej) => {
      setTimeout(() => resolve(productFind), 0);
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ProductDetail
      productSelected={productSelected}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
};

export default ProductDetailContainer;
