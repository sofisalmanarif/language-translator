
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg  bg-blue-500 py-4 px-10 flex items-center justify-between text-white mb-10"  >
        <h1 className="container-fluid ">GOLEARN</h1>
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex gap-4">
            <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
            <li><Link to="/login" className="text-white hover:text-gray-400">Login</Link></li>
          </ul>
        </div>
      </nav>
   
  )
}

export default Navbar