import React from "react";
import style from './Header.module.scss'
import {Nav} from "../nav/Nav";
import {Zoom} from "react-awesome-reveal";

export const Header = () => {

    return (

        <div className={style.header}>
            <Zoom duration={3000}>
                <Nav/>
            </Zoom>
        </div>


    )
}