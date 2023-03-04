
import CartWidget from "../CartWidget/CartWidget"
import 'materialize-css/dist/css/materialize.min.css'

const Navbar = ({children}) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            LOGO
          </a>
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