import React from 'react';
import styles from "./components/Site.module.css";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import { Error404 } from "./components/pages/Error404";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { S } from "./_styles";
import { Model } from "./components/pages/Model";
import { Prices } from "./components/pages/Prices";


export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODELID: '/:id',
    COMPANY: '/:company',
    PRISES: '/prices'
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <nav>
                        <ul>
                            <S.NawWrapper>
                                <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
                                {/*<NavLink to="page/one"*/}
                                {/*         className={({isActive}) => (isActive ? styles.activeNavLink : styles.navLink)}>First*/}
                                {/*    Page</NavLink>*/}
                            </S.NawWrapper>
                            <S.NawWrapper>
                                <NavLink to={PATH.PUMA}>Puma</NavLink>
                            </S.NawWrapper>
                            <S.NawWrapper>
                                <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
                            </S.NawWrapper>                            <S.NawWrapper>
                                <NavLink to={PATH.PRISES}>Prices</NavLink>
                            </S.NawWrapper>
                        </ul>
                    </nav>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={`${PATH.COMPANY}`} element={<Model/>}></Route>
                        <Route path={"/"} element={<Navigate to={PATH.ADIDAS}/>}></Route>
                        <Route path={PATH.ADIDAS} element={<Adidas/>}></Route>
                        <Route path={PATH.PUMA} element={<Puma/>}></Route>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}></Route>
                        <Route path={PATH.PRISES} element={<Prices/>}></Route>
                        <Route path={`${PATH.COMPANY}${PATH.MODELID}`} element={<Model/>}></Route>

                        {/*<Route path={"/page/error404"} element={<Error404/>}></Route>*/}
                        {/*<Route path={"/*"} element={<Navigate to={"/error404"}/>}></Route>*/}

                        <Route path={"/*"} element={<Error404/>}></Route>

                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;

