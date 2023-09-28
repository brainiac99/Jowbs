import animationData from "../../../public/animation-working.json";
import Blob from "../../utils/Blob";
import Button from "../../utils/Button";
import heroStyles from "./Hero.module.css";
import Illustration from "../../utils/Illustration";

function Hero() {
  return (
    <section className={heroStyles.hero}>
      <Illustration animationData={animationData} loop={true} autoPlay={true} />
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
          <Button link="/" type="primary">
            Start Searching
          </Button>
          <Button link="/" type="secondary">
            Learn More
          </Button>
        </div>
        <Blob className={heroStyles.blob} />
      </div>
    </section>
  );
}

export default Hero;
