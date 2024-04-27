import { useParams } from "react-router-dom";
import ProductCardPresentational from "../../common/productCard/ProductCardPresentational";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { database } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    //guardo en una variable la colección products de la base de datos
    let itemCollection = collection(database, "products");
    //declaro una variable que podrá tener dos tipos de consultas
    let consult;
    if (categoryName) {
      //hago una query donde voy a guardar en una variable solamente los que tengan la misma categoria
      consult = query(itemCollection, where("category", "==", categoryName));
    } else {
      //si no existe categoryName, se hara una consulta a la colección completa
      consult = itemCollection;
    }
    //se usa el método getDocs para traer los documentos de la base de datos
    getDocs(consult)
      .then((res) => {
        let products = res.docs.map((element) => {
          //retorno un objeto con el id y las demas propiedes del producto
          return {
            id: element.id,
            ...element.data(),
          };
        });
        //guardo estos productos en la estado items
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  const CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  //si el array de items esta vacio voy a usar un loader
  if (items.length === 0) {
    return (
      <RingLoader color="#36d7b7" size={180} cssOverride={CSSProperties} />
    );
  }
  //si el array de items no esta vacio se mapeara los productos para mostrarlos uno por uno
  return (
    <>
      <div className="flex">
        {items.map((el) => {
          return <ProductCardPresentational el={el} key={el.id} />;
        })}
      </div>
    </>
  );
};
