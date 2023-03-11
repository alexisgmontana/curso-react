import products from "../../productsMock"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetailContainer = () => {

  const onAdd = (cantidad) =>{
    console.log(`Se agregó al carrito ${cantidad} de productos`)
  }  

  return (
    <div>
        <ItemCount onAdd={onAdd} />
    </div>
  )
}

export default ItemDetailContainer