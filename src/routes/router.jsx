import { createBrowserRouter } from "react-router-dom";
import AppRoze from "../../AppRoze";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DriverRegister from "../pages/auth/DriverRegister";

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
        path: 'login',
        element: <Login />
    },
    {
        path: '/driverregister',
        element: <DriverRegister />
    }



]);

export default router;