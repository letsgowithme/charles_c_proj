import React from "react";
import Header from "../../header/Header";
import "./gallery.css";
import CategoryNav from "../../categoryNav/CategoryNav";
import GalleryBg from "../../../assets/pages_bg.png";
import Footer from "../../footer/Footer";

const Gallery = () => {
  return (
    <>
      <div className="gallery-container">
        <div>
          <img
            src={GalleryBg}
            alt="abstrait"
            className="pages-bg"
            style={{ minHeight: "100%" }}
          />
        </div>
        <div>
        <Header />
        </div>
        <div>
        <CategoryNav className="category-nav" />
        </div>
        <div>
        <Footer />
        </div>
        
      </div>
    </>
  );
};

export default Gallery;
