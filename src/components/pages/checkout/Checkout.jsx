const Checkout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            /* Si el nombre tiene algun error, le agrego la clase is-invalid de boostrap */
            className={errors.name ? "form-control is-invalid" : "form-control"}
            name="name"
            onChange={handleChange}
          />
          <label>Nombre</label>
          {/* Si hay algún error en el nombre hago que aparezca un texto en color rojo con el mensaje de error */}
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            /* Si el email tiene algun error, le agrego la clase is-invalid de boostrap */
            className={
              errors.email ? "form-control is-invalid" : "form-control"
            }
            id="floatingInput"
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Email</label>
          {/* Si el mail tiene algun error, se mostraran en un texto rojos los errores */}
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            /* Si el phone tiene algun error, le agrego la clase is-invalid de boostrap */
            className={
              errors.phone ? "form-control is-invalid" : "form-control"
            }
            name="phone"
            onChange={handleChange}
          />
          <label>Numero</label>
          {/* Si el phone tiene algun error se mostrara un texto en rojo que indique los errores */}
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <button className="btn btn-success" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
