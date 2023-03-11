
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
            <li><Link to="/category/snapback"><a href="#">Tipo Snapback</a></Link></ li>
            <li><Link to="/category/trucker"><a href="#">Tipo Trucker</a></Link></ li>
            <li><Link to="/"><a href="#">Donde entontrarnos</a></Link></ li>
          </ul>
            <CartWidget />
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Navbar