import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Nav/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
