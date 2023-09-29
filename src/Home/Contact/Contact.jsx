import animationData from '../../../public/animations/animation-sending-female.json';
import FormButton from '../../utils/FormButton';
import Illustration from "../../utils/Illustration";
import contactStyles from "./Contact.module.css";

function Contact() {
  return (
    <section className={contactStyles.sectionContact}>
      <h1 className={contactStyles.pageHeading}>Contact Us</h1>
      <p>Get in touch with us and let us know how we can help</p>
      <div className={contactStyles.contactGrid}>
        <form action="submit">
          {/* <div className={contactStyles.name}>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div> */}
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <input
            type="text"
            placeholder="Your message"
            className={contactStyles.inputMessage}
            required
          />
          <div className={contactStyles.newsletter}>
            <input
              className={contactStyles.inputCheckbox}
              type="checkbox"
              id="newsletter"
            />
            <label htmlFor="newsletter">Sign me up for Jowbs newsletter</label>
          </div>
          <FormButton>Send Message</FormButton>
        </form>
        <Illustration loop={true} autoPlay={true} animationData={animationData} />
      </div>
    </section>
  );
}

export default Contact;
