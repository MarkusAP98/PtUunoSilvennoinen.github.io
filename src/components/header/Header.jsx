import React from 'react'
import './header.css'
import header from "../../assets/PT-uuno.jpg";

const Header = () => {
  return (
    <div className="section">
      <img className='about__header-img'
        src={header}
        alt="Header"
        srcset=""
      />
    </div>
  );
}

export default Header