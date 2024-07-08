import { createBrowserRouter, Navigate, NavLink, RouteObject } from "react-router-dom";
import { Adidas } from "../components/pages/Adidas";
import { Error404 } from "../components/pages/Error404";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import App from "../App";
import { Model } from "../components/pages/Model";
import { Suspense } from 'react';
import { Prices } from "../components/pages/Prices";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../components/pages/Login";

export const PATH = {
    ROOT: '/',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    SNEAKERSMODEL: '/:company/:id',
    PRISES: '/prices',
    PROTECTED: '/hidden',
    ERROR: '/404',
    LOGIN: '/login'
} as const;

// const Puma = lazy(() => import "../components/pages/Puma"))
//useNavigation, useMatches, iseRouterError

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ROOT,
        element: <Navigate to={PATH.ADIDAS}/>
    },
    {
        path: PATH.LOGIN,
        element: <Login/>
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>
    },
    {
        path: PATH.PUMA,
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Puma/>
            </Suspense>
        )
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>
    },
    {
        path: PATH.SNEAKERSMODEL,
        element: <Model/>
    },
    {
        path: PATH.PRISES,
        element: <Prices/>
    },
    {
        path: PATH.ERROR,
        element: <Error404/>
    },
];

const privateRoute: RouteObject[] = [
    {
        path: PATH.PROTECTED,
        element: <ProtectedPage/>
    },
];

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            ...publicRoutes,
            {
                element: <PrivateRoute/>,
                children: privateRoute
            }
        ]
    },

]);