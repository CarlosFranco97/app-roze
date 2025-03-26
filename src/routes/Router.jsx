import { createBrowserRouter } from "react-router-dom";
import AppRoze from "../../AppRoze";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DriverRegister from "../pages/auth/DriverRegister";
import UserTypeLoginSelector from "../pages/UserTypeLoginSelector";

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
    }



]);

export default router;