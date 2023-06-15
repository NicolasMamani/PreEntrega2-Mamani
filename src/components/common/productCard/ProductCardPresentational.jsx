import { Link } from "react-router-dom";

const ProductCardPresentational = ({ el }) => {
  return (
    <div className="card w-25 rounded border-black p-2 m-2">
      <img src={el.img} alt="zapatillas puma" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-center">{el.title}</h5>
        <br />
        <p className="card-text text-center">${el.price}</p>
        <div className="center text-center">
          <Link to={`/itemDetail/${el.id}`}>
            <button
              className="btn"
              style={{ background: "#7d3c98", color: "white" }}
            >
              Ver detalle
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPresentational;
