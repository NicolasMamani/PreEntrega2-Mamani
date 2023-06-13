import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./components/pages/productDetail/productDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/itemDetail" element={<ProductDetailContainer />} />
            <Route path="*" element={<h3>Error 404</h3>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar></Navbar>
      <ProductDetailContainer />
      {/* <ProductDetailContainer /> */}
      {/*  <ItemListContainer></ItemListContainer> */}
      {/*   <FetchingDatos /> */}
    </>
  );
}

export default App;
