import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./components/pages/productDetail/productDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<ItemListContainer />} />
              {/* Hago una ruta dinamica según el nombre de una categoria */}
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              {/* Hago uso de una ruta dinamica para el item segun su id */}
              <Route
                path="/itemDetail/:id"
                element={<ProductDetailContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              {/* A todas las direcciones que no sean las anteriores las dirigo a un Erro 404 */}
              <Route path="*" element={<h3>Error 404</h3>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
