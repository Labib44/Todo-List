/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="hero min-h-screen">
            <progress className="progress w-72"></progress>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ form: location }} replace></Navigate>
};

export default PrivateRoute;