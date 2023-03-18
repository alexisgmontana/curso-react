import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="right">
      <a href="#">
        {" "}
        <RiShoppingCartLine
          style={{
            fontSize: "2rem",
            color: "aqua",
            margin: "1rem",
          }}
        />{" "}
      </a>
      <span style={{ fontWeight: "bold" }}>0</span>
    </Link>
  );
};

export default CartWidget;
