import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DriverRegister from "../pages/auth/DriverRegister";
import DriverRegisterSecondPage from "../pages/auth/DriverRegisterSecondPage";
import UserTypeLoginSelector from "../pages/UserTypeLoginSelector";
import AboutUs from "../pages/about/AboutUs";
import AppRoze from "../pages/homepage/AppRoze";

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
       path:'/driverregistersecondpage',
       element: <DriverRegisterSecondPage />
    }
    ,
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