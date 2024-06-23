import React, { FC, ReactElement, useState } from "react";
import "../components/styles/Header.css"; // Import CSS khusus untuk styling header

const Header: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="header-container"
      style={{
        backgroundColor: "#D6D1CE",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container">
        <div className="header-content">
          <div className="brand">
            <h1 style={{ color: "black", fontFamily: "fantasy" }}>Ribka Tailor</h1>
          </div>
          <div className="menu-toggle">
            <button className="navbar-toggler" onClick={toggleNavbar}>
              <span className="navbar-toggler-icon">☰</span>
            </button>
          </div>
          <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#tentang">Tentang</a>
              </li>
              <li>
                <a href="#layanan">Layanan</a>
              </li>
              <li>
                <a href="#galeri">Galeri</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
