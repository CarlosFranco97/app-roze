import { createBrowserRouter } from "react-router-dom";
import AppRoze from "../pages/hompage/AppRoze";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DriverRegister from "../pages/auth/DriverRegister";
import UserTypeLoginSelector from "../pages/UserTypeLoginSelector";
import AboutUs from "../pages/about/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppRoze />
    },

    {
        path: '/register',
        element: <Register />
    },

    {
        path: '/menulogin/login',
        element: <Login />
    },
    {
        path: '/driverregister',
        element: <DriverRegister />
    },
    {
        path: '/menulogin',
        element: <UserTypeLoginSelector />
    },
    {
        path: '/aboutus', 
        element: <AboutUs />
    }



]);

export default router;