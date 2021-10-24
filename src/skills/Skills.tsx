import React from "react";
import styleContainer from './../common/styles/Container.module.css';
import style from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'HTML'}
                           description={'описание скилла'}/>
                    <Skill title={'CSS'}
                           description={'описание скилла'}/>
                    <Skill title={'JavaScript'}
                           description={'описание скилла'}/>
                </div>
            </div>
        </div>
    )
}