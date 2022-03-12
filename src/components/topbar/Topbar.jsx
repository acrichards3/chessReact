import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import PAGES from './PAGES';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ChessInfo</span>
        </div>
        <div className="topRight">
          {PAGES.map((tab) => {
            return (
              <Link exact to={tab.link} element={tab.icon} key={tab.id} >
                <h2 key={tab.id} title={tab.page} className="icon">{tab.icon}</h2>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
