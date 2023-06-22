import React from 'react'
import './header.css'
import header from "../../assets/IMG_20220131_175524_472.jpg";

const Header = () => {
  return (
    <div className="section">
      <img className='about__header-img'
        src={header}
        alt="Header"
        srcset=""
      />
      <h1>Rakenna Unelma Kehosi</h1>
      <button><a href='#palvellut'>Hanki Lihakset</a></button>
    </div>
  );
}

export default Header