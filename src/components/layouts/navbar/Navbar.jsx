import { CartWidget } from "../../common/CartWidget/CartWidget";
import logo from "./assets/NicoComputacion.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="text-center" style={{ backgroundColor: "steelblue" }}>
          <div className="row">
            <div className="col-2">
              <Link to="/">
                <img style={{ width: "100px" }} src={logo} alt="" />
              </Link>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-around pt-2">
                {/* Al link que me dirigo a Todos le pongo la dirección raiz */}
                <Link to="/">
                  <button className="btn btn-primary">Todos</button>
                </Link>
                {/* Los siguientes links son rutas dinamicas que me limitaran los items resultantes */}
                <Link to="category/Mac">
                  <button className="btn btn-primary">Mac</button>
                </Link>
                <Link to="category/Oficina">
                  <button className="btn btn-primary">Oficina</button>
                </Link>
                <Link to="category/Diseño">
                  <button className="btn btn-primary">Diseño</button>
                </Link>
                <div>
                  <Link to="/cart">
                    <CartWidget></CartWidget>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
