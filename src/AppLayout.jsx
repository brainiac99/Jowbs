import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div className="container">
      <Outlet/>
    </div>
  )
}

export default AppLayout
