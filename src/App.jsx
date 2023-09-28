import Home from "./Home/Home";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Hero from "./Home/Hero/Hero";
import Affiliation from "./Home/Affiliation/Affiliation";
import Testimonial from "./Home/Testimonial/Testimonial";
import About from "./Home/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
            element: <About/>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
