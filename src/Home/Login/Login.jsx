import { Link } from "react-router-dom";
import FormButton from "../../utils/FormButton";
import loginStyles from "./Login.module.css";

function Login() {
  return (
    <section className={loginStyles.sectionLogin}>
      <h1 className={loginStyles.pageHeading}>Login to your account</h1>
      <form name="loginForm" action="submit">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="example@email.com" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
        <p className={loginStyles.remember}>
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </p>
        <FormButton>Login</FormButton>
      </form>
      <p className={loginStyles.signup}>
        <span>Don't have an account?</span> <Link to="/signup">Sign up</Link>
      </p>
    </section>
  );
}

export default Login;
