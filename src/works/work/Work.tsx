import React from "react";
import style from './Work.module.scss'

export type WorkType = {
    title: string,
    text: string,
    style: {},
    link: string;
    linkCode: string;
}

export const Work = (props: WorkType) => {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <a href={props.link} className={style.viewBtn}>Demo</a>
                <a href={props.linkCode} className={style.viewBtn}>Code</a>
            </div>
            <div className={style.textContainer}>
                <span className={style.projectTitle}>{props.title}</span>
                <p className={style.text}>Technology Stack: {props.text}</p>
            </div>

        </div>
    )
}