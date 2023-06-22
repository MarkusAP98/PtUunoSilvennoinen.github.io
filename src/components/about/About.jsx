import React from 'react'
import './about.css'
import image from '../../assets/IMG_20220111_224045_554.jpg'
import { BsInstagram, BsFillTelephoneInboundFill } from "react-icons/bs";



const About = () => {
  return (
    <div className="about__section" id="valmentajasi">
      <img src={image} alt="Valmentajasi" className="about__section-img" />
      <div className="about__section-info">
        <h1>Valmentajasi</h1>
        <p>
          Moi, mä oon Uuno, personal trainer -yrittäjä. Päivät kuluvat
          treenaillessa pääasiassa kuntosalilla ja muiden urheilulajien parissa.
          Koulutukseltani olen kokki ja Trainer4You - koulutettu personal
          trainer, jotka tukevat toisiaan erityisesti ravintopuolella. Ei
          tarvitse syödä pelkkää kanaa ja riisiä, jos haluaa kehittyä :) Jos sun
          tavoitteena on:
          <ul>
            <li>- Kehonmuokkaus </li>
            <li>- Voimatasojen nosto</li>
            <li>- Kuntosaliharjoittelun </li>
            <li>- aloittaminen </li>
            <li>- Rasvanpoltto</li>
            <li>- Lihasmassan kasvattaminen </li>
            <li>- Oppia syömään tavoitteitasi</li>
          </ul>
          tukevasti. Laita viestiä ja jutellaan lisää! 🤝
        </p>
        <h2 id='yhteistietto'>Ota Yhteyttä</h2>
        <h1>👇</h1>
        <div>
          <a href="https://www.instagram.com/uunosilvennoinen/"  target='_blank' id="ig">
            <BsInstagram />

          </a>
          
          <br />
          <h4>tai</h4>
          <br />
          <a>
            <BsFillTelephoneInboundFill /> +358 44 7396239
          </a>
        </div>
      </div>
    </div>
  );
}

export default About