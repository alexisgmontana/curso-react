import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>{contador}</h2>

      <Button variant="contained" onClick={sumar}>
        {" "}
        Sumar{" "}
      </Button>

      <Button variant="contained" onClick={restar}>
        {" "}
        Restar{" "}
      </Button>

      <Button
        variant="contained"
        color="success"
        onClick={() => onAdd(contador)}
      >
        {" "}
        Agregar al carrito{" "}
      </Button>
    </div>
  );
};

export default ItemCount;
