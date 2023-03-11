import { RiShoppingCartLine } from 'react-icons/ri'

const CartWidget = () => {
  return (
    <div className='right'>
        <a href="#"> <RiShoppingCartLine style={{
          fontSize: "2rem",
          color: "aqua", 
          margin: "1rem" }}/> </a>
        <span style={{fontWeight: "bold"}}>0</span>
    </div>
  )
}

export default CartWidget