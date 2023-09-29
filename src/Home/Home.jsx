import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Nav/Navigation";

function Home() {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
