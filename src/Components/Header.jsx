import React from "react";
import Logo from "../Images/logo.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="logo" className="logo" />
        <h1>Google Keep</h1>
      </div>
    </>
  );
};

export default Header;
