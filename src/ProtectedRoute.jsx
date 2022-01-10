import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({path, exact, children}) => {
    const auth = useSelector((state) => state.userInfo)
    return auth ? (
        <div>
            <Route path={path} exact={exact}>
                {children}
            </Route>
        </div>
    ) : (
        <Navigate to="/" />
    )
}

export default ProtectedRoute;
