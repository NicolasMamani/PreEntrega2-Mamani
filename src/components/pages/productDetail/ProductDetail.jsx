import ItemCount from "../../common/ItemCount/ItemCount";

const ProductDetail = ({ productSelected, addToCart, cantidad }) => {
  // Creo una función para agregar al carrito
  const onAdd = (cantidad) => {
    //creo una variable que contendra todo lo del producto, pero con la cantidad seleccionada
    let data = { ...productSelected, quatity: cantidad };
    addToCart(data);
  };
  return (
    <div>
      <div>
        {productSelected ? (
          <div>
            {/* Hago el diseño de una tarjeta */}
            <div
              className="card w-25 rounded border-black m-2 p-2"
              style={{ minWidth: "200px" }}
            >
              <h5>{productSelected.title}</h5>
              <img src={productSelected.img} />
              {/* Hago un renderizado condicional para mostrar o no el ItemCount */}
              {productSelected.stock > 0 ? (
                <ItemCount
                  stock={productSelected.stock}
                  initial={cantidad}
                  onAdd={onAdd}
                />
              ) : (
                <h3>Cargando objeto...</h3>
              )}
            </div>
          </div>
        ) : (
          <h1>No hay stock</h1>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
