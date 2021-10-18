import React from "react";
import style from './Work.module.css'

export type WorkType = {
    title: string
    text: string
}

export const Work = (props: WorkType) => {
    return (
        <div className={style.work}>
            <div className={style.image}></div>
            <div className={style.textContainer}>
                <span className={style.title}>{props.title}</span>
                <p className={style.text}>{props.text}</p>
            </div>

        </div>
    )
}