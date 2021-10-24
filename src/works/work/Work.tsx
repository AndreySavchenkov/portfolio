import React from "react";
import style from './Work.module.css'

export type WorkType = {
    title: string,
    text: string,
    style: {},
}

export const Work = (props: WorkType) => {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <a href='#' className={style.viewBtn}>See</a>
            </div>
            <div className={style.textContainer}>
                <span className={style.projectTitle}>{props.title}</span>
                <p className={style.text}>{props.text}</p>
            </div>

        </div>
    )
}