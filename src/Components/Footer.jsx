import React from "react";

let year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer>
          <p>CopyrightÂ©{year}</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
