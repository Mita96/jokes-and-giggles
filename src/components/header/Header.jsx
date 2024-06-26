import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header className="header-component">
      <nav className="nav-header-component">
        <div>
          <Link to="/jokes">JOKES</Link>
        </div>
        <div>
          <Link to="/quotes">QUOTES</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
