import React from "react";
import "./pricesServices.css";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import PricesServices_bg from "../../../assets/pages_bg.png";
import PricesServicesCards from "./PricesServicesCards";
import { FaArrowCircleUp } from "react-icons/fa";

const PricesServices = () => {
  return (
    <div className="prices_services_page-container">
      <div>
        <img
          src={PricesServices_bg}
          alt="abstrait"
          className="pages-bg"
          style={{ minHeight: "100%", opacity: "0.6" }}
        />
      </div>
      <Header />
      <h1 className="page-title prices-page-title" id="upPage">
        Tarifs et prestations :
      </h1>
      <PricesServicesCards />

      <a href="#upPage">
        <FaArrowCircleUp className="up" />
      </a>
      <div id="prices-footer">
        <Footer />
      </div>
    </div>
  );
};

export default PricesServices;
