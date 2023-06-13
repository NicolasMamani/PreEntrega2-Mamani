import { useCount } from "../../hooks/useCount";

const ItemCount = ({ stock, initial, onAdd }) => {
  //Llamo al customHook useCount
  const { count, increment, decrement } = useCount(initial, stock);

  return (
    <>
      <div className="count-container d-flex gap-3">
        <button onClick={increment} className="btn btn-primary">
          +
        </button>
        <button onClick={decrement} className="btn btn-primary">
          -
        </button>
        <span className="border rounded w-25 text-center">{count}</span>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
