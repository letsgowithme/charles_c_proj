import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTimesCircle } from 'react-icons/fa';

const SliderButtons = () => {
    const [current, setCurrent] = useState(0);
  const length = slides.length;

    const [slider_class, setSliderClass] = useState("slider-icon");
  const [arrowClass, setArrowClass] = useState("arrow");
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const closeSlider = () => {
    setCurrent(current === false );
    setSliderClass("slider-icon hidden");
    setArrowClass("arrow hidden") 
  
};
  return (
    <div>
        
     <div className="left-arrow">
     <FaArrowAltCircleLeft
        className={arrowClass}
        onClick={prevSlide}
        style={{ zIndex: "10" }}
      />
     </div>
    
     <div className="right-arrow">
     <FaArrowAltCircleRight
        className={arrowClass}
        onClick={nextSlide}
        style={{ zIndex: "10" }}
      />
     </div>
    
    <div className="close-icon">
    <FaTimesCircle
        className={slider_class}
        onClick={ closeSlider }
        style={{ zIndex: "10" }}
      />
    </div>
    </div>
  )
}

export default SliderButtons