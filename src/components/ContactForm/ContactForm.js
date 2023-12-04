import React from "react";
import "./contactForm.css";

function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" method="POST" className="form" data-netlify="true" onSubmit="submit">
       
        <input type="hidden" name="form-name" value="contact" />
        <input
          id="email"
          type="email"
          name="email"
          className="form-input form-item"
          placeholder="Votre adresse e-mail"
        />

        <textarea
          id="message"
          name="message"
          className="form-t-aria form-item"
          placeholder="Saisissez votre message"
          rows="15"
          cols="33"
        />

        <button type="submit" className="form-btn form-item">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
