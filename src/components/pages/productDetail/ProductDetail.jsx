import ItemCount from "../../common/ItemCount/ItemCount";

const ProductDetail = ({ productSelected }) => {
  // Creo una función para agregar al carrito
  const onAdd = (cantidad) => {
    let data = { ...productSelected, quatity: cantidad };
    console.log(data);
  };
  return (
    <div>
      <div>
        {productSelected ? (
          <div>
            {/* Hago el diseño de una tarjeta */}
            <div className="card w-25 rounded border-black m-2 p-2">
              <h5>{productSelected.title}</h5>
              <img src={productSelected.img} />
              {/* Uso el componente useCount */}
              {productSelected.stock > 0 ? (
                <ItemCount
                  stock={productSelected.stock}
                  initial={1}
                  onAdd={onAdd}
                />
              ) : (
                <h3>No hay stock</h3>
              )}
            </div>
          </div>
        ) : (
          <h1>Cargando objeto...</h1>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
