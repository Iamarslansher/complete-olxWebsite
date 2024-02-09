import React from "react";
import "./index.css";
function Footer() {
  return (
    <div style={{ marginTop: 50 }}>
      <div className="footerImg-div">
        <img
          className="footerImg"
          src="https://st.depositphotos.com/36062274/51512/i/450/depositphotos_515129288-stock-photo-kharkiv-ukraine-november-2020-shopping.jpg"
          alt=""
        />
      </div>
      <div className="footer-copyright">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </div>
  );
}

export default Footer;
