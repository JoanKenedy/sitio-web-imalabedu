import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoHeader from "../images/logo-footer.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="main-navbar">
      <div className="container-menu-navbar">
        <img src={LogoHeader} alt="" className="logo-header" />

        <nav className={`menu ${isOpen ? "icon-open" : "menu"}`}>
          <div className="container-menu">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="nosotros" className="nav-link">
              Nosotros
            </Link>
            <Link to="cursos" className="nav-link">
              Cursos
            </Link>

            <div className="main-btn-navbar">
              <div className="contain-nigth">
                <i className="fa-solid fa-sun"></i>
                <i className="fa-solid fa-moon"></i>
              </div>
              <a href="" className="contact-header">
                Contacto
              </a>
            </div>
          </div>
        </nav>

        <i
          className="fa-solid fa-bars-staggered  icon-bar"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>
    </header>
  );
};

export default Navbar;
