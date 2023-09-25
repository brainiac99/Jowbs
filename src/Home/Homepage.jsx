import { Outlet } from "react-router-dom";
import Navigation from "../Nav/Navigation";

function Homepage() {
  return (
    <div className="container">
      <Navigation/>
      <Outlet/>
    </div>
  );
}

export default Homepage;
