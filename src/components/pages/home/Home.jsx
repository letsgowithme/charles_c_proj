import React from "react";
import Header from "../../header/Header";
import MainTitle from "../../mainTitle/MainTitle";
import "./home.css";
import Photographer from "../../../assets/photographer.jpg";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <div className="home_page-container">
      <Header />
      <div className="bg_img-with-title">
        <img
          src={Photographer}
          alt="Photographer"
          className="bg-main_img"
          style={{ minHeight: "100%" }}
        />
        <MainTitle />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
