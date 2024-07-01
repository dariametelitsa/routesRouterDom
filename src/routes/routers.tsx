import { createBrowserRouter, Navigate, NavLink } from "react-router-dom";
import { Adidas } from "../components/pages/Adidas";
import { Error404 } from "../components/pages/Error404";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import App from "../App";
import { Model } from "../components/pages/Model";
import { Suspense } from 'react';
import { Prices } from "../components/pages/Prices";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/pages/Login";

export const PATH = {
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

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
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
                path: PATH.PROTECTED,
                element: <ProtectedRoute>
                    <ProtectedPage/>
                </ProtectedRoute>
            },
            {
                path: PATH.ERROR,
                element: <Error404/>
            },
        ]
    },

]);