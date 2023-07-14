import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { database } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutContainer = () => {
  //Consumimos el cart del contexto
  let { cart, getTotalPrice, deleteCart } = useContext(CartContext);
  let totalPrice = getTotalPrice();

  //Hacemos uso del hook useState para que guarde el id
  let [orderId, setOrderId] = useState(null);

  //Hacemos uso de use formik
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      //creo una variable para la orden
      let order = {
        buyer: data,
        items: cart,
        total: totalPrice,
      };
      //guardo en una variable la referencia a una colección dentro de mi base de datos
      let orderCollection = collection(database, "orders");
      addDoc(orderCollection, order).then((res) => setOrderId(res.id));

      //actualizo el stock del o de los productos vendidos
      cart.map((product) => {
        updateDoc(doc(database, "products", product.id), {
          stock: product.stock - product.quatity,
        });
      });

      //limpio el carrito
      deleteCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("el campo es requerido")
        .min(3, "El campo es mínimo de 3"),
      email: Yup.string()
        .email("El email no es correcto")
        .required("el campo es requerido"),
      phone: Yup.string()
        .required("el campo es requerido")
        .min(9, "el número tiene que tener como mínimo 9 dígitos "),
    }),
  });

  return (
    <>
      {/* Se usa un renderizado condicional para cuando todavia no se genero el id de la orden, por lo que se mostrara el formulario */}
      {!orderId ? (
        <Checkout
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      ) : (
        <h2>Compra exitosa, su nro de compra es: {orderId}</h2>
      )}
    </>
  );
};

export default CheckoutContainer;
