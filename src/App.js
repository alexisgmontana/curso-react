
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar>
        <Footer>
        <Routes>

          <Route path="/" element= {<ItemListContainer />} />

          <Route path="/category/:categoryName" element= { <ItemListContainer />} />

          <Route path="/cart" element= { <Cart /> } />

          <Route path="/itemDetail/:id" element= { <ItemDetailContainer /> } />

          <Route path="*" element= {<h1> error 404: Not found </h1>} />

        </Routes>
        </Footer>
        </Navbar>
      </BrowserRouter>  
    </div>  
  );
}

export default App;