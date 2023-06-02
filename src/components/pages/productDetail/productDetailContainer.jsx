import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";

const productDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = 2;
  useEffect(() => {
    const productFind = products.find((product) => {
      product.id === id;
    });
    const getProduct = new Promise((res, rej) => {
      res(productFind);
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);
  return <ProductDetail productSelected={productSelected} />;
};

export default productDetailContainer;
