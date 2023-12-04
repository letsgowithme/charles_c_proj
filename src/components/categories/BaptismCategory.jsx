import React from "react";
import "./image.css";
import BaptismSlider from "./BaptismSlider";
import { BaptismSliderData } from "./BaptismSliderData";

class BaptismCategory extends React.Component {
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
            Batême
          </button>
          <button
            className="btn btn_mobile"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Batême
          </button>
          <div className="cat-position">
            {this.state.show ? (
              <BaptismSlider slides={BaptismSliderData} />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default BaptismCategory;
