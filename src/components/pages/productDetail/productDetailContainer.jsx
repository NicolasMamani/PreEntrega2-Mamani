import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const productFind = products.find((product) => {
      return product.id === Number(id);
    });
    const getProduct = new Promise((resolve, rej) => {
      setTimeout(() => resolve(productFind), 2000);
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ProductDetail productSelected={productSelected} />;
};

export default ProductDetailContainer;
