import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("el campo es requerido")
        .min(3, "El campo es mínimo de 3"),
      email: Yup.string().required("el campo es requerido"),
      phone: Yup.string().required(),
    }),
  });

  console.log(errors);

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
