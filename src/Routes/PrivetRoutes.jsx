import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="flex justify-center items-center h-[80vh]"><span className="loading loading-lg loading-spinner text-secondary"></span></div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivetRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivetRoutes;