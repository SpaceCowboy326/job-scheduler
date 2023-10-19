import AppBar from '@mui/base';
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-red-300">
      <span>{title}</span>
    </div>
  );
};

export default Header;

