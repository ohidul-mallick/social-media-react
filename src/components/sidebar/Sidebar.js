import React from "react";
import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
function Sidebar() {
  return (
    <div className="left__sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebarList__item">
            <RssFeed className="sidebar__icon" />
            <span className="sidebarListItem__text">Feed</span>
          </li>
          <li className="sidebarList__item">
            <Chat className="sidebar__icon" />
            <span className="sidebarListItem__text">Chats</span>
          </li>
          <li className="sidebarList__item">
            <PlayCircleFilledOutlined className="sidebar__icon" />
            <span className="sidebarListItem__text">Videos</span>
          </li>
          <li className="sidebarList__item">
            <Group className="sidebar__icon" />
            <span className="sidebarListItem__text">Groups</span>
          </li>
          <li className="sidebarList__item">
            <Bookmark className="sidebar__icon" />
            <span className="sidebarListItem__text">Bookmarks</span>
          </li>
          <li className="sidebarList__item">
            <HelpOutline className="sidebar__icon" />
            <span className="sidebarListItem__text">Questions</span>
          </li>
          <li className="sidebarList__item">
            <WorkOutline className="sidebar__icon" />
            <span className="sidebarListItem__text">Jobs</span>
          </li>
          <li className="sidebarList__item">
            <Event className="sidebar__icon" />
            <span className="sidebarListItem__text">Events</span>
          </li>
          <li className="sidebarList__item">
            <School className="sidebar__icon" />
            <span className="sidebarListItem__text">Courses</span>
          </li>
        </ul>
        <button className="sidebar__button">Show More...</button>
        <hr className="sidebar__hr" />
        <ul className="sidebar__friendList">
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebar__friendImg"
            />
            <span className="sidebar__friendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
