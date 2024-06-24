import { createBrowserRouter } from "react-router-dom";
import { Adidas } from "../components/pages/Adidas";
import { Error404 } from "../components/pages/Error404";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import App from "../App";
import { Model } from "../components/pages/Model";
import { lazy, Suspense } from 'react';
import { Prices } from "../components/pages/Prices";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    SNEAKERSMODEL: '/:company/:id',
    PRISES: '/prices',
} as const;

// const Puma = lazy(() => import "../components/pages/Puma"))
//useNavigation, useMatches, iseRouterError

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
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
            }
        ]
    },

]);