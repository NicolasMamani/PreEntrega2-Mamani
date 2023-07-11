const Checkout = ({ handleChange, handleSubmit }) => {
  return (
    <div style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control is-invalid"
            name="name"
            onChange={handleChange}
          />
          <label>Nombre</label>
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="phone"
            onChange={handleChange}
          />
          <label>Numero</label>
        </div>

        <button className="btn btn-success" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
