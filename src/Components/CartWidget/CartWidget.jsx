import { RiShoppingCartLine } from 'react-icons/ri'

const CartWidget = () => {
  return (
    <div className='right'>
        <a href="#"> <RiShoppingCartLine /> </a>
    <div>
        <span>0</span>
    </div>
    </div>
  )
}

export default CartWidget