import Swal from "sweetalert2";
import ItemCount from "../../common/ItemCount/ItemCount";
import { RingLoader } from "react-spinners";

const ProductDetail = ({ productSelected, addToCart, cantidad }) => {
  // Creo una función para usar el método addToCart con la libreria de sweet alert 2
  const onAdd = (cantidad) => {
    //creo una variable que contendra todo lo del producto, pero con la cantidad seleccionada
    let data = { ...productSelected, quatity: cantidad };
    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div>
      <div>
        {/* Hago un renderizado condicional que me muestre el producto o un loader */}
        {productSelected?.title ? (
          <div>
            {/* Hago el diseño de una tarjeta */}
            <div
              className="card w-25 rounded border-black m-2 p-2"
              style={{ minWidth: "200px" }}
            >
              <h5>{productSelected.title}</h5>
              <img src={productSelected.img} />
              <h5>Precio : ${productSelected.price}</h5>
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
        ) : (
          <RingLoader color="#36d7b7" size={180} cssOverride={CSSProperties} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
