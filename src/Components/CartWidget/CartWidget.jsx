import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <div className="right">
      <Link to="/cart">
        <a href="">
          <RiShoppingCartLine
            style={{
              fontSize: "2rem",
              color: "aqua",
              margin: "1rem",
            }}
          />
        </a>
        <span style={{ fontWeight: "bold" }}>{total}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
