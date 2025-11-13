import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {loading,user} = useAuth();
    if(loading){
       return <Spinner/>
    } 
    if(user){
        return children
    } else {
       return <Navigate to="/login" state={location.pathname}/>
    }
};

export default PrivateRoute;