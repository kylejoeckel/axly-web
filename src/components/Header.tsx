import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo-link">
          <img src={logo} alt="AXLY" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/privacy" className="nav-link">Privacy</Link>
          <a
            href="https://apps.apple.com/us/app/axly-pro/id6751465283"
            className="btn btn-primary nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
