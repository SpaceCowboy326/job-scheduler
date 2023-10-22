import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full bg-slate-400">
      <span>{title}</span>
    </div>
  );
};

export default Header;
