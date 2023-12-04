import React from "react";
import "./image.css";
import FamilySlider from "./FamilySlider";
import { FamilySliderData } from "./FamilySliderData";

class FamilyCategory extends React.Component {
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
            Family
          </button>
          <button
            className="btn btn_mobile"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Family
          </button>
          <div className="cat-position">
            {this.state.show ? (
              <FamilySlider slides={FamilySliderData} />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default FamilyCategory;
