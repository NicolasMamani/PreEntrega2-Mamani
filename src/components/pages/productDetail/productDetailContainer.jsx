import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { database } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ProductDetailContainer = () => {
  //Uso el hook useState para guardar el producto seleccionado
  const [productSelected, setProductSelected] = useState({});
  //Obtengo el id gracias a un hook de react-router-dom
  let { id } = useParams();
  //Consumimos dos métodos del contexto "CartContext"
  const { addToCart, getQuantityById } = useContext(CartContext);
  //En una variable voy a guardar la cantidad del producto
  const cantidad = getQuantityById(id);

  useEffect(() => {
    //Guardo la colección "products" en una variable
    let itemCollection = collection(database, "products");
    //guardo un documento en una variable
    let document = doc(itemCollection, id);
    //uso el método getDoc y no getDocs porque ahora estamos trabajando con un solo documento
    getDoc(document).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <ProductDetail
      productSelected={productSelected}
      addToCart={addToCart}
      cantidad={cantidad}
    />
  );
};

export default ProductDetailContainer;
