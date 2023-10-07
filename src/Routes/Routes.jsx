import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ServicesDetails from "../components/Services/ServicesDetails";
import Features from "../Pages/Features/Features";
import OurProjects from "../Pages/Projects/OurProjects";
import Login from "../Pages/Login-Registation/Login";
import Register from "../Pages/Login-Registation/Register";
import PrivetRoutes from "./PrivetRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                loader: () => fetch('/services.json'),
                element: <Home></Home>
            },
            {
                path: '/services/:id',
                element: <PrivetRoutes><ServicesDetails></ServicesDetails></PrivetRoutes>
            },
            {
                path: '/features',
                element: <PrivetRoutes><Features></Features></PrivetRoutes>
            },
            {
                path: '/project',
                loader: () => fetch('/projects.json'),
                element: <PrivetRoutes><OurProjects></OurProjects></PrivetRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registetion',
                element: <Register></Register>
            }
        ]
    },
]);

export default router