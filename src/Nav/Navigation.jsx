import { Link, NavLink } from "react-router-dom";
import Button from "../utils/Button";
import navStyles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={navStyles.navigation}>
      <Link to="/" className={navStyles.logo}>
          <img src="./logo 5 violet.png" />
      </Link>
      <ul className={navStyles.navLinks}>
        <li>
          <NavLink className={navStyles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={navStyles.navLink} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={navStyles.navLink} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <Button type="primary" link="/login">
            Login
          </Button>
        </li>
        {/* <li>
          <Button type="primary" link="/">
            Sign up
          </Button>
        </li> */}
      </ul>
      <div className={navStyles.dp}>
        <img src="./dp.jpg" />
      </div>
    </nav>
  );
}

export default Navigation;
