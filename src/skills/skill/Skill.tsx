import React from "react";
import style from './Skill.module.scss';

export type SkillType = {
    title: string
    description: string
    iconPath: string
    iconAlt: string
}

export const Skill = (props: SkillType) => {
    return (
        <div className={style.skill}>
            <img className={style.icon} src={props.iconPath} alt={props.iconAlt}/>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}