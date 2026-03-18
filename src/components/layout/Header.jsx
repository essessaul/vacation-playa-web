import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../common/ui";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../assets/logo.png";

export default function Header() {
  const { language, setLanguage } = useLanguage();

  const navStyle = {
    textTransform: "uppercase",
    letterSpacing: ".06em",
    fontWeight: 800,
  };

  return (
    <header className="site-header">
      <div className="container site-header-inner" style={{ padding: "1rem 0" }}>
        <Link to="/" className="inline">
          <img src={logo} alt="Playa Escondida Vacation Homes" className="logo" />
        </Link>

        <nav className="nav-links">
          <NavLink to="/listings" style={navStyle}>LISTINGS</NavLink>
          <NavLink to="/for-sale" style={navStyle}>SALE / UNIDADES EN VENTA</NavLink>
          <NavLink to="/owner-services" style={navStyle}>OWNER SERVICES</NavLink>
          <NavLink to="/login" style={navStyle}>SIGN IN / SIGN UP</NavLink>
          <NavLink to="/admin" style={navStyle}>ADMIN</NavLink>
        </nav>

        <div className="header-actions">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} style={{ width: 120 }}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <Button>CONTACT</Button>
        </div>
      </div>
    </header>
  );
}
