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
        <p>Moro! Olen Uuno 23 personal trainer Joensuusta. Töiden lisäksi aika menee salilla ja erilaisten urheilulajien parissa. Olen entiseltä ammatiltani kokki josta ammennan tietoa ja ideoita ravintopuolelle. Ei tarvii syödä pelkkää kanaa ja riisiä kehittyäkseen! Tässä työssä palkitsevinta on kun asiakkaat löytävät liikunnan ilon, oppivat parempia elämäntapoja ja kehittyvät omia tavoitteitaan kohti! Lähdetään viemään siut kohti parasta kuntoasi! Jos tavoitteenasi on

          <ul>
            <li>- Lihasmassan kasvatus </li>
            <li>- Rasvanpoltto</li>
            <li>- Voimatasojen nostaminen </li>
            <li>- Liiketekniikoiden opettelu </li>
            <li>- Kuntosaliharrastuksen aloittaminen</li>
            <li>- Oppia syömään tavoitteitasi tukevasti ja hyvää ruokaa. </li>
            <li>- Arkijaksamisen parantaminen </li>
          </ul>
          Laita viestiä ja varaa aika maksuttomaan alkukartoitukseen!🤝
        </p>
        <h2 id="yhteistietto">Ota Yhteyttä</h2>
        <h1>👇</h1>
        <div>
          <a
            href="https://www.instagram.com/uunosilvennoinen/"
            target="_blank"
            id="ig"
          >
            <BsInstagram />
          </a>

          <br />
          <h4>tai</h4>
          <br />
          <a href="tel:358-447-396239">
            <BsFillTelephoneInboundFill /> +358 44 7396239
          </a>
        </div>
      </div>
    </div>
  );
}

export default About