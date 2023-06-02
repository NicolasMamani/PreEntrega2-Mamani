import { products } from "../../../productsMock";
import ProductCardPresentational from "../../common/productCard/ProductCardPresentational";
export const ItemListContainer = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around mt-2">
        {products.map((el) => {
          return <ProductCardPresentational el={el} key={el.id} />;
        })}
      </div>
    </>
  );
};
