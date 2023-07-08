import { useCount } from "../../hooks/useCount";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  //Llamo al customHook useCount y uso la desestructuración para obtener el retorno de este custom hook
  const { count, increment, decrement } = useCount(initial, stock);

  return (
    <>
      <div className="d-flex gap-5 mb-2 px-5">
        <button
          onClick={increment}
          className="btn btn-primary"
          style={{ width: "100pxs" }}
        >
          +
        </button>
        <button onClick={decrement} className="btn btn-primary">
          -
        </button>
        <span className="border rounded w-25 text-center">{count}</span>
      </div>

      <button
        className="btn"
        style={{ background: "#7d3c98", color: "white" }}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
