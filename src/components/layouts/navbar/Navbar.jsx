//No importa que la url tenga bs en miniscula
/* import { Box, Button, Grid } from "@mui/material"; */
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
                <button className="btn btn-primary">Gamer</button>
                <button className="btn btn-primary">Mac</button>
                <button className="btn btn-primary">Oficina</button>
                <button className="btn btn-primary">Diseño</button>
                <div>
                  <CartWidget></CartWidget>
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
