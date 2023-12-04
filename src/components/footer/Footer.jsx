import React from "react";
import { Link } from "react-router-dom";
import WebIcons from "../webIcons/WebIcons";


const Footer = () => {
  return (
    <div className="footer">
      <WebIcons className="footer-item" />
      <div className="footer-items">
        <Link to="/mentionsLegales" className="footer-item mentionsLegales">
          Mentions Legales
        </Link>
        <div className="footer-item copyright">copyright@2023 Iryna Guenin</div>
      </div>
      <div className="footer-items">
        <Link to="/policyPrivacy" className="footer-item mentionsLegales">
        Politique de confidentialité
        </Link>
    </div>
    </div>
  );
};

export default Footer;
