import buttonStyles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ link, children, type }) {
  return <Link className={`${buttonStyles.link} ${buttonStyles[type]}`} to={link}>{children}</Link>;
}

export default Button;
