import React from "react";
import "./image.css";
import WeddingSlider from "./WeddingSlider";
import { WeddingSliderData } from "./WeddingSliderData";

class WeddingCategory extends React.Component {
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
            Mariage
          </button>
          <button
            className="btn btn_mobile"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Mariage
          </button>

          <div
            className="cat-position">
            {this.state.show ? (
              <WeddingSlider slides={WeddingSliderData} />
            ) : null}
            
          </div>
        </div>
      </>
    );
  }
}

export default WeddingCategory;
