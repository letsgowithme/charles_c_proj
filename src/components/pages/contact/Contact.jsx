import React from "react";
import Header from "../../header/Header";

import "./contact.css";
import Footer from "../../footer/Footer";
import ContactForm from "../../ContactForm/ContactForm";
import Contact_bg from "../../../assets/pages_bg.png";

const Contact = () => {
  return (
    <div className="contact-page-container">
    <h1 className="contact-pages-title">Contact</h1>
      <div>
        <img
          src={Contact_bg}
          alt="abstrait"
          className="pages-bg"
          style={{ minHeight: "100%", opacity: "0.6" }}
        />
      </div>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
