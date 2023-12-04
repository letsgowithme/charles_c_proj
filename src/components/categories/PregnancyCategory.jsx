import React from "react";
import "./image.css";
import PregnancySlider from "./PregnancySlider";
import { PregnancySliderData } from "./PregnancySliderData";

class PregnancyCategory extends React.Component {
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
            Grossesse
          </button>
          <button
            className="btn btn_mobile"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Grossesse
          </button>
          <div className="cat-position">
            {this.state.show ? (
              <PregnancySlider slides={PregnancySliderData} />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default PregnancyCategory;
