import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#palvellut">Palvellut</a>
        </li>
        <li>
          <a href="#valmentajasi">Valmentajasi</a>
        </li>
        <li>
          <a href="#yhteistietto">Yhteistiedot</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
