import React from "react";
import "./Rightbar.css";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        <div className="birthday__container">
          <img src="assets/gift.png" className="birthday__img" alt="" />
          <span className="birthday__text">
            <b>Sarah Tancradi</b> and <b>3 others friends</b> have birthday
            today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbar__ad" />
        <h4 className="rightbar__title">Online Friends</h4>
      </div>
    </div>
  );
}

export default Rightbar;
