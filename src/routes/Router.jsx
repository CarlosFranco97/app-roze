import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/components/Login";
import AboutUs from "../pages/about/AboutUs";
import AppRoze from "../features/homepage/components/AppRoze";
import DriverRegisterPage from "../features/register/DriverRegisterPage";
import UserTypeRegisterSelector from "../pages/UserTypeRegisterSelector";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppRoze />
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
]);

export default router;