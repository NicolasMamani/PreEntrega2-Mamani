const Checkout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={errors.name ? "form-control is-invalid" : "form-control"}
            name="name"
            onChange={handleChange}
          />
          <label>Nombre</label>
          {/* Acá empieza a variar  <div className="invalid-feedback">Please choose a username.</div>*/}
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          {/* Acá empieza a variar */}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={
              errors.email ? "form-control is-invalid" : "form-control"
            }
            id="floatingInput"
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Email</label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={
              errors.phone ? "form-control is-invalid" : "form-control"
            }
            name="phone"
            onChange={handleChange}
          />
          <label>Numero</label>
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
