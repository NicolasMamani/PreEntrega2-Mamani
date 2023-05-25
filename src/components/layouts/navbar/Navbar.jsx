//No importa que la url tenga bs en miniscula
import { Box, Button, Grid } from "@mui/material";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import logo from "./assets/NicoComputacion.png";
export const Navbar = () => {
  return (
    <nav>
      <Box sx={{ background: "steelblue", height: "12vh" }}>
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
      </Box>
    </nav>
  );
};
