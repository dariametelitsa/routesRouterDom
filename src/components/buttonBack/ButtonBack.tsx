// @flow 
import * as React from 'react';
import style from './ButtonBack.module.css';
import { NavLink } from "react-router-dom";
import { PATH } from "../../routes/routers";

type Props = {
    
};
export const ButtonBack = (props: Props) => {
    return (
        <div className={style.HorizontalNavigation}>
            <NavLink className={style.LinkLikeButton} to={PATH.ADIDAS}>Back to main</NavLink>
        </div>
    );
};