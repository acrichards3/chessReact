import React from "react";
import "./sidebar.css";
import {
  Dashboard,
  Gavel,
  Info,
  LocalLibrary,
  NetworkWifi,
  Policy,
  QueryStats,
  QuestionMark,
  School,
  SignalWifi0Bar,
  SignalWifi2Bar,
  TrendingUp,
  YouTube,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Information</h3>
          <br />
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Dashboard className="sidebarIcon" />
              Dashboard
            </li>
            <li className="sidebarListItem">
              <QueryStats className="sidebarIcon" />
              In-Depth Stats
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Level & Rank
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">For Beginners</h3>
          <br />
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LocalLibrary className="sidebarIcon" />
              Principles
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              Rules of Chess
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Openings</h3>
          <br />
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <SignalWifi0Bar className="sidebarIcon" />
              Beginner
            </li>
            <li className="sidebarListItem">
              <SignalWifi2Bar className="sidebarIcon" />
              Intermediate
            </li>
            <li className="sidebarListItem">
              <NetworkWifi className="sidebarIcon" />
              Advanced
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Extras</h3>
          <br />
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <YouTube className="sidebarIcon" />
              Videos
            </li>
            <li className="sidebarListItem">
              <QuestionMark className="sidebarIcon" />
              FAQ
            </li>
          </ul>
          <li className="sidebarListItem">
            <Policy className="sidebarIcon" />
            Privacy Policy
          </li>
          <li className="sidebarListItem">
            <Gavel className="sidebarIcon" />
            Terms & Conditions
          </li>
          <li className="sidebarListItem">
            <Info className="sidebarIcon" />
            About
          </li>
        </div>
      </div>
    </div>
  );
}
