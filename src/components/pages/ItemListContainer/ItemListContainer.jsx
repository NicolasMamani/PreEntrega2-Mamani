import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import ProductCardPresentational from "../../common/productCard/ProductCardPresentational";
import { useEffect, useState } from "react";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    //en una nueva variable filtro los productos con la categoria de useParams
    let productosFiltrados = products.filter(
      (e) => e.category === categoryName
    );
    //Hago uso del operador ternario para condicionar si se va a filtar o no los productos
    const datosObtenidos = new Promise((resolve) =>
      resolve(categoryName ? productosFiltrados : products)
    );
    datosObtenidos.then((res) => setItems(res));
  }, [categoryName]);

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
