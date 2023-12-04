import React, { useState } from "react";
import WeddingCategory from "../categories/WeddingCategory";
import PregnancyCategory from "../categories/PregnancyCategory";
import FamilyCategory from "../categories/FamilyCategory";
import BabyCategory from "../categories/BabyCategory";
import BaptismCategory from "../categories/BaptismCategory";
import CoupleCategory from "../categories/CoupleCategory";
import "./categoryNav.css";
import GalleryImages from "../pages/gallery/GalleryImages";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-title unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden2");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [gallery_class, setGalleryClass] = useState("gallery_collage visible");

  // toggle
  const updateMenu = () => { 
    if (!isMenuClicked) {
      setBurgerClass("burger-title clicked");
      setMenuClass("menu visible");
      setGalleryClass("gallery_collage hidden2");
    } else {
      setBurgerClass("burger-title unclicked");
      setMenuClass("menu hidden2");
     
      setGalleryClass("gallery_collage visible");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", marginBottom: "3em" }} className="burger-box">
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}>Categories</div>
        </div>
      </nav>
      <div className={gallery_class}>
        <GalleryImages />
      </div>
      <div className={menu_class}>
        <ul className="menu-list">
          <li>
            <WeddingCategory />
          </li>
          <li>
            <PregnancyCategory />
          </li>
          <li>
            <FamilyCategory />
          </li>
          <li>
            <BabyCategory />
          </li>
          <li>
            <BaptismCategory />
          </li>
          <li>
            <CoupleCategory />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
