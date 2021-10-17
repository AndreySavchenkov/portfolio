import React from "react";
import style from './Main.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There!</span>
                    <h1>I'm Andrey Savchenkov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>

        </div>
    )
}