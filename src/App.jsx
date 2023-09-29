import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Home/About/About";
import Affiliation from "./Home/Affiliation/Affiliation";
import Contact from "./Home/Contact/Contact";
import Hero from "./Home/Hero/Hero";
import Home from "./Home/Home";
import Login from "./Home/Login/Login";
import Testimonial from "./Home/Testimonial/Testimonial";
import Signup from "./Home/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Affiliation />
            <Testimonial />
          </>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
