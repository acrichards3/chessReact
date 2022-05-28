import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PAGES from './PAGES';
import './sidebar.css';

export default function Sidebar() {
  const [active, setActive] = useState(0);

  return (
    <div className="col-xl-2">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <ul className="sidebarList">
              {PAGES.map((tab) => {
                if (tab.above) {
                  if (tab.category === 'Information') {
                    return (
                      <div>
                        <h3 className="sidebarTitle">{tab.category}</h3>
                        <br />
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <br />
                        <h3 className="sidebarTitle">{tab.category}</h3>
                        <br />
                      </div>
                    );
                  }
                }
                return (
                  <Link to={tab.link} style={{ textDecoration: 'none', color: 'white' }}>
                    <li
                      className={
                        active === tab.id
                          ? 'active sidebarListItem'
                          : 'inactive sidebarListItem'
                      }
                      onClick={() => setActive(tab.id)}
                      key={tab.id}
                    >
                      {tab.icon}
                      {tab.page}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
