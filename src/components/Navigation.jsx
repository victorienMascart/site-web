import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import logoNoBrown from '../assets/logo-no-brown.png'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoNoBrown} alt="Maison Ribiera" className="logo-img" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/boulangerie" 
              className={`nav-link ${isActive('/boulangerie') ? 'active' : ''}`}
            >
              Boulangerie
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/snacking" 
              className={`nav-link ${isActive('/snacking') ? 'active' : ''}`}
            >
              Snackings
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
