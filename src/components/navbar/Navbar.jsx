import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100px", height: "50px", zIndex: "5" }}
            className="inline-logo"
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times icon1" : "fas fa-bars icon2"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-links.active" : "nav-links.inactive"
              }
              onClick={closeMobileMenu}
            >
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className={click ? "nav-links clicked2" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Galerie
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pricesServices"
              className={click ? "nav-links clicked2" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Tarifs et prestation
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={click ? "nav-links clicked2" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
