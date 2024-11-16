import React from "react";
import "./about.css";
import image from "../../assets/IMG_20220111_224045_554.jpg";
import { BsInstagram, BsFillTelephoneInboundFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about__section" id="valmentajasi">
      <img src={image} alt="Valmentajasi" className="about__section-img" />
      <div className="about__section-info">
        <div>
          <h2>Toimipaikat</h2>
          <p className="p-toimi-paikat"> - Combat Heaven</p>
          <p className="p-toimi-paikat"> - PTV Gym Joensuu</p>
          <p className="p-toimi-paikat"> - EasyFit Joensuu</p>
          <p className="p-toimi-paikat"> - Joensuu lähialueet</p>
          <h2>Valmennus</h2>
          <p className="p-toimi-paikat">- Kamppailulajien oheisharjoittelu</p>
          <p className="p-toimi-paikat">- Kuntosaliharrastuksen aloittaminen</p>
          <p className="p-toimi-paikat">- Liiketekniikoiden opettelu</p>
          <p className="p-toimi-paikat">- Lihasmassan kasvatus</p>
          <p className="p-toimi-paikat">- Voimatasojen nosto</p>
          <p className="p-toimi-paikat">- Rasvanpoltto</p>
          <p className="p-toimi-paikat">- Ravintovalmennus</p>
          <p className="p-toimi-paikat">- Arkijaksamisen parantaminen</p>
        </div>
        <h2>Valmentajasi</h2>
        <div className="p-p">
          <p>Moro! Mie oon Personal trainer Uuno!</p>
          <p>
            Kahdeksan vuotta sitten tein itse elämäntapamuutoksen. Urheilusta
            muodostui äkkiä intohimo ja lopulta päätin luoda rakkaasta
            harrastuksesta ammatin kouluttautumalla Personal traineriksi.
          </p>
          <p>
            Olen toiminut Personal trainerina 3 vuotta. Valmennuksen laadun
            varmistamiseksi kehitän osaamistani aktiivisesti.
          </p>
          <p>
            Asiakaskuntaani kuuluu niin elämäntapamuutokseen tähtääviä,
            tavoitteellisesti treenaavia, kuin juuri treeniuransa aloittaneita.
            Lähtötasolla ei ole merkitystä!
          </p>
          <p>
            Entiseltä ammatiltani olen kokki. Kokin hommat jäi taka-alalle,
            mutta käteen jäi laaja tietotaito hyvästä, monipuolisesta ja
            ravitsevasta ruuasta. Hyödynnän tätä ravintovalmennuksessa.
          </p>
          <p>
            Otan jokaisen asiakkaan huomioon yksilönä ja muokkaan treeniohjelmat
            arkeen ja tavoitteisiin sopiviksi kuntotason mukaan. Työssäni
            palkitsevinta on kun asiakkaat kehittyvät kohti tavoitteitaan ja
            löytävät liikunnan ilon elämäänsä!
          </p>
          <p>
            Usein miut saattaa bongata kuntosalilta tai Combat Heavenin
            tatamilta, tuu ihmeessä nykäsee hihasta!
          </p>
        </div>
        <p className="last-p">
          Ota ensimmäinen askel kohti hyvinvointia ja varaa aika ilmaiseen
          alkukartoitukseen!
        </p>

        <h2 id="yhteistietto">Ota Yhteyttä</h2>
        <div className="icon_section">
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
          <a
            href="tel:358-447-396239"
            style={{
              fontSize: "20px",
            }}
          >
            <BsFillTelephoneInboundFill /> +358 44 7396239
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
