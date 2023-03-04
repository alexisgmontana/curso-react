
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import { RiH1 } from "react-icons/ri";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element= { <ItemListContainer /> } />
        <Route path="/login" element= { <Login /> } />

        <Route path="*" element= { <h1> error 404: Not found </h1> } />

      </Routes>
    </BrowserRouter>    
  );
}

export default App;