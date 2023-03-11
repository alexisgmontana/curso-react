
import CartWidget from "../CartWidget/CartWidget"
import "materialize-css/dist/css/materialize.min.css"
import { Link } from "react-router-dom"

const Navbar = ({children}) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" href="#" className="brand-logo center">
            LOGO
          </Link>
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li><a href="#">Tipo Snapback</a></li>
            <li><a href="#">Tipo Trucker</a></li>
            <li><a href="#">Donde entontrarnos</a></li>
          </ul>
            <CartWidget />
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Navbar