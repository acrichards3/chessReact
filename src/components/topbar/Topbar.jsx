import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './login/Profile';
import Login from './login/Login';
import SignUp from './login/SignUp';
import { AuthProvider } from '../../contexts/AuthContext';
import PAGES from './PAGES';
import './topbar.css';

export default function Topbar() {
  const [status, setStatus] = useState('signedOut');
  const [show, setShow] = useState(false);

  const getAccount = () => {
    if (status === 'signedIn') {
      console.log('SIGNED IN');
      return (
        <AuthProvider>
          <Profile setStatus={setStatus} show={show} setShow={setShow} />;
        </AuthProvider>
      );
    }
    if (status === 'signedOut') {
      console.log('SIGNED OUT');
      return (
        <AuthProvider>
          <Login setStatus={setStatus} show={show} setShow={setShow} />;
        </AuthProvider>
      );
    }
    if (status === 'signUp') {
      console.log('sign up page');
      return (
        <AuthProvider>
          <SignUp setStatus={setStatus} show={show} setShow={setShow} />;
        </AuthProvider>
      );
    }
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ChessInfo</span>
        </div>
        <div className="topRight">
          {getAccount()}
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
