// @flow
import * as React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "./routers";

export const PrivateRoute = () => {
    const isAuth = false;
    return isAuth
                ? <Outlet/>
                : <Navigate to={PATH.LOGIN}/>
};