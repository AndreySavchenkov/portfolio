import React from "react";
import containerStyle from './../common/styles/Container.module.css';
import style from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h3 className={style.title}>Andrey Savchenkov</h3>
                <div className={style.items}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <span>2021(c) Все права защищены</span>
            </div>
        </div>
    )
}