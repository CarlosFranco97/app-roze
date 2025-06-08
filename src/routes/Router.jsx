import { createBrowserRouter } from "react-router-dom"
import Login from "../features/auth/Login"
import AboutUs from "../pages/about/AboutUs"
import AppRoze from "../features/homepage/components/AppRoze"
import DriverRegisterPage from "../features/register/DriverRegisterPage"
import UserTypeRegisterSelector from "../pages/UserTypeRegisterSelector"
import Users from "../features/users/Users"
import Conductors from "../features/conductors/Conductors"
import UserRegister from "../features/register/UserRegister"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoze />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/driverregister",
    element: <DriverRegisterPage />,
  },
  {
    path: "/useregister",
    element: <UserRegister />,
  },
  {
    path: "/menuregister",
    element: <UserTypeRegisterSelector />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/conductors",
    element: <Conductors />,
  },
])

export default router
