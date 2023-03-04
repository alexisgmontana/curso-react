
import ConsumiendoApi from "./Components/ConsumiendoApi/ConsumiendoApi";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import pruebasHook from "./Components/pruebasHook/pruebasHook";

function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer greeting={"Cliente"} />
        <ConsumiendoApi />
      </Navbar>
    </div>
  );
}

export default App;