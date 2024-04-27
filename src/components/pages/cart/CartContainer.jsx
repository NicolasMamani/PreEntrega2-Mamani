import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const CartContainer = () => {
    //consumo el contexto cart de CartContext
    const { cart, deleteCart, deleteElement, getTotalPrice } =
        useContext(CartContext);

    //Llamada a función getTotalPrice
    let totalPrice = getTotalPrice();

    //creo una función que ejecute deleteCart, pero que lo hago junto a sweet alert 2
    const clearCart = () => {
        Swal.fire({
            title: '¿Quieres limpiar el carrito?',
            showDenyButton: true,
            confirmButtonText: 'Si, limpiar el carrito',
            denyButtonText: `No, cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCart();
                Swal.fire('Carrito Vaciado!', '', 'success');
            } else if (result.isDenied) {
                Swal.fire('No se vacio el carrito', '', 'info');
            }
        });
    };

    return (
        <div className="p-2">
            <h2 className="text-center text-2xl font-bold">
                Total Pedido : ${totalPrice}
            </h2>
            {/* Hago un renderizado condicional para el caso donde no haya items, los botones no se muestren */}
            {cart.length > 0 && (
                <div className="text-center mb-3">
                    <button
                        onClick={clearCart}
                        className="bg-slate-50 hover:bg-purple-500 hover:text-xl text-black font-bold py-2 px-4 rounded"
                    >
                        Limpiar carrito
                    </button>
                    <Link to="/checkout">
                        <button className="bg-slate-50 hover:bg-purple-500 hover:text-xl text-black font-bold py-2 px-4 rounded">
                            Finalizar compra
                        </button>
                    </Link>
                </div>
            )}
            {/* renderizo los productos de cart */}
            {cart.map((product) => (
                <div key={product.id} className="mb-2 p-2 row flex">
                    <div className="mt-3 pt-5">
                        <h2 className="text-center text-2xl">
                            Modelo : {product.title}
                        </h2>
                        <h3 className="text-center text-2xl">
                            Precio Unitario: ${product.price}
                        </h3>
                        <h3 className="text-center text-2xl">
                            Precio total: ${product.price * product.quatity}
                        </h3>
                        <h3 className="text-center text-2xl">
                            Cantidad : {product.quatity}
                        </h3>
                        <div className="text-center">
                            <button
                                className="text-center text-2xl hover:bg-purple-500 hover:text-xl text-black font-bold py-2 px-4 rounded"
                                onClick={() => deleteElement(product.id)}
                            >
                                Eliminar producto
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={product.img} alt={product.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContainer;
