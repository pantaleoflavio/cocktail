import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import useTitle from "../useTitle";
const ContactScreen = () => {
  useTitle('Contattace');
  return <>
    <Hero img={backImage} disableOverlay>
      <div className="contact-hero container">
        <div className="contact-hero-text">
          <div className="contact-hero-title">
            <h3 className="contact-title">
              Vorresti Aggiungere un Cocktail?
            </h3>
            <h4 className="contact-subtitle">
            Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle alla nostro database
            </h4>
          </div>
        </div>
        <div className="contact-form-container container">
          <form
          action="https://formspree.io/f/myyqljod"
          method="POST"
          className="contact-form-container container">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="input"
                placeholder="Tizio"
                
              >
              </input>
            </div>
            <hr />

            <div className="form-group">
              <label htmlFor="nome">cognome</label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                className="input"
                placeholder="Caio"
                
              >
              </input>
            </div>
            <hr />

            <div className="form-group">
              <label htmlFor="nome">email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="tizio@caio.it"
                
              >
              </input>
            </div>
            <hr />

            <div className="form-group">
              <label htmlFor="nome">cellulare</label>
              <input
                type="tel"
                id="cellulare"
                name="cellulare"
                className="input"
                placeholder="1111111111"
                
              >
              </input>
            </div>
            <hr />

            <div className="form-group">
              <label htmlFor="nome">la tua ricetta</label>
              <input
                type="text"
                id="ricetta"
                name="ricetta"
                className="input"
                placeholder="scrivi la tua ricetta"
                
              >
              </input>
            </div>
            <button type="submit" className="ctn btn-primary">Invia Ricetta</button>
          </form>
        </div>
      </div>
    </Hero>
  </>;
};

export default ContactScreen;
