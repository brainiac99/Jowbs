import navStyles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={navStyles.navigation}>
      <div className={navStyles.logo}>
        <img src="../../public/logo 5 violet.png" />
      </div>
      <ul className={navStyles.navLinks}>
        <li>
          <a className={navStyles.navLink} href="#">Home</a>
        </li>
        <li>
          <a className={navStyles.navLink} href="#">About</a>
        </li>
        <li>
          <a className={navStyles.navLink} href="#">Contact</a>
        </li>
        <li>
          <a className={navStyles.navLink} href="#">Sign in</a>
        </li>
        <li>
          <a className={navStyles.navLink} href="#">Sign up</a>
        </li>
      </ul>
      <div className={navStyles.dp}>
        <img src="../../public/dp.jpg" />
      </div>
    </nav>
  );
}

export default Navigation;
