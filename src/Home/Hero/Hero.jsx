import Lottie from "lottie-react";
import animationData from "../../../public/animation 2.json";
import heroStyles from "./Hero.module.css";
import Blob from "../Blob";

function Hero() {

  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.figure}>
        <Lottie animationData={animationData} loop={true} autoPlay={true} />
      </div>
      <div className={heroStyles.heroText}>
        <h1 className={heroStyles.heroTitle}>
          Find and apply to your dream job from home
        </h1>
        <p className={heroStyles.heroDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          reiciendis ipsam inventore eligendi mollitia itaque veniam corporis.
          Consequuntur numquam aliquid fugiat dolorem ipsa provident
          perspiciatis tempore distinctio. Libero debitis animi aut pariatur.
        </p>
        <button className={heroStyles.getStarted}>Get Started</button>
        <button className={heroStyles.learnMore}>Learn more</button>
        <Blob/>
      </div>
    </section>
  );
}

export default Hero;
