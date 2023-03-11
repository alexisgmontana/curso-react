
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad)=>{
    console.log(`se agrego al carrito ${cantidad} productos `)
  }

  return (
    <div style={{ maxHeight:"80vh" }}>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="" style={{ maxHeight:"40vh" }}/>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
