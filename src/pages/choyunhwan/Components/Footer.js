import React from "react";
import "./FooterStyle.scss";
import { Explain } from "./FooterData";
function Footer() {
  return (
    <div className="footer">
      {Explain.map((value, key) => (
        <span key={key} className="footerValue">
          {value}
        </span>
      ))}
    </div>
  );
}

export default Footer;
