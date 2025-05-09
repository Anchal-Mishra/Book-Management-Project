import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
function Header() {
  const cartItem=useSelector((store)=>{store.cart.items})
  console.log(cartItem);
  
  return (
    <div className="flex py-3 justify-between w-full px-20 items-center bg-blue-950">
      <h1 className="text-4xl font-bold text-orange-600"><Link to="/">𝕞𝕪𝔼𝕓𝕠𝕠𝕜𝕤</Link></h1>
      <ul itemType="none" className="flex gap-4 font-bold uppercase text-white">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/cart" className="text-orange-600"><li>🛒Cart</li></Link>
        <span>{cartItem}</span>
      </ul>

    </div>
  )
}

export default Header
