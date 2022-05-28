import React from 'react';
import Sidebar from './sidebar/Sidebar';
import MobileNav from './mobile/MobileNav';

export default function Navbar() {
  return (
    <>
      <Sidebar />
      <MobileNav />
    </>
  );
}
