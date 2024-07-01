// @flow
import * as React from 'react';
import { Navigate } from "react-router-dom";
import { PATH } from "./routers";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
};
export const ProtectedRoute = ({children}: Props) => {
    const logged = false;
    return logged
                ? <> {children} </>
                : <Navigate to={PATH.LOGIN}/>
};