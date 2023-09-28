import Illustration from "../../utils/Illustration";
import animationData from "../../../public/animation-searching.json";
import {FaRegLightbulb, FaDumbbell, FaCreativeCommonsZero} from "react-icons/fa6"
import {BsLightningCharge} from "react-icons/bs"
import aboutStyles from "./About.module.css";

function About() {
  return (
    <>
      <section className={aboutStyles.sectionAbout}>
        <h1 className={aboutStyles.pageHeading}>About</h1>
        <Learn />
      </section>
      <Reasons />
    </>
  );
}

function Learn() {
  return (
    <div className={aboutStyles.learn}>
      <Illustration animationData={animationData} loop={true} autoPlay={true} />
      <div className={aboutStyles.learnText}>
        <h2>learn about jowbs</h2>
        <p>
          Welcome, this is the ultimate online platform for job seekers and
          employers. We are more than just a job board, it is a simple and fast
          way to find and apply for the best jobs for you. Whether you are
          looking for a full-time, part-time, freelance, or remote job,
          jowbs.com can help you find it in seconds. Jowbs.com uses a powerful
          search engine to scan millions of job postings from thousands of
          trusted sources and show you the most relevant and attractive ones
          based on your skillset or qualifications. You can also filter and sort
          the results by location, salary, date, company, and more. We also
          provides you with useful information and reviews on each employer, so
          you can make an informed decision before applying. Jowbs.com is your
          one-stop shop for finding your dream job and advancing your career.
          Join us today and let us help you land your next job.
        </p>
      </div>
    </div>
  );
}

function Reasons() {
  return (
    <section className={aboutStyles.sectionReasons}>
      <h2>Why choose us</h2>
      <div className={aboutStyles.reasonsGrid}>
        <div className={aboutStyles.reason}>
          <div className={aboutStyles.reasonIcon}>
            <BsLightningCharge/>
          </div>
          <div className={aboutStyles.reasonText}>
            <h3>Simple and Fast</h3>
            <p>
              You can find and apply for the best jobs for you in seconds,
              without any hassle or registration.
            </p>
          </div>
        </div>
        <div className={aboutStyles.reason}>
          <div className={aboutStyles.reasonIcon}>
            <FaDumbbell/>
          </div>
          <div className={aboutStyles.reasonText}>
            <h3>Powerful and Relevant</h3>
            <p>
              You can search for jobs based on your skillset or qualifications,
              and filter and sort the results by various criteria, such as
              location, salary, date, company, and more.
            </p>
          </div>
        </div>
        <div className={aboutStyles.reason}>
          <div className={aboutStyles.reasonIcon}>
            <FaRegLightbulb/>
          </div>
          <div className={aboutStyles.reasonText}>
            <h3>Informative and Trustworthy</h3>
            <p>
              You can get useful information and reviews on each employer, so
              you can make an informed decision before applying.
            </p>
          </div>
        </div>
        <div className={aboutStyles.reason}>
          <div className={aboutStyles.reasonIcon}>
            <FaCreativeCommonsZero/>
          </div>
          <div className={aboutStyles.reasonText}>
            <h3>Free and Unlimited</h3>
            <p>
              You can use jowbs.com as much as you want, without any fees or
              restrictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
