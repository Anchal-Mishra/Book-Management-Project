import {Link} from "react-router-dom"
function Header() {
  return (
    <div className="flex bg-blue-500 py-4">
        <ul itemType="none" className="flex gap-4 justify-center w-screen">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
      
    </div>
  )
}

export default Header
