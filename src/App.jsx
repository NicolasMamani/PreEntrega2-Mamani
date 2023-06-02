import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import FetchingDatos from "./components/pages/fetchingDatos/fetchingDatos";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
      {/*   <FetchingDatos /> */}
    </>
  );
}

export default App;
