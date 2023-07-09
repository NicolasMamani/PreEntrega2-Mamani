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
    let itemCollection = collection(database, "products");
    let consult;
    if (categoryName) {
      //hago una query donde voy a guardar en una variable solamente los que tengan la misma categoria
      consult = query(itemCollection, where("category", "==", categoryName));
    } else {
      consult = itemCollection;
    }
    getDocs(consult)
      .then((res) => {
        let products = res.docs.map((element) => {
          return {
            id: element.id,
            ...element.data(),
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
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
