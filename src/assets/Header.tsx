// src/Header.tsx

import React from 'react';


interface HeaderProps {
  title: string;
  subTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
      
    </header>
  );
}

export default Header;
