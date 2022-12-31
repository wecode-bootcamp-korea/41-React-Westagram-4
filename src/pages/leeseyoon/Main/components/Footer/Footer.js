import "./Footer.scss";
import { FOOTER_INFO_LIST } from "./data";
console.log(FOOTER_INFO_LIST);

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <ul>
        {FOOTER_INFO_LIST.map((info, idx) => {
          return (
            <li key={info.id}>
              <a>
                {idx !== 0 ? " · " : ""}
                {info.text}
              </a>
            </li>
          );
        })}
      </ul>
      <div>2022 INSTAGRAM</div>
    </footer>
  );
};

export default Footer;
