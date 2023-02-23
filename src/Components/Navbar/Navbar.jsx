
import CartWidget from "../CartWidget/CartWidget"
import 'materialize-css/dist/css/materialize.min.css'

const Navbar = () => {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Tipo Snapback</a></li>
        <li><a href="#">Tipo Trucker</a></li>
        <li><a href="#">Donde entontrarnos</a></li>
      </ul>
    </div>
  </nav>
    // <div>
    //     <div>
    //         <CartWidget />
    //     </div>
    //     <div>
    //         <h2>Navbar</h2>
    //     </div>        
    // </div>
  )
}

export default Navbar