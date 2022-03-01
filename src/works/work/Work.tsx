import React from "react";
import style from 'works/work/Work.module.scss'

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
                <a  target="_blank" href={props.link} className={style.viewBtn}>Demo</a>
                <a  target="_blank" href={props.linkCode} className={style.viewBtn}>Code</a>
            </div>
            <div className={style.textContainer}>
                <span className={style.projectTitle}>{props.title}</span>
                <p className={style.text}>Technology Stack:<span className={style.textTechnologies}>{props.text}</span> </p>
            </div>

        </div>
    )
}