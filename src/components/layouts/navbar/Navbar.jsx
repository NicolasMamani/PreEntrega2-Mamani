//No importa que la url tenga bs en miniscula
/* import { Box, Button, Grid } from "@mui/material"; */
import { CartWidget } from "../../common/CartWidget/CartWidget";
import logo from "./assets/NicoComputacion.png";
export const Navbar = () => {
  return (
    <nav>
      <div className="text-center" style={{ backgroundColor: "steelblue" }}>
        <div className="row">
          <div className="col-2">
            {" "}
            <img style={{ width: "100px" }} src={logo} alt="" />
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
      {/*  <Box sx={{ background: "steelblue", height: "12vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img style={{ width: "100px" }} src={logo} alt="" />
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              spacing={10}
              sx={{ marginLeft: "50px", paddingTop: "10px" }}
            >
              <Grid item>
                <Button variant="contained" color="warning">
                  Gamer
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="warning">
                  Mac
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="warning">
                  Oficina
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="warning">
                  Diseño
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <div>
              <CartWidget></CartWidget>
            </div>
          </Grid>
        </Grid>
      </Box> */}
    </nav>
  );
};
