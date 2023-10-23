import React from "react";

import MainNav from "@/components/MainNav";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full bg-slate-400">
      <span>{title}</span>
      <MainNav />
    </div>
  );
};

export default Header;
