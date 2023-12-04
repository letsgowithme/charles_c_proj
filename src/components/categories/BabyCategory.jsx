import React from "react";
import "./image.css";
import BabySlider from "./BabySlider";
import { BabySliderData } from "./BabySliderData";

class BabyCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    return (
      <>
        <div className="category-block">
          <button
            className="btn btn-category btn_md-lg"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Bébé
          </button>
          <button
            className="btn btn_mobile"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Bébé
          </button>
          <div className="cat-position">
            {this.state.show ? <BabySlider slides={BabySliderData} /> : null}
          </div>
        </div>
      </>
    );
  }
}

export default BabyCategory;
