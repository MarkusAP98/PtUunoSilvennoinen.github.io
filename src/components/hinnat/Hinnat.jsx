import React from "react";
import "./hinnat.css";

const Hinnat = () => {
  return (
    <div className="hinnat__section" id="palvellut">
      <h1>Palvelut</h1>
      <div className="hinnat__section-info">
        <div className="hinnat__section-info-div">
          <h3>Treeniohjelma</h3>
          <h4>59€</h4>
          <p>
            Treeniohjelmat räätälöin siun tavoitteitasi tukeviksi ja arkeesi
            sopiviksi. Saat ohjelman sportyplanner sovelluksessa, joka tekee
            sarjapainojen ja kehityksen seuraamisesta helppoa. Sovellus sisältää
            myös tekniikka videot jokaiselle liikkeelle.
          </p>
        </div>
        <div className="hinnat__section-info-div">
          <h3>Ruokavalio</h3>
          <h4>59€</h4>
          <p>
            Ruokavaliot suunnittelen siun tavoitteiden ja mieltymysten pohjalta
            Erityisruokavaliot huomioon ottaen. Voit syödä siun lempiruokia!
            Tehdään niistä vain tavoitteitasi tukevia tarvittaessa pienillä
            muutoksilla. Sisältää Ruokapäiväkirjan läpikäynnin.
          </p>
        </div>
        <div className="hinnat__section-info-div">
          <h3>Treenitapaaminen 1h</h3>
          <h4>69€</h4>
          <p>
            Treenitapaamisissa opettelemme liiketekniikat kuntoon ja autan sinua
            ylittämään rajojasi, Sekä saamaan kaiken irti treenistä!
            Treenitapaamiset Combat heaven, Ptvgym ja Easyfit joensuu (Easyfit salin
            omilla hinnoilla)
          </p>
        </div>
        <div className="hinnat__section-info-div">
          <h3>Valmennus</h3>
          <h4>149€ kk</h4>
          <p>
            Kokonaisvaltaiseen Valmennukseen kuuluu
            -Päivittyvät treeniohjelmat -Ravintovalmennus -Yhdessä Tavoitteiden
            asettaminen -Seuraan etenemistäsi ja motivoin sinua saavuttamaan
            tavoitteesi -Valmentajan tuki ja puhelinyhteys -Treenitapaamiset ja
            liiketekniikoiden opettelu - Valmennuksen lopullinen hinta riippuu millainen
            paketti sinulle rakennetaan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hinnat;
