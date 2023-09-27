import Footer from "../Footer/Footer";
import Navigation from "../Nav/Navigation";
import Affiliation from "./Affiliation/Affiliation";
import Hero from "./Hero/Hero";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Affiliation/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default Home;
