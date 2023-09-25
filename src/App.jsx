import Homepage from "./Home/Homepage";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Home/Hero/Hero";

const router = createBrowserRouter([{
  element: <Homepage/>,
  children: [
    {
      path: '/',
      element: <Hero/>
    }
  ]
}])

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
