import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import footerStyles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.content}>
        <div>
          <div className={footerStyles.logoContainer}>
            <img src="./logo 5 violet.png" alt="logo" />
          </div>
          <h3 className={footerStyles.companyTitle}>Jowbs</h3>
        </div>
        <div className={footerStyles.linksContainer}>
          <div>
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Our Competition</a>
              </li>
              <li>
                <a href="#">Channels</a>
              </li>
              <li>
                <a href="#">Scale</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Social links</h4>
            <ul>
              <li>
                <a href="#"><FaFacebookF/> Facebook</a>
              </li>
              <li>
                <a href="#"><FaInstagram/> Instagram</a>
              </li>
              <li>
                <a href="#"><FaTwitter/> Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
