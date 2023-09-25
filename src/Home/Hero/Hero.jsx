import Lottie from "lottie-react";
import animationData from "../../../public/animation 2.json";
import Blob from "../../utils/Blob";
import Button from "../../utils/Button";
import heroStyles from "./Hero.module.css";

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
        <div className={heroStyles.buttonsContainer}>
          <Button link="/" type="primary">Get Started</Button>
          <Button link="/" type="secondary">Learn More</Button>
        </div>
        <Blob className={heroStyles.blob}/>
      </div>
    </section>
  );
}

export default Hero;
