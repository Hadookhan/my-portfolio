// components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Hadi Khan</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
