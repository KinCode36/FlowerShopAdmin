import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

const Nav = () => {
  return (
    <nav className="fixed top-0 left-60 right-0 z-50 h-15 bg-white border-b border-solid border-[#E0DDD6] px-7 flex items-center">
      <LeftNav />
      <RightNav />
    </nav>
  );
};

export default Nav;