import { Link } from "react-router-dom";
import navStyles from "./Navigation.module.css";
import Button from "../utils/Button";

function Navigation() {
  return (
    <nav className={navStyles.navigation}>
      <Link to="/" className={navStyles.logo}>
          <img src="../../public/logo 5 violet.png" />
      </Link>
      <ul className={navStyles.navLinks}>
        <li>
          <Link className={navStyles.navLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={navStyles.navLink} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={navStyles.navLink} to="/">
            Contact
          </Link>
        </li>
        <li>
          <Button type="secondary" link="/">
            Sign in
          </Button>
        </li>
        <li>
          <Button type="primary" link="/">
            Sign up
          </Button>
        </li>
      </ul>
      <div className={navStyles.dp}>
        <img src="../../public/dp.jpg" />
      </div>
    </nav>
  );
}

export default Navigation;
