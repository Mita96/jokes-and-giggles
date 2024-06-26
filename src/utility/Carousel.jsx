import React from "react";
import "./carousel.css";
function Carousel({ index, jokes }) {
  return (
    <div className="wrapper">
      <img className="image-content" src={jokes[index].src} alt="something" />
    </div>
  );
}

export default Carousel;
