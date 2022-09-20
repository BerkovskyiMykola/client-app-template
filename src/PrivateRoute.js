import React from 'react';
import { Navigate } from 'react-router-dom';
import { shallowEqual, useSelector } from "react-redux";

export const PrivateRoute = ({ roles, children }) => {

    const { user } = useSelector(state => ({
        user: state.auth.user
    }), shallowEqual)

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (roles && roles.indexOf(user.role) === -1) {
        return <Navigate to='/' replace />;
    }

    return children;
}