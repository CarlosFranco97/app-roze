import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/components/Login";
import AboutUs from "../pages/about/AboutUs";
import AppRoze from "../features/homepage/components/AppRoze";
import DriverRegisterPage from "../features/register/DriverRegisterPage";
import UserTypeRegisterSelector from "../pages/UserTypeRegisterSelector";
import UserRegister from "../features/register/UserRegister";
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