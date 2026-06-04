import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IMAGES } from "../constants/images";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <Link to="/" className="top-logo-link" onClick={closeMenu}>
            <img src={IMAGES.logo} alt="Penta Freight" className="top-logo" />
          </Link>
          <span className="top-tagline">We Deliver Goodwill</span>
        </div>
      </div>

      <div className="main-header">
        <div className="container header-inner">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
            <a href="#about">About Us</a>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="dropdown-btn"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services ▾
              </button>
              {servicesOpen && (
                <div className="dropdown-menu">
                  <a href="#air-freight" onClick={closeMenu}>
                    Air Freight
                  </a>
                  <a href="#sea-freight" onClick={closeMenu}>
                    Sea Freight
                  </a>
                  <a href="#multi-modal" onClick={closeMenu}>
                    Multi Modal Transport
                  </a>
                  <a href="#project-cargo" onClick={closeMenu}>
                    Project Cargo
                  </a>
                  <a href="#custom-broking" onClick={closeMenu}>
                    Custom Broking
                  </a>
                  <a href="#transit-warehouse" onClick={closeMenu}>
                    Transit Warehouse
                  </a>
                </div>
              )}
            </div>
            <NavLink to="/industries" onClick={closeMenu}>
              Industries
            </NavLink>
            <NavLink to="/pentakuhl" onClick={closeMenu}>
              Pentakuhl
            </NavLink>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
