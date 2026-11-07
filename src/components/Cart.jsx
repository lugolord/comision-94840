import { Link } from 'react-router'

function Cart () {
  return (
    <div>
      <p>todo lo del carrito</p>
      <Link to='/checkout' className='btn'>ir al checkout</Link>
    </div>
  )
}

export default Cart
