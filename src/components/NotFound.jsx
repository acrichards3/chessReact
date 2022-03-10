import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

export default function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <h1 className='head'>404: Page Not Found</h1>
      </div>
      <div className="row">
          <p className='return'>Sorry, the page you are looking for doesn't exist or an error occured.</p>
          <Link to="/" className='return'>Return to Dashboard</Link>
      </div>
    </div>
  );
}
