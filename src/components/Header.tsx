import React from 'react';
import Link from "../components/Link";

const Header: React.FC = () => {
  return (
    <h1 className="header" style={{textAlign: 'left', padding: "5px 20px", backgroundColor: "#161b22"}}>
      <Link target="self" href="/" text="Logo" />
    </h1>
  )
};

export default Header;