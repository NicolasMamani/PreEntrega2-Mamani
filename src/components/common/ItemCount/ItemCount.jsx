import { useCount } from '../../hooks/useCount';

const ItemCount = ({ stock, initial = 1, onAdd, productSelected }) => {
    //Llamo al customHook useCount y uso la desestructuración para obtener el retorno de este custom hook
    const { count, increment, decrement } = useCount(initial, stock);
    let total = productSelected.price * count;

    return (
        <>
            <p className="text-3xl text-center">Precio total : ${total}</p>
            <div className="flex justify-evenly mb-5">
                <button
                    onClick={increment}
                    className="border rounded-full p-2"
                    style={{ background: '#7d3c98', color: 'white' }}
                >
                    +
                </button>
                <button
                    onClick={decrement}
                    className="border rounded-full p-2"
                    style={{ background: '#7d3c98', color: 'white' }}
                >
                    -
                </button>
                <div
                    className="border rounded-full p-2"
                    style={{ background: '#7d3c98', color: 'white' }}
                >
                    {count}
                </div>
            </div>
            <div className="text-center">
                <button
                    className="bg-slate-50 hover:bg-purple-500 hover:text-xl text-black font-bold py-2 px-4 rounded"
                    style={{ background: '#7d3c98', color: 'white' }}
                    onClick={() => onAdd(count)}
                >
                    Agregar al carrito
                </button>
            </div>
        </>
    );
};

export default ItemCount;
