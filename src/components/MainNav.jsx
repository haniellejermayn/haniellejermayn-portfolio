import React from 'react';
import NavLinks from './NavLinks';

const MainNav = () => {
  return (
    <nav class="main-nav">
      <NavLinks containerStyles="flex flex-col gap-6 w-[100px] mx-auto" />
    </nav>
  );
};

export default MainNav;