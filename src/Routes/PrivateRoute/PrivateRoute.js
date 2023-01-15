import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation;
    if (loading) {
        return <Spinner animation="border" />;
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state = {{form:location}} replace></Navigate>
};

export default PrivateRoute;