import React from "react";

let year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer>
          <p>Copyright©{year}</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
