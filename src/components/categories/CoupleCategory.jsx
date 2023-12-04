import React from "react";
import "./image.css";
import CoupleSlider from "./CoupleSlider";
import { CoupleSliderData } from "./CoupleSliderData";

class CoupleCategory extends React.Component {
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
            Couple
          </button>
          <button
            className="btn btn_mobile"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Couple
          </button>
          <div
            className="cat-position"
          >
            {this.state.show ? (
              <CoupleSlider slides={CoupleSliderData} />
            ) : null}
           
          </div>
        </div>
      </>
    );
  }
}

export default CoupleCategory;
