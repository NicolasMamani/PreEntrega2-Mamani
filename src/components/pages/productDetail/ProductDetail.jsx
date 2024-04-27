import Swal from 'sweetalert2';
import ItemCount from '../../common/ItemCount/ItemCount';
import { RingLoader } from 'react-spinners';

const ProductDetail = ({ productSelected, addToCart, cantidad }) => {
    // Creo una función para usar el método addToCart con la libreria de sweet alert 2
    const onAdd = (cantidad) => {
        //creo una variable que contendra todo lo del producto, pero con la cantidad seleccionada
        let data = { ...productSelected, quatity: cantidad };
        addToCart(data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado correctamente',
            showConfirmButton: false,
            timer: 1500,
        });
    };
    const CSSProperties = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red',
    };

    return (
        <div>
            <div>
                {/* Hago un renderizado condicional que me muestre el producto o un loader */}
                {productSelected?.title ? (
                    <div>
                        {/* Hago el diseño de una tarjeta */}
                        <div>
                            <div className="text-center">
                                <h5 className="text-3xl w-full rounded-lg p-4 bg-purple-300">
                                    {productSelected.title}
                                </h5>
                            </div>
                            <div className="flex">
                                <img src={productSelected.img} />
                                <div>
                                    <div className="my-16">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Minima, quidem atque
                                        commodi expedita debitis, aspernatur
                                        omnis reiciendis at aliquid rerum maxime
                                        libero? Explicabo doloribus illo culpa
                                        beatae. Est, corrupti odio. Lorem ipsum
                                        dolor, sit amet consectetur adipisicing
                                        elit. Tempore similique exercitationem,
                                        ut inventore molestiae perferendis saepe
                                        debitis accusamus quod obcaecati sed
                                        porro pariatur beatae, est nostrum,
                                        quaerat voluptatibus optio quasi?
                                    </div>
                                    <p className="text-3xl text-center">
                                        Precio : ${productSelected.price}
                                    </p>
                                    {/* Hago un renderizado condicional para mostrar o no el ItemCount */}
                                    {productSelected.stock > 0 ? (
                                        <ItemCount
                                            stock={productSelected.stock}
                                            initial={cantidad}
                                            onAdd={onAdd}
                                            productSelected={productSelected}
                                        />
                                    ) : (
                                        <h1>No hay stock</h1>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <RingLoader
                        color="#36d7b7"
                        size={180}
                        cssOverride={CSSProperties}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
