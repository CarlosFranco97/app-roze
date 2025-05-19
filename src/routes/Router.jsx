import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import AboutUs from "../pages/about/AboutUs";
import AppRoze from "../pages/homepage/AppRoze";
import DriverRegisterPage from "../pages/auth/DriverRegisterPage";
import UserTypeRegisterSelector from "../pages/UserTypeRegisterSelector";
import UserRegister from "../pages/auth/UserRegister";
import UserProfile from "../pages/user/UserProfile";
import DriverProfile from "../pages/driver/driverProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppRoze />
    },

    {
        path: '/useregister',
        element: <UserRegister/>
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/driverregister',
        element: <DriverRegisterPage />
    },
    
    {
        path:'/menuregister',
        element:<UserTypeRegisterSelector/>
    },
    {
        path: '/aboutus', 
        element: <AboutUs />
    },

    {
        path:'/userprofile',
        element:<UserProfile/>

    },
    {
        path:'/driverprofile',
        element:<DriverProfile/>
    }


]);

export default router;