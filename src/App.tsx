import React from 'react';
import styles from "./components/Site.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { S } from "./_styles";
import { PATH } from "./routes/routers";
import { ButtonBack } from "./components/buttonBack/ButtonBack";


function App() {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(-1);
    }
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
                            </S.NawWrapper>
                            <S.NawWrapper>
                                <NavLink to={PATH.PRISES}>Prices</NavLink>
                            </S.NawWrapper>
                            <S.NawWrapper>
                                <NavLink to={PATH.PROTECTED}>Protected</NavLink>
                            </S.NawWrapper>
                        </ul>
                    </nav>
                </div>
                <div className={styles.content}>
                    <ButtonBack/>
                    <button onClick={navigateHandler} className={}>Back</button>
                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path={`${PATH.COMPANY}`} element={<Model/>}></Route>*/}
                    {/*    <Route path={"/"} element={<Navigate to={PATH.ADIDAS}/>}></Route>*/}
                    {/*    <Route path={PATH.ADIDAS} element={<Adidas/>}></Route>*/}
                    {/*    <Route path={PATH.PUMA} element={<Puma/>}></Route>*/}
                    {/*    <Route path={PATH.ABIBAS} element={<Abibas/>}></Route>*/}
                    {/*    <Route path={PATH.PRISES} element={<Prices/>}></Route>*/}
                    {/*    <Route path={`${PATH.COMPANY}${PATH.MODELID}`} element={<Model/>}></Route>*/}
                    {/*    /!*<Route path={"/page/error404"} element={<Error404/>}></Route>*!/*/}
                    {/*    /!*<Route path={"/*"} element={<Navigate to={"/error404"}/>}></Route>*!/*/}
                    {/*    <Route path={"/*"} element={<Error404/>}></Route>*/}
                    {/*</Routes>*/}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;

