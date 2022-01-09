import React from "react";
import style from './Header.module.scss'
import {Nav} from "../nav/Nav";
import {Zoom} from "react-awesome-reveal";

export const Header = () => {

    return (
        <Zoom duration={3000}>
            <div className={style.header}>
                <Nav/>
            </div>
        </Zoom>

    )
}