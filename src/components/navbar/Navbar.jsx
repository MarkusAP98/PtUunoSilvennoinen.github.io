import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#palvellut">Palvelut</a>
        </li>
        <li>
          <a href="#valmentajasi">Valmentajasi</a>
        </li>
        <li>
          <a href="#yhteistietto">Yhteystiedot</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
