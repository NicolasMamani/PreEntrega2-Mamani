import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="Bienvenidos"></ItemListContainer>
    </>
  );
}

export default App;
