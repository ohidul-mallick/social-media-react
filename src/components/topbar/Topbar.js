import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
function Topbar() {
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <span className="topbar__logo">Social Media</span>
      </div>
      <div className="topbar__center">
        <div className="serach__bar">
          <Search className="search__icon" />
          <input
            placeholder="Search For Friends ,post or videos"
            className="serach__input"
          />
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__links">
          <span className="topbar__link">Homepage</span>
          <span className="topbar__link">Timeline</span>
        </div>
        <div className="topbar__icons">
          <div className="topbarIcon__item">
            <Person />
            <span className="topbarIcon__badge">1</span>
          </div>
          <div className="topbarIcon__item">
            <Chat />
            <span className="topbarIcon__badge">1</span>
          </div>
          <div className="topbarIcon__item">
            <Notifications />
            <span className="topbarIcon__badge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbar__img" />
      </div>
    </div>
  );
}

export default Topbar;
