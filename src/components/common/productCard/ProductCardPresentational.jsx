import { Link } from "react-router-dom";

const ProductCardPresentational = ({ el }) => {
  return (
    <div className="p-5 b-2 text-center m-5 hover:bg-purple-300">
      <img
        src={el.img}
        alt="zapatillas puma"
      />
      <div style={{ zIndex: "2" }}>
        <h5 className="text-3xl max-w-xs rounded-lg p-4">{el.title}</h5>
        <br />
        <p>${el.price}</p>
        <div>
          <Link to={`/itemDetail/${el.id}`}>
            <button className="bg-slate-50 hover:bg-purple-500 hover:text-xl text-black font-bold py-2 px-4 rounded">
              Ver detalle
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPresentational;
