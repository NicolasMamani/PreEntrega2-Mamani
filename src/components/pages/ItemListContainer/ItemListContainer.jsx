import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import ProductCardPresentational from "../../common/productCard/ProductCardPresentational";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    //en una nueva variable filtro los productos con la categoria de useParams
    let productosFiltrados = products.filter(
      (e) => e.category === categoryName
    );
    //Hago uso del operador ternario para condicionar si se va a filtar o no los productos
    const datosObtenidos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 0);
    });
    datosObtenidos.then((res) => setItems(res));
  }, [categoryName]);

  const CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  if (items.length === 0) {
    return (
      <RingLoader color="#36d7b7" size={180} cssOverride={CSSProperties} />
    );
  }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-around mt-2">
        {items.map((el) => {
          return <ProductCardPresentational el={el} key={el.id} />;
        })}
      </div>
    </>
  );
};
