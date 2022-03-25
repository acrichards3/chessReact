import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import Profile from './login/Profile';
import Login from './login/Login';
import PAGES from './PAGES';
import './topbar.css';

export default function Topbar() {
  const [status, setStatus] = useState('signedOut');
  const [loginBtn, setLoginBtn] = useState('Log In');

  const getAccount = () => {
    if (status === 'signedOut') {
      console.log('SIGNED OUT');
      return <Login setStatus={setStatus} setLoginBtn={setLoginBtn} />;
    }
    if (status === 'signedIn') {
      console.log('SIGNED IN');
      return <Profile setStatus={setStatus} setLoginBtn={setLoginBtn} />;
    }
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ChessInfo</span>
        </div>
        <div className="topRight">
          <Button intent="primary" className="signIn" onClick={() => getAccount()}>
            {loginBtn}
          </Button>
          {PAGES.map((tab) => {
            return (
              <Link exact to={tab.link} element={tab.icon} key={tab.id}>
                <h2 key={tab.id} title={tab.page} className="icon">
                  {tab.icon}
                </h2>
              </Link>
            );
          })}
          <br />
        </div>
      </div>
    </div>
  );
}
