import React from "react";
import "./topbar.css";
import { NotificationsNone, Circle, Info } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ChessInfo</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Circle className="activityIcon" />
          </div>
          <div className="topbarIconContainer">
            <Info className="infoIcon" />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQv1sLp9YcLX02i0jWQEvcHe6UA7DWI-LLcsZMzElnqD7CIdnbqz9Vpi9vlgqfeUE5C_0&usqp=CAU"
            alt="top avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
