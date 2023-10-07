import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ServicesDetails from "../components/Services/ServicesDetails";
import Features from "../Pages/Features/Features";
import OurProjects from "../Pages/Projects/OurProjects";


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
                element: <ServicesDetails></ServicesDetails>
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/project',
                loader: () => fetch('/projects.json'),
                element: <OurProjects></OurProjects>
            }
        ]
    },
]);

export default router