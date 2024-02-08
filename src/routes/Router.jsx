import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../component/Shared/Login/Login";
import Register from "../component/Shared/Register/Register";
import Tasks from "../pages/Tasks/Tasks";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Users/Dashboard";
import Projects from "../pages/Dashboard/Projects/Projects";
import ProjectDetails from "../pages/Dashboard/ProjectDetails/ProjectDetails";
import Report from "../pages/Dashboard/Report/Report";
import Users from "../pages/Dashboard/Users/Users";

const routers= createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>,
        children:[
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/tasks', element: <Tasks></Tasks> },
        ]
    },
    {
        path: '/dashboard', element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            { path: '/dashboard', element: <Dashboard></Dashboard> },
            { path: '/dashboard/projects', element: <Projects></Projects> },
            { path: '/dashboard/projectDetails', element: <ProjectDetails></ProjectDetails> },
            { path: '/dashboard/report', element: <Report></Report> },
            { path: '/dashboard/users', element: <Users></Users> },
        ]
    },
    {
        path: '/*', element: <Error></Error>
    }
])

export default routers;