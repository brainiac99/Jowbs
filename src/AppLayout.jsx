import { Outlet } from "react-router-dom"
import Navigation from "./Nav/Navigation"

function AppLayout() {
  return (
    <div className="container">
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default AppLayout
