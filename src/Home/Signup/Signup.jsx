import { Link } from "react-router-dom";
import FormButton from "../../utils/FormButton";
import signupStyles from "./Signup.module.css";

function Signup() {
  return (
    <section className={signupStyles.sectionSignup}>
      <h1 className={signupStyles.pageHeading}>Create new account</h1>
      <form name="signupForm" action="submit">
        <div className={signupStyles.signupGrid}>
          <label>First Name</label>
          <input type="text" placeholder="John"/>
          <label>Last Name</label>
          <input type="text" placeholder="Doe"/>
          <label htmlFor="signupMail">Email</label>
          <input type="email" name="signupMail" id="signupMail" placeholder="example@email.com"/>
          <label htmlFor="signupPass">Password</label>
          <input type="password" name="signupPass" id="signupPass" />
          <FormButton>Create account</FormButton>
          <p className={signupStyles.login}>
            <span>Already have an account?</span> <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Signup;
